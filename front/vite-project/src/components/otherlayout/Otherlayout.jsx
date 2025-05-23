import React from 'react'
import OtherHeader from "../otherheader/OtherHeader.jsx";
import {Outlet} from "react-router";

const Otherlayout = () => {
    return (
       <div >
            <OtherHeader/>
           <Outlet/>
       </div>
    )
}

export default Otherlayout