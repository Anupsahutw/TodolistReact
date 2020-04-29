import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./app/store";
import UserFormCon from './container/UserForm-container';
import TodolistFormCon from "./container/Todolist-container"

class App extends React.Component {
    render() {
      return (
        <Provider store={configureStore()}>
        <div className="App">
             {/* <UserFormCon/> */}
            <TodolistFormCon/>
          </div>
          </Provider>
      );
    }
}
export default App;
