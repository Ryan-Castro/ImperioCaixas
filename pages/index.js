import Card from "../public/components/Card"
export default function home(){

    let linkFoto = "https://firebasestorage.googleapis.com/v0/b/imperio-caixas.appspot.com/o/ghgfdsFoto?alt=media&token=4f08095f-e302-4d55-9815-7bbcfb0cf58f"
    let linkVideo = "https://firebasestorage.googleapis.com/v0/b/imperio-caixas.appspot.com/o/ghgfdsVideo?alt=media&token=080c9d83-14fe-4c26-bf19-900659ccd380"
    return(
        <>
        <h1>hello world</h1>
        <Card foto={linkFoto} video={linkVideo}></Card>
        </>

    )
}