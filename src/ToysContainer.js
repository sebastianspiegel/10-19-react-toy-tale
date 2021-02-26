
import ToyCard from './ToyCard'
import React from 'react'
import ToyForm from './ToyForm'

// when state changes, a rerender is caused 
// if we want to utilize state we need a Class Component 

// const toys = 
const url ="http://localhost:3000/toys"

class ToysContainer extends React.Component{
    // sets INITIAL STATE

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         toys: [],
    //         search: "",
    //         whatever: "hello"
    //     }
    // }
    state = {
        toys: [],
        search: "",
        whatever: "hello"
    }

    addToy = (toyData) => {
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        this.setState((prevState, prevProps ) => {
            return {
                toys: [...prevState.toys, toyData]
            } 
        })
    }

    makeToyCards(){
        //utilize STATE
        let displayedToys = this.state.toys
        console.log(this.state.search)
        if(this.state.search){
            displayedToys = this.state.toys.filter((toy) =>  
            toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        }

        return displayedToys.map(toy => <ToyCard increaseLikes={this.increaseLikes} toy={toy} />)
        // return displayedToys.map(toy => <ToyCard increaseLikes={this.increaseLikes} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />)
    }

    increaseLikes = (id) => {
        console.log(id)
        const toy = this.state.toys.find((t)=> id === t.id)
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({likes: toy.likes + 1})
        }

        fetch(`${url}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            this.setState((prevState) => {
                 const idx = prevState.toys.findIndex((t)=> json.id === t.id)

                return {
                    toys: [...prevState.toys.slice(0,idx), json, ...prevState.toys.slice(idx + 1)]
                }
            })
        })
      
    }

    // componentDidUpdate(){
    //     console.log("updatesd", this.state)
    // }

    componentDidMount(){
      // where you make your fetch requests 
      
      fetch(url)
      .then(res => res.json())
      .then(json => {
          // deal with the json
          console.log(json)
         // this.state.toys = json  //THIS WILL NOT CAUSE A RERENDER
         this.setState({
             toys: json
         })
      })
    }

    handleInputChange = (e) => {
        const search = e.target.value
        this.setState({search: search}) // will cause a rerender
    }


    render(){
        return(
            <div id="toy-container">
        
                <div>
                    <ToyForm addToy={this.addToy}/>
                    <br></br>
                </div>
                <div>
                    <input type="text" placeholder="Search for a toy..." onChange={this.handleInputChange}/>
                </div>
               {this.makeToyCards()}
            </div>
        ) 
    }
}

export default ToysContainer