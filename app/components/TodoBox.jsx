'use client';
import {Checkbox, Label, Card, Button} from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
const	TodoBox =({todo})  =>{

	console.log((todo));

	{/*This will be the subtasks to be returned to the render
			For some reason, the todo comes through as an array?*/}
	const mappedSubs = Object.entries(todo[1].subTasks).map(([key, value])=>(
		<div  className=" flex flex-row flex-wrap w-[100%] gap-5 pb-2 border-black border-b">	

		<div className="  flex items-center h-auto inline-block">
		<Checkbox
		id="accept"
		/>
		</div>

		<div className="w-[80%]">
		<Label
		className="flex"
		>
		<p className="break-all">
		{value}
		</p>
		</Label>
		</div>
		</div>
	)

	)





	return(
		<Card>
		<div
		className="flex max-w-md flex-row gap-4 min-w-[400px] relative flex-wrap"
		id="checkbox"
		>
		<Button className="absolute right-1 top-1"> <HiOutlineArrowRight className="h-6 w-6" /></Button>
		<h2 className="break-words block w-[100%]">{todo[1].main}</h2>
		<div className="flex flex-wrap items-center flex-1 gap-2">
		{mappedSubs}
		</div>
		</div>
		</Card>
	);
}


export default TodoBox;
