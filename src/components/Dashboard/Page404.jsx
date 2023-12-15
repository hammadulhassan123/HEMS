import { Link,Navigate } from "react-router-dom"
import UserHome from "./UserHome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
export default function Page404(){
    return(
        <>
        <div className="justify-content-center">
            <h1 style={{color:"red"}}>
            404-PAGE NOT FOUND</h1>
            <p><Link className="btn btn-outline-info" to={"/userhome"} Navigate={<UserHome/>}> <FontAwesomeIcon icon={faArrowLeft} /> Now Return back to User Dashboard</Link></p>
         </div>
        </>
    )
}