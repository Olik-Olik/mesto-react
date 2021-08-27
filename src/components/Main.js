import React, {useEffect} from "react";
import Card from './Card';// прописать Карточки!!!
import {CurrentUserContext} from "./CurrentUserContext";

//!*применять контексты для решения всех проблем связанных с передачей состояния*!/
//!* попробую всунуть хук «useContext». Хук «useContext» используется для создания  данных,
// к которым можно обращаться по всей иерархии компонентов и ко всем пропсам
//  до каждого уровня.
//Определенный контекст будет доступен для всех дочерних компонентов без использования props*!/

function Main(props)
 {
      const currentUserContext = React.useContext(CurrentUserContext);

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
//запускается после каждой отрисовки
  /*        useEffect(() => {
              props.getData()}, [])
*/
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
                                 onClick={handleEditAvatarOpen}/>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-edit-button">
                            <h1 className="profile__title">{`${currentUserContext.name}`}</h1>
                            <button className="profile__edit-button" type="button"
                                     onClick={handleEditProfileOpen}
                            />
                        </div>
                        <p className="profile__subtitle">{`${currentUserContext.about}`} </p>
                    </div>
                </div>
                <div className="profile__button-container">
                    <button className="profile__add-button" type="button"
/*                          onClick={props.isAddPlacePopupOpen}*/
                            onClick={handleAddPlaceOpen}
                    />
                </div>
            </section>
{/*Для этого его нужно «пробросить» в компонент Card сквозь компонент Main —
в виде пропса onCardClick.*/}
            <section className="elements">
                { props.cards &&
                 props.cards.map(card => (<Card card = {card}
                                             Key = {card._id}
                                             onCardClick = {props.onCardClick} />
                                    )
                            )

                }
            </section>
        </main>
    );}


export default Main;
