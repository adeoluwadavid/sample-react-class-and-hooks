import { useState, createContext } from "react";
import UseContextChild from "./UseContextChild";
export const UserContext = createContext()
export default function UseContext(){
    const [user, setUser] = useState({
        name:"Jesse Hall",
        location:"Ibadan"
    });
     
    return(
        <div>
            <UserContext.Provider value={user}>
                <h1>This is USE CONTEXT</h1>
                <div>{`Hello ${user.name}!`}</div>
                <UseContextChild user={user}/>
            </UserContext.Provider>
        </div>
    )
}