import React from 'react';
import PropTypes from "prop-types";
import Header from "../Header/index"
import '../UserForm/UserForm.css';
//import UserForm from "../components/UserForm/UserForm.js"

const TodolistForm = ({OnClick,todos, usererror}) => {
    
     const [todoname, setTodonameState] = React.useState("");
     const [todotime, setTodotimeState] = React.useState("");
    // const [priorityorder, setPriorityorder] = React.useState("");
    // const [statusorder, Setstatusorder] = React.useState("");

     const handleSubmit = (event) => {

        var bodyFormData = {
            "todoname" : todoname,
            "todotime" : todotime,
            "priorityorder" : 1,
            "statusorder" : 1,
            "userid" : 211
        }
        debugger;
        OnClick(bodyFormData);
        event.preventDefault();
     }

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
                        <select className="form-row-todolist-select">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </label>
                    <label>
                        Status:  
                        <select className="form-row-todolist-select">
                            <option>Complete</option>
                            <option>InComplete</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
            </div> 
            <div>{todos.todoname}</div>
            </form>
        </div>

    );
};

TodolistForm.propTypes = {
    OnClick: PropTypes.func.isRequired,
    todos: PropTypes.any.isRequired,
    usererror: PropTypes.any.isRequired
};

export default TodolistForm;