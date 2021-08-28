import React, {useState} from "react";
import Card from './Card'; // прописать Карточки!!!
import {CurrentUserContext} from "./CurrentUserContext";

//!*применять контексты для решения всех проблем связанных с передачей состояния*!/
//!* попробую всунуть хук «useContext». Хук «useContext» используется для создания  данных,
// к которым можно обращаться по всей иерархии компонентов и ко всем пропсам
//  до каждого уровня.
//Определенный контекст будет доступен для всех дочерних компонентов без использования props*!/


function Main(props) {
    const [userName, setuserName] = useState({});
    const [userDescription, setuserDescription] = useState({});
    const [userAvatar, setuserAvatar] = useState({});
    const currentUserContext = React.useContext(CurrentUserContext);
    /*"https://bipbap.ru/wp-content/uploads/2018/04/another-costa-rica-night-sky-includes-volcano-s1920x1278-410769-1020.jpg"*/


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

//запускается после каждой отрисовки бред полнейший
    /*    React.useEffect(() => {
            api.getUserInfo().then((userDescription) => {
                setuserDescription(userDescription) }); }, []);*/

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__person-info">
                    <div className="profile__person-infobox">
                        <img alt="Аватар того, кто его вносит" className="profile__avatar"
                             src={`${currentUserContext.avatar}`}
                             style={{backgroundImage: `url(${"https://bipbap.ru/wp-content/uploads/2018/04/another-costa-rica-night-sky-includes-volcano-s1920x1278-410769-1020.jpg"})`}}
                            /*style={{ backgroundImage: `url(${userAvatar})` }}*/
                        />
                        <div className="profile__avatar-edit-container">
                            <button className="profile__foto-edit-button" type="button"
                                    onClick={handleEditAvatarOpen}/>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-edit-button">
                            <h1 className="profile__title">{`БЕЛОСНЕЖКА`}</h1>
                            {/*       <h1 className="profile__title">{`${currentUserContext.name}`}</h1>*/}
                            <button className="profile__edit-button" type="button"
                                    onClick={handleEditProfileOpen}
                            />
                        </div>
                        <p className="profile__subtitle">{`${currentUserContext.about}`} </p>
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
                {props.cards &&
                props.cards.map(card => (<Card card={card}
                                               key={card._id}
                                               onCardClick={props.onCardClick}
                                               src={card.src}
                                               title={card.title}
                                               alt={card.alt}
                                        />
                    )
                )

                }
            </section>
        </main>
    );
}


export default Main;
