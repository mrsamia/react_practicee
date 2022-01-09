import Header from "./Header";
import Button from "./Button";

function First_part() {
    return (
        <div className="container vh-100 first_part ">
            <div className="">
                <Header title="Redesigned, How you build landing page!" />
            </div>
            <div>
                <p className="txt_p pt-4 pb-4">Create custom landing pages with Omega that convert more visitors than any website.
                    With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div>
                <Button btn="Get Started" />
            </div>

        </div>
    );
}
export default First_part;