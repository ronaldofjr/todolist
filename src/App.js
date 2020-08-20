import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import { ThemeContext, initialState } from './context/ThemeContext';
import { listReducer } from './reducers/listReducer';

import Form from './components/Form';
import List from './components/List';
import Nav from './components/Nav';

function App() {
	const [stateValues, dispatch] = useReducer(listReducer, initialState);

	useEffect(() => {
		async function getList() {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/todos'
			);

			const finalList = response.data.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});

			dispatch({
				type: 'FETCHED',
				payload: finalList,
			});
		}

		getList();
	}, []);

	return (
		<>
			<ThemeContext.Provider value={{ stateValues, dispatch }}>
				<Form />
				<Nav />
				<List />
			</ThemeContext.Provider>
		</>
	);
}

export default App;
