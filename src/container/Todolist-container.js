import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TodolistForm from "../components/Todolist/TodolistForm";
import {postTodolist,getPriority,getStatus} from "../actions"

const TodolistFormCon = ({postTodolist, 
                            todos, 
                            usererror,
                            todoPriority, 
                            getPriority,
                            getStatus,
                            todoStatus}) => {

    useEffect(() => {
       // debugger;
        //fetchTodo();
        //debugger;
        /*alert("cxcxcx"+JSON.stringify(user));
        var bodyFormData = {
            "username": "76543210",
            "password": "7654321",
            "name": "0987654321"
        }*/
        var bodyFormData = {
            "todoname" : "sadsadasdasf",
            "todotime" : "2021-10-10T15:35:49.72",
            "priorityorder" : 1,
            "statusorder" : 1,
            "userid" : 211
        }
        //postTodolistXYZ(bodyFormData);
        //loadUsers(bodyFormData);
        getPriority();
        getStatus();

      }, []);

    return (
        
        <div>
        <div>pppppppppppp</div>
        
         <TodolistForm 
            OnClick={postTodolist} 
            todos={todos} 
            usererror={usererror} 
            todoPriority = {todoPriority} 
            todoStatus = {todoStatus}>
        </TodolistForm> 
    </div>
    );
};

const mapStateToProps=({todos, usererror,todoPriority,todoStatus})=> ({
        todos,usererror,todoPriority,todoStatus
});

const mapDispatchToProps = (dispatch) => ({
    postTodolist: (payload) => dispatch(postTodolist(payload)),
    getPriority: (payload) => dispatch(getPriority(payload)),
    getStatus: (payload) => dispatch(getStatus(payload)),
})

export default connect (mapStateToProps,mapDispatchToProps)(TodolistFormCon);

export { TodolistFormCon } ;