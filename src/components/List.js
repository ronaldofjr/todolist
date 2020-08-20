import React, { useContext } from 'react';
import { Switch, Button } from 'react-materialize';

import { ThemeContext } from '../context/ThemeContext';

export default function List() {
	const { stateValues, dispatch } = useContext(ThemeContext);

	function handleClick(e) {
		const actual = parseInt(e.target.id.replace('switch', ''));
		const value = e.target.checked;

		const finalList = stateValues.list.map((item) => {
			if (item.id === actual) {
				item.completed = value;
			}
			return item;
		});

		dispatch({
			type: 'CHANGE_SWITCH',
			payload: finalList,
		});
	}

	function handleDelete(id) {
		dispatch({
			type: 'DELETE_ITEM',
			payload: id,
		});
	}

	return (
		<>
			{stateValues.loading &&
				stateValues.list.map((item) => {
					return (
						<li key={item.id} style={styles.flex}>
							<Switch
								id={`switch${item.id}`}
								offLabel=""
								checked={item.completed}
								onChange={handleClick}
								onLabel=""
							/>
							<span
								style={
									item.completed === true ? styles.active : styles.inactive
								}
							>
								{item.title}
							</span>
							&nbsp;
							<Button
								className="red"
								floating
								icon="-"
								small
								node="button"
								waves="light"
								onClick={() => handleDelete(item.id)}
							/>
						</li>
					);
				})}
		</>
	);
}

const styles = {
	flex: {
		display: 'flex',
		margin: '10px',
		alignItens: 'vertical',
	},
	active: {
		color: 'black',
	},
	inactive: {
		color: '#cecece',
		fontStyle: 'italic',
	},
};
