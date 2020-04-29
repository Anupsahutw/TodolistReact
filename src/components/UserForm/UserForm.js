    import React from 'react';
    import './UserForm.css';
    import PropTypes from "prop-types";

    const UserForm = ({OnClick,usererror,user}) => {
    //function UserForm() {

        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [name, setName] = React.useState("");
        const [loading, setLoading] = React.useState(false);


        const handleSubmit = (event) => {
        // console.log(`
        //   Email: ${email}
        //   Password: ${password}
        //   Country: ${country}
        //   Accepted Terms: ${acceptedTerms}
        // `);
            
            //alert('submit clicked');
            // debugger;
                var bodyFormData = {
                    "username": username,
                    "password": password,
                    "name": name
                }
                OnClick(bodyFormData);
                event.preventDefault();
        }
        
        return (
            <div className="App">
                <header className="form-header" >
                <h1>User Submission</h1>
                    <p><em>Enter below Details</em></p>
                </header>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-row">
                    <label>
                        Username:         
                        <input 
                        name="username" 
                        type="text" 
                        value={username} 
                        onChange={u => setUsername(u.target.value)}
                        required/>
                    </label>
                    <label>
                        Password:      
                        <input 
                        name="password" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        required/>
                    </label>
                    <label>
                        Name:        
                        <input 
                        name="name" 
                        type="text" 
                        value={name} 
                        onChange={n => setName(n.target.value)}
                        required/>
                    </label>
                    <input type="submit" value="Submit" />
                    </div>
                    <div>{user.username}</div>
                </form>

                <div>{user.id}
                    {/* {(() => {
                        console.log(user.id)
                        if (usererror) {

                                return (
                                    alert(usererror)
                                        )
                                }  
                            // if (loadUsers !== null) {
                                if (user.id){
                                    return (

                                        alert("User submitted successfully")
                                            )
                                    }
                                //}

                            })()} */}
                    </div>

            </div>
        );
    }
    UserForm.propTypes = {
        OnClick: PropTypes.func.isRequired,
        usererror: PropTypes.any.isRequired,
        user: PropTypes.any.isRequired
    };


    export default UserForm;