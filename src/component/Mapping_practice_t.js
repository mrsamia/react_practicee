import Mapping_item from "./Mapping_item";


function Mapping_practice_t({ Mapping = [], title, subtitle }) {
    return (
        <div className=" row">

            {Mapping.map((item) => (
                <div className="col-4">
                    <Mapping_item
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                </div>
            ))}

        </div>
    );
}

export default Mapping_practice_t;