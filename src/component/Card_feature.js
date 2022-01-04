import  Button  from "./Button";
import Card from "./Card";
import img_1 from "../images/img_1.png";

function Card_feature({items=[]}){
    return(
        <div className="container row">
            
  <div className="col-4">
      <Card img={img_1} cardTitle="Samia Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
  </div>
  <div className="col-4">
      <Card img={img_1} cardTitle="Samia Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
  </div>
  <div className="col-4">
      <Card img={img_1} cardTitle="Samia Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
  </div>
  
</div>
       
       




       


       
    );
}
export default Card_feature;