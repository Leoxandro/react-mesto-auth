import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [ name, setName ] = useState(currentUser.name)
  const [ about, setAbout ] = useState(currentUser.about)
 
  useEffect(() => {
    setName(currentUser.name)
    setAbout(currentUser.about)
  }, [currentUser, isOpen]);


  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: about
    })
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        className="popup__item"
        name="name"
        type="text"
        placeholder="Ваше имя"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleChangeName}
      />
      <span 
        id="name-input-error" 
        className="popup__input-error" 
      ></span>
      <input
        id="description"
        className="popup__item"
        name="description"
        type="text"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
        value={about}
        onChange={handleChangeAbout}
      />
      <span 
        id="name-input-error" 
        className="popup__input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
