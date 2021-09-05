import React, {useContext, useEffect, useState} from "react";
import Card from './Card';
import api from "../utils/Api";
import '../index.css';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = useContext(CurrentUserContext);
 //   const [cards, setCards] = useState([]);



    /*   function handleCardLike(card) {
           // Снова проверяем, есть ли уже лайк на этой карточке
           const isLiked = card.likes.some(i => i._id === currentUser._id);

           // Отправляем запрос в API и получаем обновлённые данные карточки
           api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
               setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
           });
       }
   */
    //avatar
    const handleEditAvatarOpen = (evt) => {
        console.log("I'm a superstar 1!!!")
        props.setisEditAvatarPopupOpen(true)
    }
    //profile
    const handleEditProfileOpen = (evt) => {
        console.log("I'm a superstar 2!!!")
        props.setisEditProfilePopupOpen(true)
    }
    //place
    const handleAddPlaceOpen = (evt) => {
        console.log("I'm a superstar 3!!!")
        props.setisAddPlacePopupOpen(true)
    }


    return (
        <main className="container">
            <section className="profile">
                <div className="profile__person-info">
                    <div className="profile__person-infobox">
                        <img alt="Аватар того, кто его вносит" className="profile__avatar"
                             src={currentUser.avatar}
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

            </section>
            <section className="elements">
                {props.cards &&
                props.cards.map(card => (
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

    );
}

export default Main;


/*     function getUserInfoPromise() {
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
             currentUser(userInfo);// Юзер с контекстом.
              console.log('Got cards!');
              setCards(initialCards);
          })
              .catch((err) => {
                  console.log('MAMA!!!: ' + err.toString())
              });
      }

      React.useEffect(fetchInitData, []);

const handleDeleteConfirmOpen = (evt) => {
    console.log("handleConfirmDeletePopup")
    props.setisEditProfilePopupOpen(true)*/
