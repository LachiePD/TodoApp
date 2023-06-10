'use client';

import {createContext, useReducer} from 'react';
import {addingReducer, todoListReducer} from './reducers/reducer.js';
export const AddingContext = createContext(null);
export const TodoListContext= createContext(null);
const TodoContext = ({children}) =>{

	const [adding, addingDispatch] = useReducer(addingReducer, false)
	const [todoList, todoListDispatch]=useReducer(todoListReducer, {});

	return(

		<AddingContext.Provider value={{adding, addingDispatch}}>
		<TodoListContext.Provider value = {{todoList, todoListDispatch}}>
		{children}
		</TodoListContext.Provider>
		</AddingContext.Provider>
	)
}


export default TodoContext;
