import React, {useState, useRef, useContext,useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function EditAvatarPopup(props) {
    const [avaUrl, setAvaUrl] = useState(' ');
    const avaRef = useRef();
    const  currentUser1 =useContext(CurrentUserContext);

  function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateAvatar({avatar:avaRef.current.value});
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="input-avatar popup_type_edit-avatar"
            formName="form_edit_avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            type ="submit"
            buttonText="Сохранить"

        >
    <label className="popup__label">
                <input className="popup__field popup__avatar-link"
                       id="popup-avatar-link"
                       name="input-avatar"
                       placeholder="Ссылка на новую аватарку"
                       required
                       type="url"
                       ref={avaRef}
                />
                <span className="popup__input-error" id="popup-avatar-link-error"/>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;



