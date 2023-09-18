import { useEffect, useState } from 'react';
import { datasetProvider } from '../utils/globals';
import { toast } from 'react-toastify';
import { DatasetRow, DatasetId, getError, newId, Dataset } from '@ironclad/rivet-core';

export function useDataset(datasetId: DatasetId) {
  const [dataset, updateDataset] = useState<Dataset | null>(null);

  const reloadDatasetData = async () => {
    try {
      const result = await datasetProvider.getDatasetData(datasetId);
      updateDataset(result);
    } catch (err) {
      toast.error(getError(err).message);
    }
  };

  useEffect(() => {
    reloadDatasetData();
  }, [datasetId]);

  const deleteRow = async (row: number) => {
    const newData = [...dataset!.rows];
    newData.splice(row, 1);
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const deleteColumn = async (column: number) => {
    const newData = [...dataset!.rows];
    newData.forEach((row) => row.data.splice(column, 1));
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const insertRowAbove = async (row: number) => {
    const newData = [...dataset!.rows];
    newData.splice(row, 0, {
      id: newId(),
      data: Array(dataset!.rows[0]?.data.length ?? 1).fill(''),
    });
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const insertRowBelow = async (row: number) => {
    const newData = [...dataset!.rows];
    newData.splice(row + 1, 0, {
      id: newId(),
      data: Array(dataset!.rows[0]?.data.length ?? 1).fill(''),
    });
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const insertColumnLeft = async (column: number) => {
    const newData = [...dataset!.rows];
    newData.forEach((row) => row.data.splice(column, 0, ''));
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const insertColumnRight = async (column: number) => {
    const newData = [...dataset!.rows];
    newData.forEach((row) => row.data.splice(column + 1, 0, ''));
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: newData,
    });
    await reloadDatasetData();
  };

  const putDatasetData = async (data: DatasetRow[]) => {
    await datasetProvider.putDatasetData(datasetId, {
      ...dataset!,
      rows: data,
    });
    await reloadDatasetData();
  };

  return {
    dataset,
    deleteRow,
    deleteColumn,
    insertRowAbove,
    insertRowBelow,
    insertColumnLeft,
    insertColumnRight,
    putDatasetData,
  };
}
