import axios from 'axios'
import React from 'react'

function One() {

    let getdata= async()=>{
        await axios
        .get(`http://localhost:4000/products`)
        .then(response=>console.log(response?.data))
        .catch(err=>console.log(err))
    }
    
    let postdata= async()=>{
        let newData = {name:'Manish', age:43,profession:'ChargeMan'}
        await axios
        .post(`http://localhost:4000/users`,newData)
        .then(response=>console.log(response?.data))
        .catch(err=>console.log(err))
    }
    
    let putdata= async(para)=>{
        let newData = {name:'Prem', age:13,profession:'GullyBoy'}
        await axios
        .put(`http://localhost:4000/users/${para}`,newData)
        .then(response=>console.log(response?.data))
        .catch(err=>console.log(err))
    }
    
    let patchdata= async(para)=>{
        let newData = { age:33,profession:'Welder'}
        await axios
        .patch(`http://localhost:4000/users/${para}`,newData)
        .then(response=>console.log(response?.data))
        .catch(err=>console.log(err))
    }
    
    let deldata= async(para)=>{
      
        await axios
        .delete(`http://localhost:4000/users/${para}`,)
        .then(response=>console.log(response?.data))
        .catch(err=>console.log(err))
    }
    
    



    return (
        <div>
            <button onClick={getdata}>Get Data</button>
            <button onClick={postdata}>Post Data</button>
             <button onClick={()=>putdata('d244')}>Put Data</button>
             <button onClick={()=>patchdata('d244')}>Patch Data</button> 
            <button onClick={()=>deldata('d244')}>Delete Data</button> 
        </div>
      )
    

}   

export default One