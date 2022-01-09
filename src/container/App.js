import React from "react";
import Navbar from "../component/Navbar";
import First_part from "../component/First_part";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style';
import Second_part from "../component/Second_part";
import Last_part from "../component/Last_part";
import Third_part from "../component/Third_part";
import img from "../images/img.png";
// import Mapping_prac from "../component/Mapping_prac";
// import daata from "../data/mappingData.json";
// import Mapping_practice_t from "../component/Mapping_practice_t";
// import Mapping_item from "../component/Mapping_item";




function App() {
    return (

        <div >
            <Navbar type='nav2' />

            <First_part/>
            <Second_part />
            <Third_part subtitle="Create custom landing pages with Omega that converts
             more visitors than any website. With lots of unique blocks, you can easily build a page without coding." 
             imge={require("../images/img.png")}
             condition={false}/>
             <Third_part subtitle="Create custom landing pages with Omega that converts
             more visitors than any website. With lots of unique blocks, you can easily build a page without coding." 
             imge={require("../images/img.png")}
             condition={true}/>
            <Last_part />















            {/* Mapping_practice */}
            {/* <Mapping_prac />
            <Mapping_practice_t Mapping={daata.data} title={daata.title} subtitle={daata.subtitle} />
            <Mapping_item title="Samia" /> */}
        </div>

    );
}
export default App;