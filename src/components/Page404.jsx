import { Link,Navigate } from "react-router-dom"
import Home from "./Home"
export default function Page404(){
    return(
        <>
        <h1 style={{color:"red"}}>
            404-PAGE NOT FOUND</h1>
            <p>Return to <Link to={"/"} Navigate={<Home/>}>Back to Home</Link></p>
        </>
    )
}