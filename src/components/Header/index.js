import React from 'react';
//import {Navbar} from 'react-bootstrap';
import './Header.css'

class Header extends React.Component {
//const Header = () => {
    render() {
        return (
        //     <Navbar bg="dark" variant="dark">
        //     <Navbar.Brand>
        //       {'ToDoList'}
        //     </Navbar.Brand>
        //   </Navbar>
        <div className="Header">
            <header>
                <h1>ToDoList</h1>
            </header>
        </div>
        );
    }
}

export default Header; 