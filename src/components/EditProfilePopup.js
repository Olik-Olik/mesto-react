import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    //стейты
    const [handleTitle, sethandleTitle] = useState('');
    const [handleJob, sethandleJob] = useState('');

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.addProfile({
             title: handleTitle('Жак-Ив Кусто'), //блин и как это место описать чтобы не undefined
              name: handleJob('Исследователь океана')})

        props.onClose()
    }

/*
        React.useEffect( {
            title: sethandleTitle('Жак-Ив Кусто'),
            name:  sethandleJob('Исследователь океана')}, [props.isOpen]) //проверить*/

    return (
        <PopupWithForm
            onClose={props.onClose}
            name=""
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            buttonText="Сохранить"
        >
            <h2 className="popup__page">Редактировать профиль</h2>
            <label className="popup__label">

                <input className="popup__field"
                       value={handleTitle ? handleTitle : 'Хороший человек'}
                       id="popup-field-name"
                       maxLength="40" minLength="2"
                       name="inputForm_name"
                       placeholder="Ваше имя"
                       required
                       type="text" />
                <span className="popup__input-error" id="popup-field-name-error"/>
            </label>

            <label className="popup__label">
                <input className="popup__field"
                       value={handleJob ? handleJob : 'Погонятель пингвинов'}
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
        </PopupWithForm>
    )
}

export default EditProfilePopup;