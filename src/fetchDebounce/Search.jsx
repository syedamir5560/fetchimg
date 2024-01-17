import React from 'react'
import Imgresult from './Imgresult'

function Search(props) {
    console.log(props)
    let {txt , setTxt} = props
  return (
    <div>
        <input type='text' placeholder='serach...' value={txt} onChange={(e)=>setTxt(e.target.value)}/>
    </div>
  )
}

export default Search