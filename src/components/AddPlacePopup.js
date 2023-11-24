import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onAddPlace, onClose }) {
 
  const [ place, setPlace ] = useState('');
  const [ link, setLink ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      place,
      link
    })
  }

  const handleChangePlace = (e) => {
    setPlace(e.target.value);
  }

  const handleChangeLink = (e) => {
    setLink(e.target.value);
  }

  useEffect(() => {
    if(!isOpen) {
      setPlace('');
      setLink('');
    }
  }, [isOpen]);


  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChangePlace}
        value={place}
        id="place"
        className="popup__item"
        name="place"
        type="text"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
      />
      <span 
        id="place-input-error" 
        className="popup__input-error" 
      />
      <input
        onChange={handleChangeLink}
        value={link}
        id="link"
        className="popup__item"
        name="link"
        type="url"
        placeholder="Ссылка на страницу"
        required
      />
      <span 
        id="link-input-error" 
        className="popup__input-error"
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
