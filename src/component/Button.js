import React from "react";


function Button({btn='',...props}){
    return(
        
        <button className="read_more">{btn}</button>
    );
}
export default Button;