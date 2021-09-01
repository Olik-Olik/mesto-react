import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
// Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

    function handleCardClick(evt) {
    props.onCardClick(props.card);}

   function handleCardDelete(evt)
   {props.onCardDelete(props.card);}

    function handleCardLike(evt)
    {props.onCardLike(props.card);}

// Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        /*`card__delete-button ${props.isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`*/
        `elements__trash + { ${isOwn ? ''}
    );

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);


// Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        "elements__like-button elements__like"

    )

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="elements__card">
            {/*  id="template-id">*/}
            <div className="elements__trash-image">
                <button aria-label='Удаление элемента'
                       // className="elements__trash"
                        type="button"
                         onClick={handleCardDelete}
                         className={cardDeleteButtonClassName} />

                <img alt={props.alt}
                     className="elements__image" /* {props.title}*/
                     onClick={handleCardClick}
                     src={props.src}/>
                <div className="elements__combine">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content*/}
                    <h2 className="elements__word">{props.title}</h2>
                    <div className="elements__container-like">
                        <button
                            //className="elements__like-button elements__like"
                            className={cardLikeButtonClassName}
                                aria-label='Лайк'
                                type="button"
                                onClick={handleCardLike}
                        />
                        <p className="elements__like-count">{props.card.likes.length}</p>
                    </div>

                </div>
            </div>
        </div>
        </CurrentUserContext.Provider>

    )
}

export default Card;