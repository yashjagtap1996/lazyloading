import axios from "axios"

export let fetchData=()=>{
    return (dispatch)=>{ //thunk
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>dispatch({
            type:"GET",
            payload:response.data
        }))
    }
}
