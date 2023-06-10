'use client';
import {v4 as uuidv4} from 'uuid';
import {useState, useContext} from 'react';
import {revalidateTag} from 'next/cache';
import {AddingContext, TodoListContext} from '../TodoContext';
const AddPopup = () =>{

	const [task, setTask] = useState({main:"", subTasks:{}});

	const {todoList, todoListDispatch} = useContext(TodoListContext);
	const {adding, addingDispatch} = useContext(AddingContext);
	
	const handleSubtaskClick = (e)=>{
		e.preventDefault();
		let newKey = uuidv4();
		setTask({...task, subTasks:{...task.subTasks, [newKey]:""}})
	}
	const handleMainChange = (e) =>{
		setTask({...task, main:e.target.value})
	}
	const handleSubChange = (e, key) =>{
		setTask({...task, subTasks:{...task.subTasks, [key]: e.target.value}})
	}
	const handleSubmitClick = (e) =>{

		let id = uuidv4();
		e.preventDefault();
		todoListDispatch({type:'add', id:[id], value:task});
		addingDispatch({type:'toggle'});
	}
	return(
		<div className={`bg-green-200 h-[70%] w-[70%]    fixed flex`}>
		<form className="w-full p-5">
		<input 
		onChange={e =>handleMainChange(e)}
		placeholder="Add task"
		className="w-full "/>
	
		<div>
		{
			Object.entries(task.subTasks).map(([key, sub]) =>{
				return(
				<div key={key}>
				<input 
				onChange={(e)=>{handleSubChange(e, key)}}
				className="w-full" placeholder="subtask"/>
				</div>
				);
			})
		}

		</div>
		<button onClick={(e)=>handleSubtaskClick(e)}
		className="w-[70%]"
		>
		Add Subtask</button>

		<button
		onClick={(e)=>handleSubmitClick(e)}>
		Submit task
		</button>
		</form>
		
		</div>


	);


}
export default AddPopup;
