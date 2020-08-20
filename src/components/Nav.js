import React, { useContext } from 'react';
import { Row, Col, Card } from 'react-materialize';

import { ThemeContext } from '../context/ThemeContext';

export default function Nav() {
	const { stateValues, dispatch } = useContext(ThemeContext);

	const totalTodos =
		stateValues && stateValues.list.length > 0 ? stateValues.list.length : 0;

	const totalActives =
		stateValues && stateValues.list.length > 0
			? stateValues.list.filter((item) => {
					return item.completed === true;
			  }).length
			: 0;

	return (
		<>
			<Row>
				<Col m={6} s={12}>
					<Card>
						Total de TODOS : {totalTodos} | Total Ativos: {totalActives}
					</Card>
				</Col>
			</Row>
		</>
	);
}
