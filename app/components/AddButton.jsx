'use client';

import {AddingContext} from '../TodoContext';
import {useContext} from 'react';

import { Button } from 'flowbite-react';
import {  AiFillPlusCircle } from 'react-icons/ai';
const AddButton = () =>{

	const {adding, addingDispatch} = useContext(AddingContext);

	return(
		<div className=" absolute right-10 top-10 ">

   <Button
		onClick ={() =>addingDispatch({type:'toggle'})}>
        <AiFillPlusCircle className="h-6 w-6" />
      </Button>
		</div>
	);

}


export default AddButton;
