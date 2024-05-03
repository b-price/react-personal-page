export default function ImageCard(props) {
    return(
        <div>
            <img src={props.src} alt={props.name} className={'image-card'}/>
        </div>
    )
}