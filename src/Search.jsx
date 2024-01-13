import React from 'react'

function Search(props) {

    // console.log(props)
    let {txt , settxt , onHandleSubmit} = props

    

  return (
    <>
       <form  onSubmit={onHandleSubmit}>
       <input type='text'  placeholder='Serach...' value={txt}
        onChange={(e)=>settxt(e.target.value)} id='id' />
       </form>
    </>
  )
}

export default Search