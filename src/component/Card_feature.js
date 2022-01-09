import Card from "./Card";

function Card_feature({itmsAb=[]}){
    return(
   
       <div className="row mrgin_padding text-center">
          {itmsAb.map((item) => (
            <div className="col-4 ">
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
export default Card_feature;




//   <div className="container row">
            
//   <div className="col-4">
//       <Card img={img_1} cardTitle="Samia Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
//   </div>
//   <div className="col-4">
//       <Card img={img_1} cardTitle="Moshfiq Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
//   </div>
//   <div className="col-4">
//       <Card img={img_1} cardTitle="Rony Rahman" cardText="Some example text some example text. Jane Doe is an architect and engineer"/>
//   </div>
  
// </div>