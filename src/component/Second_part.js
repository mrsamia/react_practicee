import Header from "./Header";
import  Button  from "./Button";
import Card from "./Card";
import Card_feature from "./Card_feature";

function Second_part(){
    return(
        <div className="second_part">
        <div className="container ">
            <div className="pt-5">
                <Header title="How It Works!"/>
            </div>
            <div>
                <p className="txt_p pt-4 pb-4">Create custom landing pages with Omega that convert more visitors than any website.
                    With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            
            <div className="pb-5">
                <Card_feature />
            </div>
           
        </div>
        </div>
    );
}
export default Second_part;