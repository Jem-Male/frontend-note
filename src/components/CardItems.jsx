import React, { useState } from "react";
import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";
import { Link } from "react-router-dom";
import { handleToggle } from "../services/handleToggle";
import check from "../assets/images/check.png";
import cancel from "../assets/images/cancel.png";

function CardItem({ post }) {
    // Инициализируем состояние для is_finished с данным значением
    const [isFinished, setIsFinished] = useState(post.is_finished);

    const toggleStatus = async () => {
        const newStatus = await handleToggle(post.id, isFinished);
        setIsFinished(newStatus);  // Обновляем состояние
    };

    return (
        <div className="card-item">
            <Link to={READ.substring(0, READ.length - 3) + post.id} className="divide">
                <h3 className="caed-name__title">{post.name}</h3>
                <h6 className="caed-name__title">{post.content}</h6>
                <span className="card_item__date">{formatDate(post.created_at)}</span>
                
            </Link>
            <div className="center-button">
              <button className="triger" onClick={toggleStatus}>
                {isFinished ? (
                  <img   style={{
                    width: '40px',  // Верный синтаксис: объект стилей
                    haigt: '40px'
                  }} src={check} alt="Завершено" />
                ) : (
                  <img style={{
                    width: '40px',  // Верный синтаксис: объект стилей
                    haigt: '40px'
                  }} src={cancel} alt="Не завершено" />
                )}
              </button>
            </div>
        </div>
    );
}

export default CardItem;