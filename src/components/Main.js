import React, {useState} from "react";
import Card from './Card';
import api from "../utils/Api";
//import  {useEffect} from "react";
import '../index.css';

import {CurrentUserContext} from '../contexts/CurrentUserContext';


//!*применять контексты для решения всех проблем связанных с передачей состояния*!/
//!* попробую всунуть хук «useContext». Хук «useContext» используется для создания  данных,
// к которым можно обращаться по всей иерархии компонентов и ко всем пропсам
//  до каждого уровня.
//Определенный контекст будет доступен для всех дочерних компонентов без использования props*!/


function Main(props) {
//Имеем функц.компонент и подписываем его на контекст
 const currentUser1 = React.useContext(CurrentUserContext);

  /*  const [userName, setuserName] = useState({});
    const [userDescription, setuserDescription] = useState({});
    const [userAvatar, setuserAvatar] = useState({});*/

    const [cards, setCards] = React.useState([]);
   const [currentUser, setCurrentUser] = React.useState({});

  function getCardsPromise() {
        return api.getInitialCards();
    }

      function getUserInfoPromise() {
        return api.getUserInfo();
    }

    function fetchInitData() {
        Promise.all([getUserInfoPromise(), getCardsPromise()]).then((values) => {
            const initialCards = values[1];
            const userProfileInfo = values[0];
            const userInfo = {
                'name': userProfileInfo.name,
                'about': userProfileInfo.about,
                'avatar': userProfileInfo.avatar,
                'id': userProfileInfo._id
            }
      //меняю .user ---- карточки не вываливаются, что логично
          setCurrentUser(userInfo);
           currentUser1(userInfo);
            console.log('Got cards!');
            setCards(initialCards);
        })
            .catch((err) => {
                console.log('MAMA!!!: ' + err.toString())
            });
    }

    React.useEffect(fetchInitData, []);


    const handleEditAvatarOpen = (evt) => {
        console.log("I'm a superstar 1!!!")
        props.setisEditAvatarPopupOpen(true)
    }
    const handleEditProfileOpen = (evt) => {
        console.log("I'm a superstar 2!!!")
        props.setisEditProfilePopupOpen(true)
    }

    const handleAddPlaceOpen = (evt) => {
        console.log("I'm a superstar 3!!!")
        props.setisAddPlacePopupOpen(true)
    }

    const handleDeleteConfirmOpen = (evt) => {
        console.log("handleConfirmDeletePopup")
        props.setisEditProfilePopupOpen(true)
    }

    const handleImagePopupOpen = (evt) => {
        console.log("handleImagePopupOpen")
        props.setisImagePopup(true)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <main className="container">
            <section className="profile">
                <div className="profile__person-info">
                    <div className="profile__person-infobox">
                        <img alt="Аватар того, кто его вносит" className="profile__avatar"
                             src={currentUser.avatar}
                            //в ТЗ сказано установить именно так, хотя src лучше
                            /*            style={{ backgroundImage: `url(${userAvatar})` }}*/

                        />
                        <div className="profile__avatar-edit-container">
                            <button className="profile__foto-edit-button" type="button"
                                    onClick={handleEditAvatarOpen}/>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-edit-button">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button"
                                    onClick={handleEditProfileOpen}
                            />
                        </div>
                        <p className="profile__subtitle">{currentUser.about} </p>
                    </div>
                </div>
                <div className="profile__button-container">
                    <button className="profile__add-button" type="button"
                            onClick={handleAddPlaceOpen}/>
                </div>
                {/*<div className="popup__container-delete-confirm">
                    <form action="#" aria-label='Вы уверены, что хотите удалить карточку?' className="popup__form"
                          id="popup-delete-card" name="deleteConfirmCard" noValidate>
                        <label className="popup__label"><h2 className="popup__page">Вы уверены?</h2></label>
                        <button aria-label='Кнопка уверенности в закрытии' className="popup__save" type="submit">Да
                        </button>
                    </form>
                </div>*/}
            </section>
            {/*Для этого его нужно «пробросить» в компонент Card сквозь компонент Main —
в виде пропса onCardClick.*/}
            <section className="elements">
                {cards &&
                cards.map(card => (
                    <Card card={card}
                          key={card._id}
                          src={card.link}
                          title={card.name}
                          alt={card.name}

                          onCardClick={props.onCardClick}
                          onCardDelete={props.onCardDelete}
                          onCardLike={props.onCardLike}

                    />)
                )
                }
            </section>
        </main>
        </CurrentUserContext.Provider>
    );
}


export default Main;
