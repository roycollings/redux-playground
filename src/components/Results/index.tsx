import React from 'react';
import './index.css';
import { selectFilteredData } from '../FilterBar/filterSlice';

import { useAppSelector } from '../../app/hooks';

interface Data {
  id: string;
  name: string;
}

export interface ResultRowsProps {
  filteredData: Array<Data>;
}

const ResultRows = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {/* Re-renders when the store 'filter' state changes. */}
        {useAppSelector(selectFilteredData).map(({ id, name }) => (
          <tr key={id}>
            <td className="result-id">{id}</td>
            <td className="result-name">{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ResultRows;
