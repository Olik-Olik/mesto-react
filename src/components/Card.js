import React from "react";
//import CurrentUserContext from "./CurrentUserContext";
import App from "./App";
import api from "../utils/Api";
function Card(props) {
  //  const currentUserContext = React.useContext(CurrentUserContext);

    function handleCardClick() {
      /*  props.setSelectedCard(this.props.card);}*/
        props.onCardClick(props.card)
    }

    return (

        <div className="elements__card" id="template-id">
            <div className="elements__trash-image">
                <button aria-label='Удаление элемента' className="elements__trash" type="button"/>

                    <img alt="Картинка" className="elements__image"  onClick={props.setSelectedCard} src={props.card.src} />
                    <div className="elements__combine">
                        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                        <h2 className="elements__word" />
                    <div className="elements__container-like">
                        <button aria-label='Лайк' className="elements__like-button elements__like" type="button"/>
                        <p className="elements__like-count"/>
                    </div>

            </div>
        </div>
</div>


)
    ;
}

export default Card;