import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import '../Style';

function App(){
    return(

        <div className="txt_center">

            <div>
            <h1>MY APP</h1>
            </div>
           
            <div>
                <Input name="username" placeholder="User Name"/>
            </div>    
            <div>
                <Input name="password" placeholder="PassWord"/>
            </div>
            <div>
                <Input name="address" placeholder="Address"/>
            </div>
            <div>
                <Input name="number" placeholder="Number"/>
            </div>
            
            <div>
                 <Button btn="Submit"/>
            </div>
            
        </div>
        
    );
}
export default App;