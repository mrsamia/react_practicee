import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import First_part from "../component/First_part";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style';


function App(){
    return(

        <div className="txt_center">
            <Navbar type='nav2'/>
            
            <First_part/>


















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