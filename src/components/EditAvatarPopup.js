import React, {useState, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

/*function handleSubmitAvatarProfile(formValues) {
    const userAva = {'avatar': formValues['input-avatar']}
    api.submitUserAvatar(userAva).then((res) => {
        profileUserInfo.setUserInfo(res);
        popupAvatar.close();
    }).catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    })
        .finally(() => {
            popupAvatar.resetButtonText();
        });
}*/

function EditAvatarPopup(props) {
    const [avaUrl, setAvaUrl] = useState('');
    const avaRef = useRef(); // записываем объект, возвращаемый хуком, в переменную

//закрытие по оверлею. На этом элементе произошло событие. Проверяет есть ли тут попап и закрывает его.
    function handleClose(evt) {
        if (evt.target.classList.contains('popup'))
            props.onClose();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.handleSubmitAvatar(avaRef.current.value)
        props.onClose()
    }

    function handleSubmitAvatar(){

    }


    return (
        <PopupWithForm
            onClose={props.onClose}
            //И  по оверлею. В брифе нет пока . Но наверняка будет.
            overlayClose={handleClose}
            name="input-avatar popup_type_edit-avatar"
            formName="form_edit_avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}

            type ="submit"
            buttonText="Сохранить"
            button onClick = {(evt) => handleSubmit(evt)}
        >
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
                       ref={avaRef}
                />
                <span className="popup__input-error" id="popup-avatar-link-error"/>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;