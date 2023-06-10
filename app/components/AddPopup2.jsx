'use client';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import {useContext, useState} from 'react';
import {AddingContext, TodoListContext} from '../TodoContext';
import {v4 as uuidv4} from 'uuid';


const AddPopup2 = () =>{

	const [task , setTask]  = useState({main:"", subTasks:{}})
	const {adding, addingDispatch} = useContext(AddingContext);
	const {todoList, todoListDispatch} = useContext(TodoListContext);
{/*Can make this into a display component, did it, but there was a bug I tried to fix, so no bueno*/}


      const mappedSubtasks = 
       Object.entries(task.subTasks).map(([key, sub]) =>(
                                         <TextInput  key={key} onBlur={(e)=>handleSubTaskChange(e, key)}placeholder="subtask...."/>

       )
)
      
        const handleSubtaskAddition = ()=>{
                console.log("Subtask Added");
                       let newKey = uuidv4();

                    setTask({...task, subTasks:{...task.subTasks, [newKey]:""}})
                console.log(task.subTasks);
        }

        const handleMainTaskChange = (e) =>{
                 console.log("main changed");
		setTask({...task, main:e.target.value})
        }

        const handleSubTaskChange = (e, key)=>{

                setTask({...task, subTasks:{...task.subTasks, [key]: e.target.value}})

                console.log("sub changed");
        }

        const handleSubmit = () =>{

                console.log("task create clicked");
		         let id = uuidv4();
                todoListDispatch({type:'add', id:[id], value:task});
                addingDispatch({type:'toggle'});
        }

return(
	<Modal show={true} size="md" popup onClose={()=>addingDispatch({type:'toggle'})}>
        <Modal.Header/>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new task, todo!</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Task to complete" />
              </div>
              <TextInput onBlur={(e)=>handleMainTaskChange(e)} placeholder="main task..." required />
            </div>
            <div>
              <div className="mb-2 block">

	{/*create a check for empty subtasks, if empty, do not show label below*/}

                <Label value="Your subtasks..." />
              </div>
	{mappedSubtasks}
            </div>
            <div className="w-full justify-between flex">
	<Button onClick={handleSubtaskAddition}>Add sub  task</Button>
              <Button onClick={handleSubmit} >Create this task!</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
);
}
export default AddPopup2

{/*probably make an animation for when this appears, abit sharp when it just pops up*/}
