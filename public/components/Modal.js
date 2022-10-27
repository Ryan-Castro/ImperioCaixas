export default function modal(props){

    return(
        <div id="modal" style={{display: props.display}}>
            <div id="contentModal">
                <video src={props.video} autoPlay loop/>
            </div>
        </div>
    )
}