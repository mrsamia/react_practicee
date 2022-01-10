import Card from "./Card";
import Header from "./Header";

function Forth_part({maap=[]}) {
    return (
        <div className="container txt_center">
            <div>
                <Header title="Customers are loving Omega"/>
            </div>
            <div className="row">
                {maap.map((item)=>(
                    <div className="col-4">
                        <Card cardTitle="hdfghg"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forth_part;