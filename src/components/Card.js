import React from "react";

//import CurrentUserContext from "./CurrentUserContext";
function Card(props) {
    //  const currentUserContext = React.useContext(CurrentUserContext);

    function handleCardClick(evt) {
        props.setSelectedCard(props.card);
    }

    /* props.onCardClick(props.card)*/
    /*    src='{props.card.src}'*/
    return (
        <div className="elements__card"
             id="template-id">
{/*
            {props.description}
            {props.children}
*/}
            {/* {props.cards.map(card => (<Card card = {card}
                                     Key = {card._id}
                                     onCardClick = {props.onCardClick}
                                     src = {card.src}
                                     title={card.title}
                                     alt={card.alt}/>))}*/}

            <div className="elements__trash-image">
                <button aria-label='Удаление элемента'
                        className="elements__trash"
                        type="button"/>
                <img alt="Картинка"
                     className="elements__image" /* {props.title}*/
                     onClick={handleCardClick}
                     src={props.src} />
                <div className="elements__combine">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content*/}
                    <h2 className="elements__word"/>
                    <div className="elements__container-like">
                        <button aria-label='Ла йк' className="elements__like-button elements__like" type="button"/>
                        <p className="elements__like-count"/>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card;