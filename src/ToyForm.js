import React from 'react'


export default class ToyForm extends React.Component{

    state = {
        name: "",
        image: ""
    }

    handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state))
        // keep track of what the user typed in 
    }

    handleSubmit = (e) => {
         // prevent default 
        e.preventDefault()
       
        // set up our toy object 
        const toy = {...this.state, likes: 0}
        console.log(toy)
        
        // send a fetch request 
        const url ="http://localhost:3000/toys"
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(toy)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
           this.props.addToy(json)
        })
        // save to our current state of toys 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleFormChange} value={this.state.name}/>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleFormChange} value={this.state.image} />
                <input type="submit" value="Add Toy" />
            </form>
        )
    }
}



// function ToyForm(props){

//     // move these function to Toy Container and pass down as props. 
//     // handleFormChange = (e) => {
//     //     const name = e.target.name
//     //     const value = e.target.value

//     //     this.setState({
//     //         [name]: value
//     //     }, () => console.log(this.state))
//     //     // keep track of what the user typed in 
//     // }

//     // handleSubmit = (e) => {
//     //      // prevent default 
//     //     e.preventDefault()
       
//     //     // set up our toy object 
//     //     const toy = {...this.state, likes: 0}
//     //     console.log(toy)
        
//     //     // send a fetch request 
//     //     const url ="http://localhost:3000/toys"
//     //     const configObj = {
//     //         method: 'POST',
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             "Accepts": "application/json"
//     //         },
//     //         body: JSON.stringify(toy)
//     //     }
//     //     fetch(url, configObj)
//     //     .then(res => res.json())
//     //     .then(json => {
//     //        this.props.addToy(json)
//     //     })
//     //     // save to our current state of toys 
//     // }

  
//         return(
//             <form onSubmit={this.props.handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" onChange={this.props.handleFormChange} value={this.props.name}/>
//                 <label>Image:</label>
//                 <input type="text" name="image" onChange={this.props.handleFormChange} value={this.props.image} />
//                 <input type="submit" value="Add Toy" />
//             </form>

// }