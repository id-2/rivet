import { ChartNode, NodeId, NodeInputDefinition, PortId, NodeOutputDefinition } from '../NodeBase';
import { nanoid } from 'nanoid';
import { EditorDefinition, NodeImpl, nodeDefinition } from '../NodeImpl';
import { DataValue } from '../DataValue';

export type GptFunctionNode = ChartNode<'gptFunction', GptFunctionNodeData>;

export type GptFunctionNodeData = {
  name: string;
  description: string;
  schema: string;
};

export class GptFunctionNodeImpl extends NodeImpl<GptFunctionNode> {
  static create(): GptFunctionNode {
    const chartNode: GptFunctionNode = {
      type: 'gptFunction',
      title: 'GPT Function',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
        width: 250,
      },
      data: {
        name: 'newFunction',
        description: 'No description provided',
        schema: `{
  "type": "object",
  "properties": {}
}`,
      },
    };

    return chartNode;
  }

  getInputDefinitions(): NodeInputDefinition[] {
    return [];
  }

  getOutputDefinitions(): NodeOutputDefinition[] {
    return [
      {
        id: 'function' as PortId,
        title: 'Function',
        dataType: 'gpt-function',
      },
    ];
  }

  getEditors(): EditorDefinition<GptFunctionNode>[] {
    return [
      {
        type: 'string',
        label: 'Name',
        dataKey: 'name',
      },
      {
        type: 'string',
        label: 'Description',
        dataKey: 'description',
      },
      {
        type: 'code',
        label: 'Schema',
        dataKey: 'schema',
        language: 'json',
      },
    ];
  }

  async process(inputs: Record<string, DataValue>): Promise<Record<string, DataValue>> {
    const parsedSchema = JSON.parse(this.data.schema);

    return {
      ['function' as PortId]: {
        type: 'gpt-function',
        value: {
          name: this.data.name,
          description: this.data.description,
          parameters: parsedSchema,
        },
      },
    };
  }
}

export const gptFunctionNode = nodeDefinition(GptFunctionNodeImpl, 'GPT Function');