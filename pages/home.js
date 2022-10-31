import Card from "../public/components/Card"
import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import Navbar from "../public/components/Navbar";
export default function home(){

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
    const db = getFirestore(app);
    const [itens, setItens] = useState([])
    let array = []

    useEffect(()=>{
        init()
    },[])

    async function init(){
        const querySnapshot = await getDocs(collection(db, "caixas"));
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
        })
        setItens(array)
    ;}

    return(
        <div id="home">
            <Navbar></Navbar>
            <div id="contentHome">{itens.map((i)=><Card foto={i.linkFoto} video={i.linkVideo} key={i.title}></Card>)}</div>
        </div>

    )
}