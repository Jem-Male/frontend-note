import { Link, useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/images/back.svg";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";

function Delete(){

  const {id}=useParams();
  const navigate = useNavigate();


  async function handleDelete() {
   try{
    await a.delete(`items/delete/${id}/`);
    navigate(HOME);
   } catch(e){
    console.log(e);
   } 
  }

    return(
    <div className="block">
      <div className="container">
        <Link to={HOME} className="fiexd-top-left">
          <img src={BackIcon} alt="back"></img>
        </Link>
        <h1 className="title">Удалить Зметку?</h1>
        <p className="description">Вы уверены, что хотите удалить этот пост? Это действие необратимо.</p>
        <button onClick={handleDelete} className="fixed-bottom-delete">Удалить</button>
      </div>
    </div>
    );
}

export default Delete;