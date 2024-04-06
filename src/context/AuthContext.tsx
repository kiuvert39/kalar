
import { createContext,  useReducer,  ReactNode } from "react";
import { useEffect } from "react";



export const  Authecontext = createContext(undefined);



export  function Authreducer(state: any, action: any){
    switch (action.type){
        case 'LOGIN':{
           return { user : action.payload }
        };

        case 'LOGout':{
            return { user : null }
         };
        default:
            return state
      };
}

export const Authecontextprovider = ({ children }: any) => {
    const [state, dispatch] = useReducer(Authreducer,{
        user : null
    })
    useEffect(() => {
        const userJsonString = localStorage.getItem('user');
        
        if (userJsonString !== null) {
            const user = JSON.parse(userJsonString);
            if (user){
                dispatch({type: 'LOGIN', payload: user})
             }
        }
     
        
    }, []);

    console.log('Authprovider ', state)

    return (
        <Authecontext.Provider value={{...state, dispatch}}>
          {children}
        </Authecontext.Provider>
      );
} 