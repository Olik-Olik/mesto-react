import React from "react";
function Card({props}) {
    return(
    //разметку верну
    <div className="elements__card" id="template-id">
       {/* <div class="elements__trash-image">
        <button aria-label='Удаление элемента' class="elements__trash" type="button"></button>*/}
    <img alt="Картинка" className="elements__image" />
    <div className="elements__combine">
        <h2 className="elements__word" />
     {/*   <div className="elements__container-like">
            <button aria-label='Лайк' class="elements__like-button elements__like" type="button"></button>
            <p class="elements__like-count"></p>*/}
        </div>
    </div>
    );
    function handleCardClick(){
        props.onCardClick(props.card)}
}
export default Card;