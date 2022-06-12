import React from 'react';
import {FiMessageSquare} from 'react-icons/fi'

const Logo =(props)=>{
    return(
        <React.Fragment>
            <h3 style={{fontSize:'3rem',color:props.page==='landing'?'white':'#6096BA',fontWeight:'400',marginBottom:'2rem',alignSelf:props.page==='landing'?'center':'flex-start'}}><FiMessageSquare size={60}/>Chattr.</h3>
        </React.Fragment>
    )
}
export default Logo;