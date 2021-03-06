import React, {useContext} from "react";
import Card from './Card';
import '../index.css';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = useContext(CurrentUserContext);

    //avatar
    const handleEditAvatarOpen = (evt) => {
        console.log("I'm a superstar 1!!!")
        props.setIsEditAvatarPopupOpen(true)
    }
    //profile
    const handleEditProfileOpen = (evt) => {
        console.log("I'm a superstar 2!!!")
        props.setIsEditProfilePopupOpen(true)
    }
    //place
    const handleAddPlaceOpen = (evt) => {
        console.log("I'm a superstar 3!!!")
        props.setIsAddPlacePopupOpen(true)
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
