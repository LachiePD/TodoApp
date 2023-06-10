'use client';
import TodoBox from './TodoBox';
import { useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {TodoListContext} from '../TodoContext.js';

const Content = () =>{

	const {todoList, todoListDispatch} = useContext(TodoListContext);

	{/*This maps through the todoListContext, returning a TodoBox per todo.*/}
	const mappedList  = Object.entries(todoList).map((todo) =>(
			<TodoBox 
			todo={todo}/>
	));


	return(
		<div className="  flex-1 justify-around flex items-center flex-wrap overflow-auto">
		{mappedList}
		</div>
	);
}
export default Content;
