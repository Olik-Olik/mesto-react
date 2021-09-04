import React, {useContext, useRef, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function EditAvatarPopup(props) {
    const [avaUrl, setAvaUrl] = useState('');
    const avaRef = useRef();
    const currentUser = useContext(CurrentUserContext);

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleChangeAva(evt) {
        setAvaUrl(evt.target.value);
    }

    function handleEditAvatarSubmit(evt) {
        // Запрещаем браузеру переходить по адресу формы
        evt.preventDefault();
        api.submitUserAvatar({
            'avatar': avaUrl
        })
            .then(data => {
                currentUser.avatar = data.avatar
                props.onSubmit();
            })
            .catch((err) => {
                console.log('MAMA, Аватарчик не  получен!!!: ' + err.toString())
            })

    }


    return (
        <PopupWithForm
            onClose={props.onClose}
            onSubmit={handleEditAvatarSubmit}
            name="input-avatar popup_type_edit-avatar"
            formName="form_edit_avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            type="submit"
            buttonText="Сохранить"
        >
            <label className="popup__label">
                <input className="popup__field popup__avatar-link"
                       id="popup-avatar-link"
                       name="input-avatar"
                       placeholder="Ссылка на новую аватарку"
                       required
                       type="url"
                    /*     //  ref={avaRef}*/
                       value={avaUrl ? avaUrl : ''}
                       onChange={handleChangeAva}
                />
                <span className="popup__input-error" id="popup-avatar-link-error"/>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;

// useEffect(() => avaRef.current.value = currentUser;
// api.handleSubmitAvatar =(avatar).then(newAva)=>

