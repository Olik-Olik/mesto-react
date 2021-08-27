import React from "react";
import '../index.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";

export default function App() {

    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    /*  const [isConfirmDeletePopup, setConfirmDeletePopup] = React.useState(false);*/
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState('');
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isConfirmDeletePopup, setisConfirmDeletePopup] = React.useState(false);

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

     function handleConfirmDeletePopup(evt){
         console.log("I'm a walrus handleConfirmDeletePopup!!!")
         setisConfirmDeletePopup(true);}

    function closeAllPopups() {
        console.log("I was so close...")
        setisEditAvatarPopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
       /* setisImagePopupOpen(false);*/
        setisConfirmDeletePopup(false);
    }

/*    //пока удаление не нужно
    function handleDeleteConfirm(){
        setisConfirmDeletePopup(true)
        closeAllPopups()
    }*/

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
                /*   cards={cards}}*/

                 setisConfirmDeletePopup={(evt) =>
                 handleConfirmDeletePopup(evt)
                 }

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
/*              isSubmit ={handleSubmitProfileClick}
  addProfile =*/
            />
          <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText="Добавить"  />


            {/*<PopupWithForm
                isOpen={false}
                onClose={closeAllPopups}
                buttonText="Да"/>*/}

            <ConfirmDeletePopup
             isOpen={isConfirmDeletePopup}
             onClose={closeAllPopups}
             buttonText="Да" />
            { /*  isRemove={handleRemoveClick}
             isSubmit={handleSubmitConfirmClick}*/}



       {/*     <ImagePopup
            isOpen={isImagePopupOpen}
                card={selectedCard}
                onClose={closeAllPopups}
                />
*/}
            <Footer/>
            </body>

        </>

    );
}
