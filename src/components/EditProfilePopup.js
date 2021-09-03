import React, {useEffect, useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [profileTitle, setProfileTitle] = useState('');
    const [profileJob, setProfileJob] = useState('');
    const currentUser1 = useContext(CurrentUserContext);


    useEffect(() =>{
        setProfileTitle(currentUser1.name)
        setProfileJob(currentUser1.about)}, [])


    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleChangeProfileTitle(evt){
    evt.preventDefault();
    setProfileTitle(evt.target.value)}

    function handleChangeProfileJob(evt){
        evt.preventDefault();
        setProfileJob(evt.target.value)}

    function handleSubmit(evt) {
        evt.preventDefault();
        props.updateProfile({'name':profileTitle,
                              'about':profileJob});
    }

    return (
        <PopupWithForm
            name="profile"
            formName="form_edit_profile"
            title="Редактировать профиль"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            buttonText="Сохранить"
            onClick={handleSubmit}
        >
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
    function handleSubmit(evt) {
        evt.preventDefault();
        api.setUserInfo({profileTitle}, {profileJob});
        props.onClose();
    }
*/