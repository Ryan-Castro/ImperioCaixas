import { useState } from "react"

export default function create(){

    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    
    function setOptionSelect(op){
        let selecting = op.target      
        setType(selecting.options[selecting.selectedIndex].value)
    }

    function setTitleInput(titleInput){
        setTitle(titleInput)
    }

    function setFileInput(fileInput){
        setFile(fileInput)
    }

        // video, nome tipo


    //enviar pro banco de dados

    return(
        <>
            <h1>dnfsjfhdj</h1>
            <input type='file' onChange={(b)=>{setFileInput(b.target.files[0])}} id="file"/>
            <input type='text' onInput={(a)=>{setTitleInput(a.target.value)}} id="title" />
            <select onChange={(e)=>setOptionSelect(e)}>
                <option value="">Escolha que tipo de caixa é</option>
                <option value="bau">baú</option>
                <option value="gaveteiro">gaveteiro</option>
                <option value="defalt">não definida</option>
            </select>
        </>
    )

}