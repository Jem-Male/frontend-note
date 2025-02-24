import { Link } from "react-router-dom";
import BackIcon from "../assets/images/back.svg"
import UpdateCardForm from "../components/UpdateCardForm";
import { HOME } from "../services/consts";

function Update(){
    return(
    <div className="block">
        <div className="container">
          <Link to={HOME} className="fiexd-top-left">
            <img src={BackIcon} alt="back"></img>
          </Link>
          <h1 className="title">Изменить Зметку</h1>
          <UpdateCardForm/>
        </div>
      </div>
    );
}

export default Update;