import React from "react";
import '../index.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

export default function App() {

    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    /*  const [isConfirmDeletePopup, setConfirmDeletePopup] = React.useState(false);*/
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState('');
    const [selectedCard, setSelectedCard] = React.useState({});

    /*Импортируйте модуль api и добавьте эффект, вызываемый при монтировании компонента,
     который будет совершать запрос в API за пользовательскими данными.
     После получения ответа задавайте полученные данные в соответствующие переменные состояния.*/

    /*
        useEffect(() => {
            api.getUserInfo().then((userInfo) => {
                setCurrentUser(userInfo)
            });
        }, []);
    */


    function handleEditAvatarClick(evt) {
        console.log("I'm a walrus!!!")
        setisEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick(evt) {
        console.log("I'm a walrus 2!!!")
        setisEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick(evt) {
        console.log("I'm a walrus 3!!!")
        setisAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        console.log("I'm a walrus 4!!!")
        setSelectedCard(card);
    }

    /*
           function handleConfirmDeletePopup(evt){
           isConfirmDeletePopup(true);}*/

    function closeAllPopups() {
        console.log("I was so close...")
        setisEditAvatarPopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        /*setSelectedCard(undefined);*/
    }

    /**/
    /*
        React.useEffect(() => {
            api.getUserInfo().then((userInfo) => {
                setCurrentUser(userInfo)
            });
        }, []);
    */

    return (
        <>
            <body className="root">
            <Header/>
            <Main
                setisEditAvatarPopupOpen={(evt) => {
                    console.log("I'm a superstar avatar!!!")
                    handleEditAvatarClick(evt)
                }}
                setisEditProfilePopupOpen={(evt) => {
                    console.log("I'm a superstar too!!!")
                    handleEditProfileClick(evt)
                }}
                setisAddPlacePopupOpen={(evt) => {
                    console.log("I'm a superstar too too!!!")
                    handleAddPlaceClick(evt)
                }}
                /*   cards={cards}}*/

                //вообще нужно
                /* isConfirmDeletePopup={(evt) =>
                     handleConfirmDeletePopup(evt)
                 }*/

            />


{/*
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText="Cохранить"/>
*/}

            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
/*                addProfile =*/
            />

{/*
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText="Добавить"/>
*/}

            {/* из 4 ех  попапов общая разметка */}
            {/*<PopupWithForm
                isOpen={false}
                onClose={closeAllPopups}
                buttonText="Да"/>*/}

            {/*Показывайте полноразмерную картинку при клике*/}
{/*
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}/>
*/}


            {/*           <section  className={`popup popup_type_edit-avatar popup_type_edit ${isEditAvatarPopupOpen ? "popup_opened" : ""} `} >
                <div className="popup__container">
                    <button aria-label='Закрыть всплывающее окошко'
                            className="popup__close-button"
                            name="popup__close-button" type="button"/>
                    <form action="#"
                          aria-label='смена аватарки'
                          className="popup__form"
                          id="popup-mega-id-avatar"
                          method="POST"
                          name="resaveProfileAvatar"
                          noValidate/>
                    <h2 className="popup__page">Обновить аватар</h2>
                    <label className="popup__label">
                        <input className="popup__field popup__avatar-link"
                               id="popup-avatar-link"
                               name="input-avatar"
                               placeholder="Ссылка на новую аватарку"
                               required
                               type="url"
                               value=''/>
                        <span className="popup__input-error" id="popup-avatar-link-error"/>
                    </label>
                    <button aria-label='Кнопка сохраняем аватарку'
                            className="popup__save"
                            type="submit">Сохранение...
                    </button>
                </div>
            </section>*/}
            {/*<section className={`popup popup_type_edit ${isEditProfilePopupOpen ? "popup_opened" : ""} `}>
            <button aria-label='Закрыть всплывающее окошко' className="popup__close-button" type="button"/>
                <div className="popup__container">
                    <form action="#" aria-label='получения инфо и передачи данных' className="popup__form"
                          id="popup-mega-id" method="GET" name="resaveProfile" noValidate>
                        <h2 className="popup__page">Редактировать профиль</h2>
                        <label className="popup__label">
                            <input className="popup__field" id="popup-field-name" maxLength="40" minLength="2"
                                   name="inputForm_name" placeholder="Ваше имя" required type="text"
                                   value='Жак-Ив Кусто'/>
                            <span className="popup__input-error" id="popup-field-name-error"/>
                        </label>
                        <label className="popup__label">
                            <input className="popup__field" id="popup-field-job" maxLength="200" minLength="2"
                                   name="inputForm_job" placeholder="Род занятия" required type="text"
                                   value='Исследователь океана'/>
                            <span className="popup__input-error" id="popup-field-job-error"/>
                        </label>
                        <button aria-label='Кнопка Сохранить' className="popup__save" type="submit">Сохранить</button>
                    </form>
                </div>
            </section>
*/}

            {/*            <section className=  {`popup popup_country popup_type_edit ${isAddPlacePopupOpen ? "popup_opened" : ""} `}>
                <button aria-label='Закрыть всплывающее окошко' className="popup__close-button" type="button"/>
                <div className="popup__container">
                    <form action="#" aria-label='получения инфо и передачи данных в адресной строке'
                          className="popup__form" id="popup-input-mega-id" method="GET" name="resaveCountry" noValidate>
                        <label className="popup__label">
                            <h2 className="popup__page">Редактировать</h2>
                            <input className="popup__field" id="popup-field-card-name" maxLength="30" minLength="2"
                                   name="popup-input-place" placeholder="Название" required type="text" value=''/>
                            <span className="popup__input-error" id="popup-field-card-name-error"/>
                        </label>
                        <label className="popup__label">
                            <input className="popup__field" id="popup-field-card-img" name="popup-input-img"
                                   placeholder="Ссылка на картинку" required type="url" value=''/>
                            <span className="popup__input-error" id="popup-field-card-img-error"/>
                        </label>
                        <button aria-label='Кнопка Создать место' className="popup__save" type="submit">Создать
                        </button>
                    </form>
                </div>
            </section>*/}

            {/*
            <section className= {`popup popup_type_image popup_type_edit ${isConfirmDeletePopup ? "popup_opened" : ""} `}>
                <div className="popup__combine-image">
                 <div style={{alignment: right}}>
                    <div>
                        <button aria-label='Закрыть всплывающее окошко'
                                className="popup__close-button popup__close-button-no-rel" type="button"/>
                    </div>
                    <div className="popup__combine-word">
                        <div className="popup__container-image"/>
                        <img alt="Большая картинка" className="popup__image"/> <h2 className="popup__image-word"/>
                    </div>
                    </div>
            </div>
            </section>*/}


            <Footer/>
            {/*<section  className= {`popup popup_delete-confirm  popup_type_edit ${isEditProfilePopupOpen ? "popup_opened" : ""} `}>
                <button aria-label='Закрыть всплывающее окошко' className="popup__close-button" type="button"/>
                <div className="popup__container-delete-confirm">
                    <form action="#" aria-label='Вы уверены, что хотите удалить карточку?' className="popup__form"
                          id="popup-delete-card" name="deleteConfirmCard" noValidate>
                        <label className="popup__label"><h2 className="popup__page">Вы уверены?</h2></label>
                        <button aria-label='Кнопка уверенности в закрытии' className="popup__save" type="submit">Да
                        </button>
                    </form>
                </div>
            </section>*/}

{/*
            <template className="item-template">
                <div className="elements__card" id="template-id">
                    <div className="elements__trash-image">
                        <button aria-label='Удаление элемента' className="elements__trash" type="button"/>
                        <img alt="Картинка" className="elements__image"/>
                    </div>
                    <div className="elements__combine">
                         eslint-disable-next-line jsx-a11y/heading-has-content
                        <h2 className="elements__word"/>
                        <div className="elements__container-like">
                            <button aria-label='Лайк' className="elements__like-button elements__like" type="button"/>
                            <p className="elements__like-count"/>
                        </div>
                    </div>
                </div>
            </template>
*/}
            </body>

        </>

    );
}
