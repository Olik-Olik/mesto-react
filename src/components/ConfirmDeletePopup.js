import React from "react";
import isConfirmDeletePopup from './App';
import PopupWithForm from "./PopupWithForm";


function ConfirmDeletePopup(props) {


    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }
    function handleSubmit(evt) {
        evt.preventDefault();
       /* props.сохранить(props.selectedCard) //описать*/
        props.onClose();
    }
    return (
        <section  className={`popup popup_delete-confirm  popup_type_edit ${isConfirmDeletePopup ? "popup_opened" : ""} `}>
                   <button className="popup__close-button"
                           aria-label='Закрыть всплывающее окошко'
                           onClick={(evt) => handleClose(evt)}
                           type="button"/>
                   <div className="popup__container-delete-confirm">
                   <form  className="popup__form"
                       action="#"
                       aria-label='Вы уверены, что хотите удалить карточку?'
                       id="popup-delete-card"
                       name="deleteConfirmCard"
                       noValidate>
                    <label className="popup__label">
                        <h2 className="popup__page"
                            onClick={props.onClose} //не факт, что можно повесить, но попробую , зотя-даже и не нужно,проверить
                        >Вы уверены?</h2>
                    </label>
                    <button className="popup__save"
                            aria-label='Кнопка уверенности в закрытии'
                            onClick={(evt) => handleSubmit(evt)}
                            type="submit">Да

                    </button>
                    </form>
                    </div>
        </section>
    )
}
export default ConfirmDeletePopup;