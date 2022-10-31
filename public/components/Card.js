import { useEffect, useState} from "react"
import Modal from "./Modal"

export default function card(props){

    const [show, setShow] = useState(false)

    useEffect(()=>{
    },[])

    function showModal(){
        setShow(true)
    }

    function hideModal(e){
        let target = e.target
        if(target.id == "modal"){
            setShow(false)
        }
    }
    return(
        <div id="card" style={{backgroundImage: `url(${props.foto})`}} onClick={showModal}>
            <Modal display={show} video={props.video} hideModal={hideModal}/>
        </div>
    )
}