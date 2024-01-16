import React from 'react'
// import './App.css';
import './index.css';

function Search(props) {

    // console.log(props)
    let {txt , settxt , onHandleSubmit} = props

  return (
    <>
       <form  onSubmit={onHandleSubmit} className='form'>
       <input type='text'  placeholder='Serach...'  className="search" value={txt}
         onChange={(e)=>settxt(e.target.value)} />
        <button className='btn'  onChange={(e)=>settxt(e.target.value)}>Search</button>
        
       </form>
    </>
  )
}

export default Search