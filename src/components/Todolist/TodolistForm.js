import React,{useEffect, Component} from 'react';
import PropTypes from "prop-types";
import Header from "../Header/index"
import '../UserForm/UserForm.css';
//import UserForm from "../components/UserForm/UserForm.js"

const TodolistForm = ({OnClick,todos, usererror,todoPriority,todoStatus}) => {
    
     const [todoname, setTodonameState] = React.useState("");
     const [todotime, setTodotimeState] = React.useState("");
    // const [priorityorder, setPriorityorder] = React.useState("");
    
    const [priorityorder,setPriorityorder] = React.useState("");
    const [statusorder, setStatusorder] = React.useState("");

     const handleSubmit = (event) => {

        var bodyFormData = {
            "todoname" : todoname,
            "todotime" : todotime,
            "priorityorder" : priorityorder,
            "statusorder" : statusorder,
            "userid" : 211
        }
        debugger;
        
            OnClick(bodyFormData);
        
        
        event.preventDefault();
     }

     
     {/*
     useEffect(() => {
        // {todoPriority.map((user)=>
        //     <h2 key={user.id}>{user.id}</h2>)}
        debugger;
        priorityItems = todoPriority.map((priority) =>
        <option key={priority.name}>{priority.name}</option>
        );
       }, []);
    */}

    return (
        <div>
            <Header/>
            <header className="form-header-todolist">
                <h1>New Todo Submission</h1>
                    <p><em>Enter below Details</em></p>
            </header>
            <form className="form-todolist" onSubmit={handleSubmit}>
            <div className="form-row-todolist">
                    <label>
                        Todoname:         
                        <input 
                        name="todoname" 
                        type="text" 
                        value={todoname} 
                        onChange={t => setTodonameState(t.target.value)}
                        required/>
                    </label>
                    <label>
                        TodoTime:         
                        <input 
                        name="todotime" 
                        type="text" 
                        value={todotime} 
                        onChange={tt => setTodotimeState(tt.target.value)}
                        required/>
                    </label>
                    <label>
                        Priority:  
                        <select className="form-row-todolist-select"
                            value={priorityorder}
                            onChange={p => setPriorityorder(p.target.value)}
                            required>
                                <option
                                value=""
                                >select priority</option>
                            {todoPriority.map((priority) =>
                                <option
                                    value={priority.priorityorder}>
                                    {priority.priorityname}
                                </option>
                            )}
                            {/* {priorityItems} */}
                            {/* <option>High</option>
                            <option>Medium</option>
                            <option>Low</option> */}
                        </select>
                    </label>
                    <label>
                        Status:  
                        <select className="form-row-todolist-select"
                            value={statusorder}
                            onChange={s => setStatusorder(s.target.value)}
                            required>
                            <option
                            value=""
                            >select status</option>
                            {todoStatus.map((status) =>
                            <option
                            value={status.statusorder}>
                            {status.statusname}
                            </option>
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
            </div> 
            {/* <div>
            <ul>
            {todoStatus.map((user)=>
            <h2 key={user.id}>{user.statusorder}</h2>)}
            </ul>
            </div> */}
            </form>
        </div>

    );
};

TodolistForm.propTypes = {
    OnClick: PropTypes.func.isRequired,
    todos: PropTypes.any.isRequired,
    usererror: PropTypes.any.isRequired,
    todoPriority: PropTypes.any.isRequired,
    todoStatus: PropTypes.any.isRequired
};

export default TodolistForm;