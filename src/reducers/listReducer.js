export const listReducer = (state, action) => {
	switch (action.type) {
		case 'FETCHED':
			return { ...state, loading: true, list: action.payload };
		case 'CHANGE_SWITCH':
			return { ...state, list: action.payload };
		case 'ADD_ITEM':
			const lista = state.list.concat(action.payload);

			lista.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});

			return {
				loading: state.loading,
				list: lista,
			};
		case 'DELETE_ITEM':
			const listDeleted = state.list.filter((item) => {
				return item.id !== action.payload;
			});
			console.log('listDeleted');

			return {
				...state,
				list: listDeleted,
			};
		default:
			return state;
	}
};
