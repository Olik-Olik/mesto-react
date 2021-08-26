import React,{useState, useEffect} from "react";
import isEditProfilePopupOpen from './App';
import PopupWithForm from "./PopupWithForm";
function EditProfilePopup(addProfile, onClose, isOpen){

    //стейты

    const [handleTitle, sethandleTitle] = useState('');
    const [handleJob,sethandleJob] = useState('');

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addProfile(       {title:handleTitle, //блин и как это место описать чтобы не undefined
                            name:handleJob})
        onClose()
    }

    useEffect( {
        title: sethandleTitle('Жак-Ив Кусто'),
        name:  sethandleJob('Исследователь океана')}, [isOpen]) //проверить

    return(

    <PopupWithForm
        onClose = {onClose}
        name = ""
        title = "Редактировать профиль"
        isOpen = {isOpen}
        onSubmit = {handleSubmit}
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
                           />

            <span/>
                    <span className="popup__input-error" id="popup-field-name-error"/>


             </label>
                   <label className="popup__label">
                    <input className="popup__field"
                           value={handleJob ? handleJob : ''}
                           id="popup-field-job"
                           maxLength="200"
                           minLength="2"
                           name="inputForm_job"
                           placeholder="Род занятия"
                           required type="text"
                           />
                    <span className="popup__input-error"
                          id="popup-field-job-error"/>
                </label>

                <button aria-label='Кнопка Сохранить'
                        className="popup__save"
                        onClick={(evt) => handleSubmit(evt)}
                        type="submit">Сохранить
                </button>
            </form>
        </div>
    </section>
    </PopupWithForm>
)}
export default EditProfilePopup;