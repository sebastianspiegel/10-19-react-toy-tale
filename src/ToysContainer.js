import toysObj from './database'
import ToyCard from './ToyCard'
import React from 'react'
import {connect} from 'react-redux'

// when state changes, a rerender is caused 
// if we want to utilize state we need a Class Component 

// const toys = 
   
class ToysContainer extends React.Component{
    // sets INITIAL STATE
    state = {
        search: "",
        whatever: "hello"
    }

    makeToyCards(){
        //utilize STATE
        // let displayedToys = this.props.toys
        // console.log(this.props)
        // if(this.state.search){
        //     displayedToys = this.props.toys.filter((toy) =>  
        //     toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        // }

        return this.props.toys.map(toy => <ToyCard toy={toy} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />)
    }

    // componentDidUpdate(){
    //     console.log("updatesd", this.state)
    // }

    componentDidMount(){
      // where you make your fetch requests 
      const url ="http://localhost:3000/toys"
      fetch(url)
      .then(res => res.json())
      .then(json => {
          // deal with the json
          console.log(json)
         // this.state.toys = json  //THIS WILL NOT CAUSE A RERENDER
        //  this.setState({
        //      toys: json
        //  })
        this.props.dispatch({type: 'GOT_TOYS', payload: json})
      })
    }

    


    render(){
        return(
            <div id="toy-container">
                
               {this.makeToyCards()}
            </div>
        ) 
    }
}


//returns object as key/value pairs that are now apart of props 
function mapStateToProps(state, ownprops){
    let displayedToys = state.toys
    // console.log(this.props)
    if(ownprops.searchTerm){
        displayedToys = state.toys.filter((toy) =>  
        toy.name.toLowerCase().includes(ownprops.searchTerm.toLowerCase()))
    }

    console.log(ownprops)
    return {toys: displayedToys}
}

export default connect(mapStateToProps)(ToysContainer)