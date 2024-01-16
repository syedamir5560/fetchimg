import React, { useState } from 'react'
import Search from './Search'
import axios from 'axios';
import { queries } from '@testing-library/react';
import RenderImg from './RenderImg';

function Main() {

    let [txt, settxt] = useState("dal lake")
    let [data, setdata] = useState([])

    let access_key = 'yWO1ksDRygoCZHsD_hnqC2g_7VPCdb5T8fhE3-DYM8Y';

    let onHandleSubmit =async(e) => {
        e.preventDefault()

        await axios.get(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${txt}`)
            .then((response)=>{
            setdata(response.data.results )
            })
    }

    return (
        <div>
            <Search txt={txt} settxt={settxt} onHandleSubmit={onHandleSubmit} />
           <div className='data'>
           <RenderImg data={data}/>
           </div>
        </div>
    )
}

export default Main