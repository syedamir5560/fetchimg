import React, { useState } from 'react'
import Search from './Search'
import Imgresult from './Imgresult'

function Main3() {
    let [txt, setTxt] = useState('lion')

  return (
    <div>
         <Search txt={txt} setTxt={setTxt}/>
        <Imgresult/>
    </div>
  )
}

export default Main3