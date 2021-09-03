import React, {useEffect, useContext, useState,} from "react";
import '../index.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import * as url from "url";

export default function App(props) {

    const currentUser1 = useContext(CurrentUserContext);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isConfirmDeletePopup, setIsConfirmDeletePopup] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [selectedCard, setSelectedCard] = useState({});
    /* const isOwn = props.card.owner._id === currentUser1._id;*/
    const [userAvatar, setUserAvatar] = useState({});
    const [cards, setCards] = useState([]);


//card
    function getCards() {
        api.getInitialCards()
            .then((res) => {
                setSelectedCard(res)
            })
            .catch((err) => {
                console.log('MAMA, КАРТОЧКИ не  получены!!!: ' + err.toString())

            })
    }
//user
    useEffect(() => {
        api.getUserInfo()
            .then(res => setCurrentUser(res))
            .catch((err) => {
                console.log('MAMA, Аватарчик не  получен!!!: ' + err.toString())
            })
    }, [])
//like
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser1._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setSelectedCard((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }
    //дописать   .catch
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser1._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }



///avatar
    function handleEditAvatarClick(evt) {
        console.log("I'm a walrus!!! Обработчик авы")
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditAvatar() { /// подумать
        const editAvatar = currentUser1.avatar.url
        api.setUserAvatar()
            .then(url => {
                setCurrentUser(currentUser);
            })
        closeAllPopups()
    } //дописать   .catch




//profile
    function handleEditProfileClick(evt) {
        console.log("I'm a walrus 2!!!")
        setIsEditProfilePopupOpen(true);
    }
    function handleEditProfile(item) {
        const newDataUser = currentUser1.value
        newDataUser.name = item.name
        newDataUser.about = item.about
        api.getUserInfo(newDataUser)
       .then((res) => setCurrentUser(newDataUser))
        closeAllPopups();
    }
    //.catch



///////place
    function handleAddPlaceClick(evt) {
        console.log("I'm a walrus 3!!!")
        setIsAddPlacePopupOpen(true);
    }
    function handleAddPlace(){
        api.addCard()
            .then((res)=>{api.getInitialCards()
                .then((res)=>setSelectedCard(res))})
        closeAllPopups();
    }
    //.catch


    function handleCardClick(card) {
        console.log("I'm a walrus 4!!!")
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    //delete card
    function handleDeleteClick(card) {
        console.log("Any interesting - delete");
        const isOwn = props.card.owner._id === currentUser1._id;
        api.getInitialCards()
            .then(res => {
                setSelectedCard(res)
                if (isOwn) {
                    api.submitRemoveCard(props.card._id);
                }
            })
    }

    /* function handleConfirmDeletePopup(evt) {
         console.log("I'm a walrus handleConfirmDeletePopup!!!")
         setIsConfirmDeletePopup(true);
     }*/

    function closeAllPopups() {
        console.log("I was so close...")
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        setIsConfirmDeletePopup(false);
    }

    /*    //пока удаление не нужно
        function handleDeleteConfirm(){
            setIsConfirmDeletePopup(true)
            closeAllPopups()
        }*/





    return (
        <CurrentUserContext.Provider value={currentUser}>
        <>
            <Header/>
            <Main
                onCardClick={handleCardClick}
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

         /*       setisConfirmDeletePopup={(evt) =>
                    handleConfirmDeletePopup(evt)
                }*/

                setisImagePopup={(evt) =>
                    handleCardClick(evt)
                }

          /*      function handleSubmitProfileClick{(evt) =>
                evt.preventDefault()
                props.addProfile({title:handleName,
                                  name:handleJob})
            }*/
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
               /* onSubmit={handleSubmitAvatar}*/
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
            //    onAddPlacePopup ={ } !!!! добавить
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
        </CurrentUserContext.Provider>

    );
}