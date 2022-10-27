import { useEffect, useState} from "react"
import Modal from "./Modal"

export default function card(props){

    const [show, setShow] = useState("none")

    useEffect(()=>{
    },[])

    function showModal(){
        setShow("flex")
    }
    return(
        <>
            <img src={props.foto} onClick={showModal} style={{width: "500px"}}/>
            <Modal display={show} video={props.video} />
        </>
    )
}