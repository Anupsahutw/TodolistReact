import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from "../actions/index.js"
import UserForm from "../components/UserForm/UserForm"
import {loadUsers} from "../actions/index.js"

//class UserFormCon extends React.Component {
  const UserFormCon = ({loadUsers,  user, usererror}) => {  
   // render(){
    useEffect(() => {
        //fetchTodo();
        //debugger;
        /*alert("cxcxcx"+JSON.stringify(user));
        var bodyFormData = {
            "username": "76543210",
            "password": "7654321",
            "name": "0987654321"
        }*/
        //loadUsers(bodyFormData);
      }, []);
    
        return(
            <div>
                {/* <div>{JSON.stringify(user)} </div>
                <div>{user.username}</div> */}
            <div>errrrrrr: {" " + JSON.stringify(usererror)}</div>
            <UserForm OnClick={loadUsers} user={user} usererror={usererror} ></UserForm>
            {/* <div>
                {(() => {
                    if ({usererror} != null) {
                            return (
                                 alert({usererror})
                                    )
                            }  
                            if ({loadUsers} != null) {
                                return (
                                     alert("User submitted successfully")
                                        )
                            }
                        })()}
                </div> */}
            </div>
        )
    //}
}

const mapStateToProps=({user, usererror})=> ({
    user, usererror
});

// const mapStateToProps=(state)=>{
//     return state
// };

const mapDispatchToProps = (dispatch) => ({
    loadUsers: (payload) => dispatch(loadUsers(payload)),
  });

//export default connect (mapStateToProps, actionCreators)(UserFormCon);
export default connect (mapStateToProps,mapDispatchToProps)(UserFormCon);

export { UserFormCon };