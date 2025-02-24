import BackIcon from "../assets/images/back.svg"
import CardForm from "../components/CardForm";
import { Link } from "react-router-dom";
import { HOME } from "../services/consts";

function Create(){
    return(
    <div className="block">
        <div className="container">
          <Link to={HOME} className="fiexd-top-left">
            <img src={BackIcon} alt="back"></img>
          </Link>
          <h1 className="title">Создать Зметку</h1>
          <CardForm/>
        </div>
      </div>
    );
}

export default Create;