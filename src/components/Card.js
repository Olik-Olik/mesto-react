import React from "react";
import {CurrentUserContext} from "./CurrentUserContext";

function Card(props) {
const currentUserContext =React.useContext(CurrentUserContext);

    function handleCardClick(){
        props.onCardClick(props.card)}
    return (
        //разметку верну
        <div className="elements__card" id="template-id">
             <div className="elements__trash-image">
            <button aria-label='Удаление элемента' className="elements__trash" type="button" />
            <img alt="Картинка" className="elements__image"/>
            <div className="elements__combine">
            <h2 className="elements__word"/>
                <div className="elements__container-like">
            <button aria-label='Лайк' className="elements__like-button elements__like" type="button" />
            <p className="elements__like-count" />
            </div>
        </div>
         </div>
        </div>
    );}

export default Card;