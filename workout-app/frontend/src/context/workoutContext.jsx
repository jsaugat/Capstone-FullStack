import { createContext, useReducer } from "react";
/*
 We use useReducer for local state.
 We disptach actions to 
*/ 

export const WorkoutsContext = createContext();

// REDUCER : check the action type to decide what to do w/ data
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS": 
        return {
            workouts: action.payload
        }
        case "CREATE_WORKOUT": //? while adding new workout to the db,to keep the local state synced with db, we'd dispatch a 'CREATE_WORKOUT' action.
        return {
            workouts: [action.payload, ...state.workouts]
        }
        case "DELETE_WORKOUT":
          return {
            workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
          }
        default: 
        return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {
  const initialState = { workouts: null };
  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  //? dispatch() method looks like this: 
  // disptach(action_object)
  // dispatch({ type: "NAME", payload: __ })

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  );
};
