import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";

function CardForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await a.post('items/post/', { content, name });  // Отправляем name тоже
      navigate(HOME);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="form-group" style={{ marginBottom: "25px" }}>
        <label htmlFor="name">Название:</label>
        <input
          type="text"
          id="name"
          value={name}  // Используем значение из state для поля input
          onChange={(e) => setName(e.target.value)}  // Обновляем значение name
          className="form-control"
          placeholder="Введите название"
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          rows="30"
          cols="10"
          placeholder="напишите свой план сегодня..."
        />
        <button className="submit-primary-button" type="submit">
          Сохранить
        </button>
      </form>
    </>
  );
}

export default CardForm;
