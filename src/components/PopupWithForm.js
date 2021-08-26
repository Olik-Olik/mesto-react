import React from "react";

function PopupWithForm(props) {
    return (


        <section className={`popup popup_country popup_type_edit ${props.isOpen ? "popup_opened" : ""} `}>
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

                    <h2 className="popup__page">Редактировать</h2>

                    <label className="popup__label">
                        <input className="popup__field" id="popup-field-card-name" maxLength="30" minLength="2"
                               name="popup-input-place" placeholder="Название" required type="text" value=''/>

                        <span className="popup__input-error" id="popup-field-card-img-error"/>

                    </label>

                    {props.children}
                    <button aria-label='Кнопка Создать место'
                            className={`popup__save ${!props.buttonSubmitState} ? "" : ""`}
                            type="submit"> {`${props.buttonText}`} </button>

                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;









