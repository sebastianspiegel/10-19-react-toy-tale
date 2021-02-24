

function ToyCard(props){
    // const {id, image, name} = props.toy // destructuring is an option
    return(
        <div class="card" id={`toy-${props.id}`}>
            <h2>{props.name}</h2>
            <img src={props.image} class="toy-avatar"/>
            <p>{props.likes} Likes </p>
            <button class="like-btn">Like &lt;3</button>
        </div>
    )
}

export default ToyCard