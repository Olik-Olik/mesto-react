import React from "react";

function PopupWithForm(props) {
    return (
        <section className={`popup  popup_type_edit ${props.isOpen ? "popup_opened" : ""} `}>
            {/*{`popup popup_type_${props.name}`}>*/}
            <button aria-label='Закрыть всплывающее окошко' className="popup__close-button" type="button"
                    onClick={props.onClose}/>
            <div className="popup__container">

                <form action="#" name="resaveCountry" className="popup__form"
                      aria-label='получения инфо и передачи данных в адресной строке'
                      id="popup-input-mega-id" method="GET" noValidate onSubmit={props.onSubmit}>

                    <label className="popup__label">
                        <span className="popup__input-error" id="popup-field-card-name-error"/>
                    </label>
                    {props.children}
                    <button aria-label='Кнопка Создать место'
                            className="popup__save {`${(not props.buttonSubmitState) ? '' : ''}`}"
                            type="submit"> {`${props.buttonText}`} </button>

                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;









