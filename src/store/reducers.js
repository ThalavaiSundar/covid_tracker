const initialState={
        country:""
}
export const stateCountry=(state=initialState,action)=>{
    console.log(action)

    switch(action.type){
        case "country":{
            console.log(state)
            return{...state,country:action.payload}
        }
        default: return state;
    }
}