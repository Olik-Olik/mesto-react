import React from "react";
//пропсы title и name
//className={`popup popup_type_${props.name}`}  Замечание 1.
function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
        <div className={`popup ${props.isOpen ? "popup_opened" : ""} `}>
            <button aria-label='Закрыть'
                    className="popup__close-button"
                    type="button"
                    onClick={props.onClose}/>
            <div className="popup__container popup__form">
                <form action="#" aria-label='получения инфо и передаче данных в адресной строке'
                     // Значение пропса name будет использоваться туточки тоже
                      className="popup__form"
                      id="popup-input-mega-id"
                      method="GET"
                      name="resaveCountry"
                      noValidate
                      onSubmit={props.onSubmit} />
                {props.children}
                <button aria-label='Кнопка Создать место'
                        className={`popup__save ${!props.buttonSubmitState} ? "" : ""`}
                        type="submit"> {`${props.buttonText}`} </button>

            </div>
        </div>
        </section>
    );
}

export default PopupWithForm;
