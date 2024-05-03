export default function Hobbies(props){
    let hobbies = []

    for(let hobby of props.hobbyList){
        hobbies.push(<li>{hobby}</li>)
    }
    return(
        <div>
            <h2>Hobbies</h2>
            <ul className={'hobbies-list'}>
                {hobbies}
            </ul>
        </div>
    )
}