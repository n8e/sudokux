import React from 'react';
import Box from './Box';

/* Grid Component */
const Grid = props => {
	const { grid, status } = props;
	const { isSolved } = status;

	const renderBox = (row, val, col) => {
		return (
			<Box
				key={col}
				row={row}
				col={col}
				val={val}
				isSolved={isSolved}
				{...props}
			/>
		);
	};

	const renderRow = (vals, row) => {
		return (
			<tr key={row}>
				{vals.map((val, key) => renderBox(row, val, key))}
			</tr>
		);			
	};

	return (
		<table>
			<tbody>
				{grid.map(renderRow)}
			</tbody>
		</table>

	);
};

export default Grid;
