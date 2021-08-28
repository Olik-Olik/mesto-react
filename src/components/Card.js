import React from "react";

//import CurrentUserContext from "./CurrentUserContext";
function Card(props) {
    //  const currentUserContext = React.useContext(CurrentUserContext);

    function handleCardClick(evt) {
        props.onCardClick(props.card);
    }

    return (
        <div className="elements__card"
             id="template-id">
            <div className="elements__trash-image">
                <button aria-label='Удаление элемента'
                        className="elements__trash"
                        type="button"/>
                <img alt={props.alt}
                     className="elements__image" /* {props.title}*/
                     onClick={handleCardClick}
                     src={props.src} />
                <div className="elements__combine">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content*/}
                    <h2 className="elements__word">{props.title}</h2>
                    <div className="elements__container-like">
                        <button aria-label='Лайк' className="elements__like-button elements__like" type="button"/>
                        <p className="elements__like-count"/>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card;