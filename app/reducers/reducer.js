export const addingReducer = (adding, action) =>{
	switch(action.type){
		case"toggle":{
			return(!adding);
		}
	}
}



export const todoListReducer =(todoList, action)=>{

	switch(action.type){
		case("add"):{
			return({
				...todoList, [action.id]:action.value
			})
			break;
		}
	default:
	return todoList;
	}


}
