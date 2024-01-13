import React from 'react'

function RenderImg(props) {

    let showImg=props.data.map((ele)=>{
            return <img key={ele?.id} src={ele?.urls?.small} />
    })

  return (
    <div>
        {
         [showImg]        
        }
    </div>
  )
}

export default RenderImg