import React from "react";
import Navbar from "../component/Navbar";
import First_part from "../component/First_part";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style';
import Second_part from "../component/Second_part";
import Last_part from "../component/Last_part";
// import img_1 from "../images/img.png";
// import Mapping_prac from "../component/Mapping_prac";
// import daata from "../data/mappingData.json";
// import Mapping_practice_t from "../component/Mapping_practice_t";
// import Mapping_item from "../component/Mapping_item";




function App() {
    return (

        <div className="txt_center">
            <Navbar type='nav2' />

            <First_part />
            <Second_part />
            <Last_part />















            {/* Mapping_practice */}
            {/* <Mapping_prac />
            <Mapping_practice_t Mapping={daata.data} title={daata.title} subtitle={daata.subtitle} />
            <Mapping_item title="Samia" /> */}
        </div>

    );
}
export default App;