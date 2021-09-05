import React, {useEffect, useState,} from "react";
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

export default function App(props) {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isConfirmDeletePopup, setIsConfirmDeletePopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    /* const isOwn = props.card.owner._id === currentUser._id;*/
    const [userAvatar, setUserAvatar] = useState({});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});//Стейт переменная используется
    // как значение провайдера контекста
    //Провайдер контекст транслирует дочерним компонентам это значение.


//card
    function getCards() {
        api.getInitialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((err) => {
                console.log('MAMA, КАРТОЧКИ не  получены!!!: ' + err.toString())
            })
    }
//card
     useEffect(() => api.getInitialCards()
            .then((res) => {
                setCards(res)
            }), []);

//user
    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setCurrentUser(data);
//                userInfo = data;
            })
            .catch((err) => {
                console.log('MAMA, Аватарчик не  получен!!!: ' + err.toString())
            })
    }, [])

//like
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setSelectedCard((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        })
    }

    const handleImagePopupOpen = (evt) => {
        console.log("handleImagePopupOpen")
        props.setisImagePopup(true)
    }


    function changeLikeCardStatus(card) {

    }


///avatar
    function handleEditAvatarClick(evt) {
        console.log("I'm a walrus!!! Обработчик авы")
        setIsEditAvatarPopupOpen(true);
    }


//дописать   .catch


//profile
    function handleEditProfileClick(evt) {
        console.log("I'm a walrus 2!!!")
        setIsEditProfilePopupOpen(true);
    }

    function handleEditProfileSubmit(item) {
        console.log("I'm a walrus 6!!!")
/*        const newDataUser = currentUser.value
        newDataUser.name = item.name
        newDataUser.about = item.about
        api.getUserInfo(newDataUser)
            .then((res) => setCurrentUser(newDataUser))
            .catch((err) => {
                console.log('MAMA, like не  получены!!!: ' + err.toString())
            })*/
        closeAllPopups();
    }

    function handleEditAvatarSubmit(evt) {
        console.log("I'm a walrus 5!!!")
        closeAllPopups();
    }

///////place
    function handleAddPlaceClick(evt) {
        console.log("I'm a walrus 3!!!")
        setIsAddPlacePopupOpen(true);
    }

    function handleAddPlaceSubmit(newCard) {
        api.submitNewCard(newCard)
            .then(data => {
                setCards([data, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log('MAMA, место не добавлено!!!: ' + err.toString())
            })

    }


    function handleCardClick(card) {
        console.log("I'm a walrus 4!!!")
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    //delete card
    function handleCardDeleteClick(card) {
        console.log("Any interesting - delete");
        const isOwn = props.card.owner._id === currentUser._id; //////////own
        api.getInitialCards(card)
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


    /*   function handleDeleteConfirm() {
           setIsConfirmDeletePopup(true)
           closeAllPopups()
       }*/

    return (

        <>
            <Header/>
            <CurrentUserContext.Provider value={currentUser}>
                <Main
                    //вообще тут нужны обработчики handle.....
                    cards={cards}
                    onCardClick={handleCardClick}

                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}

                    onCardDelete={handleCardDeleteClick} // описать
                    onCardLike={handleCardLike}

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

                    setisImagePopup={(evt) =>
                        handleCardClick(evt)
                    }
                />
                {isEditAvatarPopupOpen && <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onSubmit={handleEditAvatarSubmit}
                    buttonText="Cохранить"/>}

                {isEditProfilePopupOpen && <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    buttonText="Сохранить"
                    onSubmit={handleEditProfileSubmit}
                />}
                {isAddPlacePopupOpen && <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlacePopup={handleAddPlaceSubmit}
                    buttonText="Добавить"/>}

                <ConfirmDeletePopup
                    isOpen={isConfirmDeletePopup}
                    onClose={closeAllPopups}
                    buttonText="Да"/>
                {isImagePopupOpen && <ImagePopup
                    isOpen={isImagePopupOpen}
                    card={selectedCard}
                    onClose={closeAllPopups}
                />}
            </CurrentUserContext.Provider>
            <Footer/>

        </>
    );
}


/*      function handleSubmitProfileClick{(evt) =>
      evt.preventDefault()
      props.addProfile({title:handleName,
                        name:handleJob})
  }*/