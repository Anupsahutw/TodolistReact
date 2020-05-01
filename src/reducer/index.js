import actions from "../actions";
export const initialState = {
    user: {
      id: "",
      name: "",
      username: ""
    },
    usererror: "",
    todos: {
      id: "",
      todoname: "",
      todotime: "",
      userid: "",
      priorityorder: "",
      statusorder: ""
    },
    todoStatus: [],
    todoPriority: [],
  };

  export default (state = {}, action) => {
    debugger;
     switch (action.type) {
       
         case "LOAD_USERS":
             return saveLoadUser(state, action.payload);
          case actions.POST_TODOLIST:
              debugger;
              return saveTodolist(state, action.payload);
          case actions.GET_PRIORITY:
              debugger;
              return savePriority(state, action.payload);
          case actions.GET_STATUS:
              debugger;
              return saveStatus(state, action.payload);
            
    //   case actions.LOGIN:
    //     return login(state, action.payload);
    //   case actions.CLEAR_USER_DETAILS:
    //     return clearUserDetails(state, action.payload);
    //   case actions.FETCH_ALL_TODO_STATUS:
    //     return fetchAllTodoStatus(state, action.payload);
    //   case actions.FETCH_ALL_TODO_PRIORITY:
    //     return fetchAllTodoPriority(state, action.payload);
    //   case actions.FETCH_TODO:
    //     return fetchTodo(state, action.payload);
    //   case actions.SET_PROMISE_PENDING:
    //     return {
    //       ...state,
    //       promise: {
    //         ...state.promise,
    //         isPending: action.payload,
    //       },
    //     };
      default:
        return state;
     }
  };

  const saveLoadUser = (state, payload) => {
    const newState = { ...state };
    if (payload.error){
        newState.usererror = payload.error;
    }else {
      newState.user = {
       id:payload.data.id,
       username: payload.data.username,
       name:payload.data.name
      }
        //newState.user.id = payload.data.id;
        //newState.user.username = payload.data.username;
       //// newState.user.name = payload.data.name;
    }
    return newState;
  }

  const saveTodolist = (state, payload) => {
    const newState = { ...state };
    if (payload.error){
        newState.usererror = payload.error;
    }else {
      newState.todos = {
          id:payload.data.id,
          todoname: payload.data.todoname,
          todotime:payload.data.todotime,
          userid:payload.data.userid,
          priorityorder:payload.data.priorityorder,
          statusorder:payload.data.statusorder
      }
        //newState.user.id = payload.data.id;
        //newState.user.username = payload.data.username;
       //// newState.user.name = payload.data.name;
    }
    return newState;
  }

  const savePriority = (state, payload) => {
    debugger;
    const newState = { ...state };
    if (payload.error){
      newState.usererror = payload.error;
    }else {
      newState.todoPriority = [ ...payload.data ];
    }
    return newState;
  }
  
  const saveStatus = (state, payload) => {
    debugger;
    const newState = { ...state };
    if (payload.error){
      newState.usererror = payload.error;
    }else {
      newState.todoStatus = [ ...payload.data ];
    }
    return newState;
  }
  
  
  const login = (state, payload) => {
    const newState = { ...state };
    newState.user.id = payload.resp.userId;
    newState.user.name = payload.resp.name;
    newState.user.token = payload.resp.token;
    newState.user.username = payload.req.username;
    // setUserToken(payload.resp.token);
    // setUserId(payload.resp.userId);
    // setUserFullName(payload.resp.name);
    return newState;
  };