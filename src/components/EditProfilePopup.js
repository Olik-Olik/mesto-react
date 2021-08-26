import React from "react";
import isEditProfilePopupOpen from './App';
import PopupWithForm from "./PopupWithForm";
function EditProfilePopup(props){

    //стейты

    const [handleTitle, sethandleTitle] = useState('');
    const [handleUrlPlace,sethandleUrlPlace] = useState('');

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onDelete(props.selectedCard) //описать
        props.onClose()
    }
return(

    <PopupWithForm
        onClose = {props.onClose}
        name = ""
        title = "Редактировать профиль"
        isOpen = {props.isOpen}
        onSubmit = {handleSubmit} // не описано еще и хз надо ли
        buttonText = "Сохранить"
    >


    <section className={`popup popup_type_edit ${isEditProfilePopupOpen ? "popup_opened" : ""} `}>
        <button className="popup__close-button"
                type="button"
                aria-label='Закрыть всплывающее окошко'
                onClick={(evt) => handleClose(evt)}
        />
        <div className="popup__container">


        <form name="resaveProfile"
              action="#"
              aria-label='получения инфо и передачи данных'
              className="popup__form"
              id="popup-mega-id"
              method="GET"
              noValidate>
        <h2 className="popup__page">Редактировать профиль</h2>


        <label className="popup__label">

            <input/>
                    <input className="popup__field"
                           value={handleTitle ? handleTitle : ''}
                           id="popup-field-name"
                           maxLength="40" minLength="2"
                           name="inputForm_name"
                           placeholder="Ваше имя"
                           required
                           type="text"
                           value='Жак-Ив Кусто'/>

            <span/>
                    <span className="popup__input-error" id="popup-field-name-error"/>


             </label>
                   <label className="popup__label">
                    <input className="popup__field"
                           value={handleTitle ? handleTitle : ''}
                           id="popup-field-job"
                           maxLength="200"
                           minLength="2"
                           name="inputForm_job"
                           placeholder="Род занятия"
                           required type="text"
                           value='Исследователь океана'/>
                    <span className="popup__input-error"
                          id="popup-field-job-error"/>
                </label>

                <button aria-label='Кнопка Сохранить'
                        className="popup__save"
                        onClick={(evt) => handleSubmit(evt)}
                        type="submit">Сохранить</button>
            </form>
        </div>
    </section>
    </PopupWithForm>
)}
export default EditProfilePopup;