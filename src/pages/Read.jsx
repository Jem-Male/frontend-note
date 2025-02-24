import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackIcon from "../assets/images/back.svg";
import deletIcon from "../assets/images/delete.svg";
import penIcon from "../assets/images/pen.svg";
import plusIcon from "../assets/images/pluse.svg";
import { a } from "../services/axiosInstance";
import { Link } from "react-router-dom";
import { CREATE, DELETE, HOME, UPDATE } from "../services/consts";
import check from "../assets/images/check.png";
import cancel from "../assets/images/cancel.png";

function Read() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await a.get(`items/detail/${id}`);
        setPost(res.data);
        setIsFinished(res.data.is_finished); // Устанавливаем состояние isFinished
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, [id]);

  // Функция для обновления статуса "завершено"
  const toggleStatus = async () => {
    try {
      const updatedStatus = !isFinished; // Меняем статус на противоположный
      const response = await a.put(`items/update/${post.id}/`, {
        ...post,
        is_finished: updatedStatus,
      });
      setIsFinished(updatedStatus); // Обновляем состояние после изменения
    } catch (error) {
      console.error("Ошибка при изменении статуса:", error);
    }
  };

  return (
    <div className="block">
      <div className="container">
        <Link to={HOME} className="fiexd-top-left">
          <img src={BackIcon} alt="back" />
        </Link>
        <h1 className="title">{post.name}</h1>
        <p className="description">{post.content}</p>
        <div className="fiexd-menu-buttom">
          <Link to={DELETE.substring(0, DELETE.length - 3) + post.id} className="delete-buton">
            <img src={deletIcon} alt="delete" />
          </Link>
          <Link to={UPDATE.substring(0, UPDATE.length - 3) + post.id} className="edit-buton">
            <img src={penIcon} alt="edit" />
          </Link>
          <Link to={CREATE} className="add-buton">
            <img src={plusIcon} alt="add" />
          </Link>
          <button className="trigerr" onClick={toggleStatus}>
            {isFinished ? (
              <img
                style={{
                  width: "72px", // Верный синтаксис: объект стилей
                  height: "72px", // Исправили "haigt" на "height"
                }}
                src={check}
                alt="Завершено"
              />
            ) : (
              <img
                style={{
                  width: "72px", // Верный синтаксис: объект стилей
                  height: "72px", // Исправили "haigt" на "height"
                }}
                src={cancel}
                alt="Не завершено"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Read;
