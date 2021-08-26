import React from "react";
import isEditAvatarPopupOpen from "./App"
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup1(props){
    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }
    function onSubmit(evt) {
        evt.preventDefault();
        props.onDelete(props.selectedCard) //описать
        props.onClose()
    }
return(
/*    <PopupWithForm
        onClose = {props.onClose}
        name = ""
        title = "Редактировать аватар"
        isOpen = {props.isOpen}
        onSubmit = {props.onSubmit} // не описано еще и хз надо ли
        buttonText = "Сохранить"
    >*/

        <section  className={`popup popup_type_edit-avatar popup_type_edit ${isEditAvatarPopupOpen ? "popup_opened" : ""} `} >
        <div className="popup__container">
            <button aria-label='Закрыть всплывающее окошко'
                    className="popup__close-button"
                    name="popup__close-button" type="button"/>
            <form action="#"
                  aria-label='смена аватарки'
                  className="popup__form"
                  id="popup-mega-id-avatar"
                  method="POST"
                  name="resaveProfileAvatar"
                  noValidate/>
            <h2 className="popup__page">Обновить аватар</h2>
            <label className="popup__label">
                <input className="popup__field popup__avatar-link"
                       id="popup-avatar-link"
                       name="input-avatar"
                       placeholder="Ссылка на новую аватарку"
                       required
                       type="url"
                       value=''/>
                <span className="popup__input-error" id="popup-avatar-link-error"/>
            </label>
            <button aria-label='Кнопка сохраняем аватарку'
                    className="popup__save"
                    type="submit">Сохранение...
            </button>
        </div>
    </section>
)
}
export default EditAvatarPopup1;