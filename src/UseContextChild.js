import { useContext} from "react"
import { UserContext } from "./UseContext"
export default function UseContextChild(){
    const user = useContext(UserContext)
    
    return(
        <div>
            <div>Child Context</div>
            <h2>{`Hey, Using my child context. The name is: ${user.name}`}</h2>
        </div>
    )
}