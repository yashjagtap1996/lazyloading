let initialState=[]

let GetData=(state=initialState,action)=>{
    switch(action.type){
        case "GET":
            return action.payload
        default:
            return state
    }
}

export default GetData
