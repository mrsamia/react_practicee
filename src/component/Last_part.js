import Input from "../component/Input";
import Button from "../component/Button";
import Header from "../component/Header";

function Last_part() {
    return (
        <div className="last_part txt_center">
            <div className="pt-5 text-white">
                <Header title="Get started" />
            </div>
            <div className="text-white txt_p pt-4 pb-4" >
                <p>Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique <br></br>blocks, you can easily build a page without coding.</p>
            </div>

            <div>
                <Input name="username" placeholder="User Name" />
            </div>
            <div>
                <Input name="password" placeholder="PassWord" />
            </div>
            <div>
                <Input name="address" placeholder="Address" />
            </div>

            <div className="pt-4 pb-4">
                <Button btn="Submit" width="900px" border="none"

                    height="200px"



                />
            </div>
        </div>
    );
}

export default Last_part;