import axios from 'axios'
import React from 'react'

function One() {

    let getdata=async()=>{
        await axios
        .get(`http://localhost:4000/user`).then((response)=>{
            console.log(response?.data)
        })

    }

    
    let postdata=async()=>{

        let newData = {name:"sumsung",color:"red"}
        await axios
        .post(`http://localhost:4000/user`, newData).then((response)=>{
            console.log(response?.data)
        })
    }

  return (
    <div>
        <button onClick={getdata}>Get Data</button>
         <button onClick={postdata}>Post Data</button>
        {/* <button onClick={()=>putdata('"cf85"')}>put Data</button> */}
    </div>
  )
}

export default One