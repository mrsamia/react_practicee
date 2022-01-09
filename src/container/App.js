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
import daata from "../data/mappingData.json";
import Mapping_practice_t from "../component/Mapping_practice_t";
import Mapping_item from "../component/Mapping_item";
import HIW from "../data/HIW.json";



function App() {
    return (

        <div className="txt_center">
            <Navbar type='nav2' />

            <First_part />
            <Second_part />

            <Mapping_prac />

            <Mapping_practice_t Mapping={daata.data} title={daata.title} subtitle={daata.subtitle}/>

            <Mapping_item title="Samia" />













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