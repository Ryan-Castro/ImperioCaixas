import Card from "../public/components/Card"
export default function home(){

    let linkFoto = "https://firebasestorage.googleapis.com/v0/b/imperio-caixas.appspot.com/o/teste%20de%20videoFoto?alt=media&token=af4a7a66-bb5f-43fc-adc0-6e7072d3778d"
    let linkVideo = "https://firebasestorage.googleapis.com/v0/b/imperio-caixas.appspot.com/o/teste%20de%20videoVideo?alt=media&token=d0720d59-111a-437a-96e5-3039fe4cd4d5"
    return(
        <>
        <h1>hello world</h1>
        <Card foto={linkFoto} video={linkVideo}></Card>
        </>

    )
}