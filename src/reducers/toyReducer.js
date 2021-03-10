const toyReducer = (state = {toys: []}, action) => {

    switch (action.type) {
        case 'GOT_TOYS':
            console.log(action)
            return {...state, toys: action.payload} 
        
        case 'ADD_NEW_TOY':
            return {...state, toys: [...toys, action.payload]} 
            
        default:
            return state

    }
}

export default toyReducer 