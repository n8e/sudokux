import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import { solver, isSolvable, isComplete } from './utils/sudoku';
import { solve, clear, undo} from './actions/grid';

//create your forceUpdate hook
const useForceUpdate = () => {
	const [value, setValue] = useState(0); // integer state
	return () => setValue(value => value + 1); // update state to force render
	// An function that increment 👆🏻 the previous state like here 
	// is better than directly setting `value + 1`
}

/* Application Container Component */
const App = props => {
	const { store } = props;
	const { grid, status } = store.getState();
	const { isSolved, isEdited } = status;
	const forceUpdate = useForceUpdate();

	useEffect(() => {
		const unsubscribe = props.store.subscribe(() => forceUpdate());

		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<div>
			<button
				className='undo'
				disabled={window.gridHistory && !window.gridHistory.length}
				onClick={() => store.dispatch(undo())}
			>
				⤺ Undo
			</button>
			<button
				className='clear'
				disabled={!isEdited}
				onClick={() => store.dispatch(clear())}
			>
				⟲ Clear
			</button>

			<Grid grid={grid} status={status} {...props}/>

			<button
				className='check'
				disabled={isSolved}
				onClick={() => {
					if (isSolvable(grid)) {
						if (isComplete(grid)) {
							return alert('Congratulations, you solved it!!');
						}
						alert('This Sudoku is solvable, keep going !!');
					} else {
						alert('This Sudoku is NOT solvable');
					}					
				}}
			>
				Check
			</button>
			<button
				className='solve'
				onClick={() => store.dispatch(solve())}
			>
				Solve
			</button>			
			<div className='footnote'>
				<p>Adapted from <a href='http://danialk.github.io/'> Danial Khosravi </a> </p>
				<p><a href='http://github.com/n8e'> Nate Martin </a></p>
			</div>				
		</div>

	);
};

export default App;
