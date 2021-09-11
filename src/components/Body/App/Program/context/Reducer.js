function Reducer(state,event){
    switch(event.type){
        case "CHANGEOPTION":
            return {
                ...state,
                option: event.payload
            }
        
        case "CHANGECOLOR":
            return {
                ...state,
                color: event.payload
            }    

        default:
            return state;
    }
}

export default Reducer;
