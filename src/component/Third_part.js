import Button from "./Button";
import Header from "./Header";

function Pic_right({ subtitle, imge }) {
    return ( 
        <div className="container third_part">
        <div className="row d-flex align-items-start">
            <div className="col-6">
                <div>
                    <Header title="Save time on development." />
                </div>
                <div>
                    <p className="txt_p pt-4 pb-4">{subtitle}</p>
                </div>
                <div>
                    <Button btn="Get Started"/>
                </div>
            </div>
            <div className="col-6">
                <img src={imge} />
            </div>
        </div>
        </div>
     );
}



function Pic_left( { subtitle, imge }) {
    return ( 
        <div className="container third_part">
        <div className="row d-flex align-items-start">
        <div className="col-6">
                <img src={imge} />
            </div>
            <div className="col-6">
                <div>
                    <Header title="Save time on development." />
                </div>
                <div>
                    <p className="txt_p pt-4 pb-4">{subtitle}</p>
                </div>
                <div>
                    <Button btn="Get Started"/>
                </div>
            </div>
           
        </div>
        </div>
     );
}




function Third_part({condition,imge,subtitle}) {
    if (condition) {
        return <Pic_left  subtitle={subtitle} image={imge} />;
      }
      return <Pic_right  subtitle={subtitle} image={imge} />;
    }


export default Third_part;