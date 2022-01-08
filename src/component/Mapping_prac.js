import React from "react";
import Card from "./Card";
import data from "../data/mappingData.json";



function Mapping_prac({ cardItems = data.data }) {
    return (

        <div className="row">
            {cardItems.map((item) => (

                <div className="col-4">
                    <Card
                        imge={item.img}
                        cardTitle={item.title}
                        cardText={item.subtitle}

                    />
                </div>

            ))}
        </div>
    );
}
export default Mapping_prac;