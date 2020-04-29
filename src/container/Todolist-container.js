import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TodolistForm from "../components/Todolist/TodolistForm";
import {loadUsers, postTodolistXYZ} from "../actions"

const TodolistFormCon = ({postTodolistXYZ, loadUsers, todos, usererror}) => {

    useEffect(() => {
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
      }, []);

    return (
        <div>
        <div>pppppppppppp</div>
        <TodolistForm OnClick={postTodolistXYZ} todos={todos} usererror={usererror}>
    </TodolistForm>
    </div>
    );
};

const mapStateToProps=({todos, usererror})=> ({
        todos,usererror
});

const mapDispatchToProps = (dispatch) => ({
    postTodolistXYZ: (payload) => dispatch(postTodolistXYZ(payload)),
})

export default connect (mapStateToProps,mapDispatchToProps)(TodolistFormCon);

export { TodolistFormCon } ;