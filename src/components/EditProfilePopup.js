import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";

function EditProfilePopup(props) {
    //стейты
    const [profileTitle, setProfileTitle] = useState('');
    const [profileJob, setProfileJob] = useState('');

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        api.setUserInfo({profileTitle}, {profileJob});
        props.onClose();
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            name=""
            formName="form_edit_profile"
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            buttonText="Сохранить"
        >
            <label className="popup__label">

                <input className="popup__field"
                       value={profileTitle ? profileTitle : 'Хороший человек'}
                       onChange={setProfileTitle}
                       id="popup-field-name"
                       maxLength="40" minLength="2"
                       name="inputForm_name"
                       placeholder="Ваше имя"
                       required
                       type="text"/>
                <span className="popup__input-error" id="popup-field-name-error"/>
            </label>

            <label className="popup__label">
                <input className="popup__field"
                       value={profileJob ? profileJob : 'Погонятель пингвинов'}
                       onChange={setProfileJob}
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