import { GraphTestId, NodeGraphTest } from '@ironclad/rivet-core';
import { atom } from 'recoil';

interface GraphTesterState {
  isOpen: boolean;
  graphTest?: NodeGraphTest;
  activeInputPerturbation: number;
  activeTestRunning: boolean;
  testResults: Record<GraphTestId, GraphTesterResults[]>;
}

export interface GraphTesterResults {
  name: string;
  inputPerturbationResults: GraphTesterInputPerturbationResults[];
  isRunning?: boolean;
}

export interface GraphTesterInputPerturbationResults {
  duration: number;
  testInputIndex: number;
  validationOutput: {
    passed: boolean;
  }[];
}

export const graphTesterState = atom<GraphTesterState>({
  key: 'graphTesterState',
  default: {
    isOpen: false,
    testResults: {},
    activeInputPerturbation: 0,
    activeTestRunning: false,
  },
});