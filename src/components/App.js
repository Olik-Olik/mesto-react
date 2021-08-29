import React from "react";
import '../index.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import ImagePopup from "./ImagePopup";
//import {useState, useEffect} from "react";

export default function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    /*  const [isConfirmDeletePopup, setIsConfirmDeletePopup] = React.useState(false);*/
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isConfirmDeletePopup, setIsConfirmDeletePopup] = React.useState(false);

    /*function getCardsPromise() {
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
            setCurrentUser(userInfo);
            console.log('Got cards!');
            setCards(initialCards);
        })
            .catch((err) => {
                console.log('MAMA!!!: ' + err.toString())
            });
    }

    useEffect(fetchInitData, []);
*/
    function handleEditAvatarClick(evt) {
        console.log("I'm a walrus!!!")
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick(evt) {
        console.log("I'm a walrus 2!!!")
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick(evt) {
        console.log("I'm a walrus 3!!!")
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        console.log("I'm a walrus 4!!!")
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    function handleConfirmDeletePopup(evt) {
        console.log("I'm a walrus handleConfirmDeletePopup!!!")
        setIsConfirmDeletePopup(true);
    }

    function closeAllPopups() {
        console.log("I was so close...")
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        /*        setIsConfirmDeletePopup(false);*/
    }

    /*    //пока удаление не нужно
        function handleDeleteConfirm(){
            setIsConfirmDeletePopup(true)
            closeAllPopups()
        }*/

    return (
        <>
            <Header/>
            <Main
              /*  currentUser={currentUser}
                cards={cards}*/
                onCardClick={handleCardClick}
                setisEditAvatarPopupOpen={(evt) => {
                    console.log("I'm a superstar avatar!!!")
                    handleEditAvatarClick(evt)
                    /*  isEditAvatarPopupOpen = {isEditAvatarPopupOpen}*/
                }}

                setisEditProfilePopupOpen={(evt) => {
                    console.log("I'm a superstar too!!!")
                    handleEditProfileClick(evt)
                }}

                setisAddPlacePopupOpen={(evt) => {
                    console.log("I'm a superstar too too!!!")
                    handleAddPlaceClick(evt)
                }}

                setisConfirmDeletePopup={(evt) =>
                    handleConfirmDeletePopup(evt)
                }

                setisImagePopup={(evt) =>
                    handleCardClick(evt)
                }

                /*function handleSubmitProfileClick{(evt) =>
                evt.preventDefault()
                props.addProfile({title:handleName,
                                  name:handleJob})
            }*/
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                /*         onSubmit={handleSubmitAvatar}*/
                buttonText="Cохранить"/>

            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
                /*    isSubmit ={handleSubmitProfileClick}*/
                /*     addProfile =*/
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText="Добавить"/>

            <ConfirmDeletePopup
                isOpen={isConfirmDeletePopup}
                onClose={closeAllPopups}
                buttonText="Да"/>
            {/*    isRemove={handleRemoveClick}
             isSubmit={handleSubmitConfirmClick}*/}

            <ImagePopup
                isOpen={isImagePopupOpen}
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <Footer/>

        </>

    );
}