import React, {useContext, useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [profileTitle, setProfileTitle] = useState('');
    const [profileJob, setProfileJob] = useState('');
    const currentUser = useContext(CurrentUserContext);


    useEffect(() => {
        setProfileTitle(currentUser.name)
        setProfileJob(currentUser.about)
    }, [])


    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleChangeProfileTitle(evt) {
        //evt.preventDefault();
        setProfileTitle(evt.target.value)
    }

    function handleChangeProfileJob(evt) {
        //evt.preventDefault();
        setProfileJob(evt.target.value)
    }

    function handleSubmitProfile(evt) {
        evt.preventDefault();
        api.submitUserInfo({
            'name': profileTitle,
            'about': profileJob
        })
            .then(data => {
                currentUser.name = data.name;
                currentUser.about = data.about;
                props.onSubmit();
            })
            .catch((err) => {
                console.log('MAMA, username не  получен!!!: ' + err.toString())
            })
    }

    return (
        <PopupWithForm
            name="profile"
            formName="form_edit_profile"
            title="Редактировать профиль"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmitProfile}
            buttonText="Сохранить">
            <label className="popup__label">
                <input className="popup__field"
                       onChange={handleChangeProfileTitle}
                       id="popup-field-name"
                       maxLength="40" minLength="2"
                       name="inputForm_name"
                       placeholder="Ваше имя"
                       required
                       type="text"
                />
                <span className="popup__input-error"
                      id="popup-field-name-error"/>
            </label>

            <label className="popup__label">
                <input className="popup__field"
                       onChange={handleChangeProfileJob}
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

/*
    function handleSubmitProfile(evt) {
        evt.preventDefault();
        api.setUserInfo({profileTitle}, {profileJob});
        props.onClose();
    }
*/