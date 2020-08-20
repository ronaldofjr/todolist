import React from 'react';

export const initialState = { loading: false, list: {} };

export const ThemeContext = React.createContext(initialState);
