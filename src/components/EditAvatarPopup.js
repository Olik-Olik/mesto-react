import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const [avaUrl, setAvaUrl] = useState('');

    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        /* props.onDelete(props.selectedCard) //описать*/
        props.onClose()
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            name="input-avatar popup_type_edit-avatar"
            formName="form_edit_avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            buttonText="Сохранить">
            <label className="popup__label">
                <input className="popup__field popup__avatar-link"
                       id="popup-avatar-link"
                       name="input-avatar"
                       placeholder="Ссылка на новую аватарку"
                       required
                    /*  style={{ backgroundImage: `url(${props.userAvatar})` }}*/
                       type="url"
                       value=''
                       onChange={setAvaUrl}
                />
                <span className="popup__input-error" id="popup-avatar-link-error"/>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;