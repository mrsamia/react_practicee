import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import First_part from "../component/First_part";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style';
import Second_part from "../component/Second_part";
import Card from "../component/Card";
import img_1 from "../images/img_1.png";
import Mapping_prac from "../component/Mapping_prac";
import data from "../data/mappingData.json";


function App() {
    return (

        <div className="txt_center">
            <Navbar type='nav2' />

            <First_part />
            <Second_part />

            <Mapping_prac />
















            <div className="pt-5">
                <h1>MY APP</h1>
            </div>

            <div>
                <Input name="username" placeholder="User Name" />
            </div>
            <div>
                <Input name="password" placeholder="PassWord" />
            </div>
            <div>
                <Input name="address" placeholder="Address" />
            </div>
            <div>
                <Input name="number" placeholder="Number" />
            </div>

            <div>
                <Button btn="Submit" />
            </div>

        </div>

    );
}
export default App;