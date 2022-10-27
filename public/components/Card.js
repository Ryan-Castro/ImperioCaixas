import { useEffect, useState} from "react"
import Modal from "./Modal"

export default function card(props){

    const [show, setShow] = useState("none")

    useEffect(()=>{
    },[])

    function showModal(){
        console.log("foi")
        setShow("flex")
    }
    return(
        <>
            <img src={props.foto} onClick={showModal} />
            <Modal display={show} video={props.video} />
        </>
    )
}