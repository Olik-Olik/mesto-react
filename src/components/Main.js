import React from "react";

//import '../index.css';
import Card from 'Card';// прописать Карточки!!!
import {CurrentUserContext} from "./CurrentUserContext";
//!*применять контексты для решения всех проблем связанных с передачей состояния*!/
//!* попробую всунуть хук «useContext». Хук «useContext» используется для создания  данных,
// к которым можно обращаться по всей иерархии компонентов и ко всем пропсам
//  до каждого уровня.
//Определенный контекст будет доступен для всех дочерних компонентов без использования props*!/
function Main({

                  handleEditAvatarClick,
                  handleEditProfileClick,
                  handleAddPlaceClick,

                  isEditAvatarPopupOpen,
                  isEditProfilePopupOpen,
                  isAddPlacePopupOpen,

    //inside my Card
                  cards,
                  onCardClick,

              }
) {
      const currentUserContext = React.useContext(CurrentUserContext);
    return (
        <main className="container">
            <section className="profile">
                <div className="profile__person-info">
                    <div className="profile__person-infobox">
                        <img alt="Аватар того, кто его вносит" className="profile__avatar"
                             src ={`${currentUserContext.avatar}`}
                        />
                        <div className="profile__avatar-edit-container">
                            <button className="profile__foto-edit-button" type="button"
                                 onClick={ isEditAvatarPopupOpen}/>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-edit-button">
                            <h1 className="profile__title">{`${currentUserContext.name}`}</h1>
                            <button className="profile__edit-button" type="button"
                                     onClick= {isEditProfilePopupOpen}
                            />
                        </div>
                        <p className="profile__subtitle">{`${currentUserContext.about}`} </p>
                    </div>
                </div>
                <div className="profile__button-container">
                    <button className="profile__add-button" type="button"
                          onClick={`${isAddPlacePopupOpen}`}
                    />
                </div>
            </section>
//Для этого его нужно «пробросить» в компонент Card сквозь компонент Main — в виде пропса onCardClick.
            <section className="elements">
                 {cards.map(card => (<Card   card = {card}
                                             Key = {card._id}
                                             onCardClick = {onCardClick} />
                                    )
                            )
                }  }
            </section>
        </main>
    );
}

export default Main;
