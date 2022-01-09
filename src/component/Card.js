import Button from "./Button";


function Card({ cardTitle, cardText, imge}) {
  return (
    <div className="container">
      <div class="card" >
        <div class="card-body">
          <div className="pt-3 pb-3">
            <img className="rounded-circle" height='100px' width='100px' src={imge} />
          </div>
          <h4 class="card-title pt-3  ">{cardTitle}</h4>
          <p class="card-text">{cardText}</p>
          <div className="pt-3 pb-4">
            <Button btn="See Profile" />
          </div>

        </div>

      </div>
    </div>


  );
}
export default Card;