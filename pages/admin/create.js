import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export default function create(){

    const firebaseConfig = {
        apiKey:             "AIzaSyAao7MtY5SaPAKvbZfESBY8SKN5oDVvTr8",
        authDomain:         "imperio-caixas.firebaseapp.com",
        projectId:          "imperio-caixas",
        storageBucket:      "imperio-caixas.appspot.com",
        messagingSenderId:  "727749910723",
        appId:              "1:727749910723:web:47d988e11283cef442c276",
        measurementId:      "G-F6V86W3CCV"
      };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage();
    const db = getFirestore(app);
    const [type, setType] =     useState('')
    const [title, setTitle] =   useState('')
    const [video, setVideo] =   useState('')
    const [foto, setFoto] =     useState('')
    
    function setOptionSelect(op){
        let selecting = op.target      
        setType(selecting.options[selecting.selectedIndex].value)
    }

    function setTitleInput(titleInput){
        setTitle(titleInput)
    }

    function setFileInput(fileInput){
        if(fileInput.type == "video/mp4"){
            setVideo(fileInput)
        } else {
            setFoto(fileInput)
        }
    }

    async function enviar(){
        const storageRefVideo = ref(storage, `${title}Video`);
        const storageRefFoto = ref(storage, `${title}Foto`);
        let linkVideo = ""
        let linkFoto = ""

        await uploadBytes(storageRefVideo, video).then((snapshot) => {})       

        await getDownloadURL(storageRefVideo).then((url=>{
                linkVideo = url;
            }))

        await uploadBytes(storageRefFoto, foto).then((snapshot) => {})
        
        await getDownloadURL(storageRefFoto).then((urlFoto=>{
                linkFoto = urlFoto;
            }))

        await setDoc(doc(db, "caixas", title), {
            title,
            linkVideo: linkVideo,
            linkFoto: linkFoto
        })
    }

        // video, nome tipo


    //enviar pro banco de dados

    return(
        <>
            <h1>dnfsjfhdj</h1>
            <input type='file' onChange={(b)=>{setFileInput(b.target.files[0])}} id="file"/>
            <input type='file' onChange={(b)=>{setFileInput(b.target.files[0])}} id="file"/>
            <input type='text' onInput={(a)=>{setTitleInput(a.target.value)}} id="title" />
            
            <select onChange={(e)=>setOptionSelect(e)}>
                <option value="">Escolha que tipo de caixa é</option>
                <option value="bau">baú</option>
                <option value="gaveteiro">gaveteiro</option>
                <option value="defalt">não definida</option>
            </select>
            <input type="button" onClick={enviar} value="enviar"/>
        </>
    )

}