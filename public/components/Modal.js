export default function modal(props){

    return(
        <div id="modal" style={{display: props.display}}>
            <video src={props.video} autoPlay loop/>
        </div>
    )
}