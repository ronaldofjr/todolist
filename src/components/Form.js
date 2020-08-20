import React, { useContext, useState, useRef } from 'react';
import { TextInput, Button, Switch } from 'react-materialize';

import { ThemeContext } from '../context/ThemeContext';

export default function Form() {
	const { stateValues, dispatch } = useContext(ThemeContext);

	const [inputNome, setInputNome] = useState('');
	const [inputCompleted, setInputCompleted] = useState(true);
	const inputRef = useRef();

	function handleClick(e) {
		dispatch({
			type: 'ADD_ITEM',
			payload: {
				id: Math.floor((Math.random() + 1) * 300),
				title: inputNome,
				completed: inputCompleted,
			},
		});

		setInputNome('');
		setInputCompleted(true);
		inputRef.current.focus();
	}

	return (
		<>
			<div style={styles.initial}>
				<h3>CADASTRO DE NOVO ITEM:</h3>
				<div style={styles.flex}>
					<TextInput
						ref={inputRef}
						id="title"
						name="title"
						label="TÍTULO"
						value={inputNome}
						onChange={(e) => {
							setInputNome(e.target.value);
						}}
					/>
					<Switch
						id="completed"
						offLabel=""
						checked={inputCompleted}
						onChange={(e) => {
							setInputCompleted(!inputCompleted);
						}}
						onLabel=""
					/>

					<Button
						node="button"
						type="submit"
						waves="light"
						onClick={handleClick}
					>
						CADASTRAR
					</Button>
				</div>
			</div>
		</>
	);
}

const styles = {
	initial: {
		padding: 10,
		margin: 10,
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
	},
};
