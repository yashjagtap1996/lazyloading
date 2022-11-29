import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './actions'

const App = () => {

  let data=useSelector(state=>state.GetData)
  let dispatch=useDispatch()

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        {
          data.map((e)=>{
            return (
              <tbody key={e.id}>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      
      <button onClick={()=>dispatch(fetchData())}>click</button>
    </>
  )
}

export default App