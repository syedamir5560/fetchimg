import React, { useState } from 'react'
import Search from './Search'
import axios from 'axios';

function Main() {

    let [txt, settxt] = useState("apple")

    let access_key = 'yWO1ksDRygoCZHsD_hnqC2g_7VPCdb5T8fhE3-DYM8Y';

    let onHandleSubmit = async (e) => {


        await axios
            .get(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${txt}`).then((response)=>{
                console.log(response)
            })
    }

    return (
        <div>
            <Search txt={txt} settxt={settxt} onHandleSubmit={onHandleSubmit} />
        </div>
    )
}

export default Main