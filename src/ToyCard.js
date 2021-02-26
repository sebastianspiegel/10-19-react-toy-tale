

function ToyCard(props){
    // const {id, image, name} = props.toy // destructuring is an option

    // const handleClick = (e) => {
    //     props.increaseLikes(props.id)
    // }

    return(
        <div className="card" id={`toy-${props.toy.id}`}>
            <h2>{props.toy.name}</h2>
            <img src={props.toy.image} className="toy-avatar"/>
            <p>{props.toy.likes} Likes </p>
            <button onClick={(e) => props.increaseLikes(props.toy.id)} className="like-btn">Like &lt;3</button>
        </div>
    )
}

export default ToyCard