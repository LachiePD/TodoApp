'use client';

import Main from './components/Main';
import AddPopup2 from './components/AddPopup2';
import {useState, useContext} from 'react';
import {AddingContext} from './TodoContext';
import AddButton from './components/AddButton';
const App = () =>{

	const {adding, addingDispatch} = useContext(AddingContext);
	return(
		<div className="flex h-full w-full justify-center items-center">
		<Main/>
		<AddButton/>
		{!adding && <AddPopup2/>}
		</div>
	);


}


export default App;
