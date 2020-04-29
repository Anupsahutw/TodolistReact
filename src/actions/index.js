import axios from "axios";

// export default function loadUsers(bodyFormData){
//     debugger;
//          const response = axios({
//             method:'post',
//             url:"http://localhost:8080/users",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             data:JSON.stringify(bodyFormData)
//         });
//         return response;
// }
export const loadUsers = (bodyFormData) => (dispatch) => {
    // debugger;
    // console.log("hello");
    // const response = axios({
    //     method:'post',
    //     url:"http://localhost:8080/users",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     data:JSON.stringify(bodyFormData)
    // });
    // dispatch({
    //     type: "LOAD_USERS",
    //     payload: response,
    //   });
    debugger;

axios.post("http://localhost:8080/users",
    bodyFormData).
    then(function (response) {
    console.log(response);
    dispatch({
        type: "LOAD_USERS",
        payload: response,
      });
    })
    .catch(function (error) {
        console.log(error);
        let errormessage = { error:"something went wrong" }
        if (error.response.data) {
            errormessage = error.response.data
        }
        dispatch({
            type: "LOAD_USERS",
            payload: errormessage,
          });
    });

};



const actions = {
    POST_TODOLIST: "POST_TODOLIST",
  };
// export const postTodolist =  (bodyFormData) =>  (dispatch) =>{
//     // dispatch({
//     //     type: "POST_TODOLIST",
//     //     payload: {},
//     //   });
//     debugger;
//     // const response = await axios({
//     //                 method:'post',
//     //                 url:"http://localhost:8080/todolist",
//     //                 headers: {
//     //                     'Accept': 'application/json',
//     //                     'Content-Type': 'application/json'
//     //                 },
//     //                 data:JSON.stringify(bodyFormData)
//     //             });
//     //             debugger;
//          dispatch({
            
//          type: "POST_TODOLIST",
//          payload: {},
//        });
//     //return response;
//     axios.post("http://localhost:8080/todolist",
//     bodyFormData).
//     then(function (response) {
//     console.log(response);
//     debugger;
//  dispatch({
//          type: actions.POST_TODOLIST,
//          payload: response,
//        });
//     })
//     .catch(function (error) {
//         console.log(error);
//         debugger;
//         let errormessage = { error:"something went wrong" }
//         if (error.response.data) {
//             errormessage = error.response.data
//         }
//          dispatch({
//              type: actions.POST_TODOLIST,
//              payload: errormessage,
//            });
//     });

// };

//export const loadUsers = (bodyFormData) => (dispatch) => {
export const postTodolistXYZ = (payload) => (dispatch) => {
    debugger; 
    fetch("http://localhost:8080/todolist", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        debugger;
        dispatch({
          type: actions.POST_TODOLIST,
          payload: data,
        });
      })
      .catch((error) => {
        debugger;
        console.error("Error:", error);
         dispatch({
           type: actions.POST_TODOLIST,
           payload: payload,
         });
      });
      debugger;
  };

export default actions;