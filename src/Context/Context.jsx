import { createContext } from "react";
export const Context=createContext();
import run from "../config/gemini";
const ContextProvider=(props)=>{
    const onSent=async  (prompt)=>{
       await  run(prompt);
    }
    onSent("who is anees haider");
     const  Contextvalue={
    
     }
     return (
        <ContextProvider value={Contextvalue}>
            {props.children}
        </ContextProvider>

     )
}
export default ContextProvider;