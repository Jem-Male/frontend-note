import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";

function UpdateCardForm() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [name, setName] = useState("");  // Добавляем новое состояние для name
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await a.get(`items/detail/${id}/`);
        setContent(res.data.content);
        setName(res.data.name);  // Устанавливаем текущее значение name
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Отправляем запрос с обновленным контентом и именем
      await a.put(`items/update/${id}/`, { content, name });
      navigate(HOME);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Название:   </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Обрабатываем изменение name
            className="form-control"
            placeholder="Введите название"
          />
        </div>
        <hr/>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            rows="10"
            cols="30"
            placeholder="Напишите свой план сегодня..."
          ></textarea>
        
        <button className="submit-primary-button" type="submit">
          Сохранить изменения
        </button>
      </form>
    </>
  );
}

export default UpdateCardForm;
