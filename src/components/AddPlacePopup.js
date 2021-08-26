import React, {useEffect, useState} from "react";
import isAddPlacePopupOpen from './App';
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup( addPlace, onClose, isOpen){
        //попробуем стейты

        const [handleTitle, sethandleTitle] = useState('');
        const [handleUrlPlace,sethandleUrlPlace] = useState('');

        //общий для всех -ВЫНЕСТИ В ПОПАП С ФОРМАМИ
        function handleClose(evt) {
                if (evt.target.classList.contains('popup'))
                        onClose();
        }
        //самбит карточки
        function handleSubmit(evt) {
                evt.preventDefault();
               addPlace(       {title:handleTitle, //блин и как это место описать чтобы не undefined
                                name:handleUrlPlace})
        }
        //теперь обработчик  места и ссылки
        function handleChangeTitle(evt){
                sethandleTitle(evt.target.value)}// c вебинара  evt.target.value
        function handleChangePlace(evt){
                sethandleUrlPlace(evt.target.value)}

//можем извлекать данные или любой императивный api .Хук запускается после каждой отрисовки.Дом будет обновлен к моменту запуска эффекта.
        useEffect( {
                  title: sethandleTitle(''),
                  name:  sethandleUrlPlace('')}/*, [isOpen]*/) //проверить


return(
    <PopupWithForm
        onClose = {onClose}
        name = "popup-input-place popup-input-img "//????
        title = "Редактировать место"
        isOpen = {isOpen}
        onSubmit = {handleSubmit}
        buttonText = "Сохранить"
        >
        <section className=  {`popup popup_country popup_type_edit ${isAddPlacePopupOpen ? "popup_opened" : ""} `}>
        <button className="popup__close-button"
                aria-label='Закрыть всплывающее окошко'
                onClick= {(evt) => handleClose(evt)}
                type="button"/>
        <div className="popup__container">
        <form  className="popup__form"
               action="#"  name="resaveCountry"
               aria-label='получения инфо и передачи данных в адресной строке'
               id="popup-input-mega-id"
               method="GET"
               noValidate>

        <label className="popup__label">
        <h2 className="popup__page">Редактировать</h2>
        <input className="popup__field"
               type = "text"
               name = "popup-input-place"
               placeholder="Название"
               value={handleTitle ? handleTitle : ''}
               required
               maxLength="30" minLength="2"
               id="popup-field-card-name"
               onChange={handleChangeTitle}
        />
        </label>

        <span className="popup__input-error"
              id="popup-field-card-name-error"/>
        <label className="popup__label">

        <input className="popup__field"
               type="url"
               id="popup-field-card-img"
               name="popup-input-img"
               placeholder="Ссылка на картинку"
               required
               value={handleUrlPlace ? handleUrlPlace : ''}
               onChange={handleChangePlace}/>
        <span className="popup__input-error"
              id="popup-field-card-img-error"/>
        </label>
        <button className="popup__save"
                aria-label='Кнопка Создать место'
                onClick={(evt) => handleSubmit(evt)}
                type="submit">Создать
        </button>
        </form>
        </div>
        </section>
            </PopupWithForm>
);}
    export default AddPlacePopup;
