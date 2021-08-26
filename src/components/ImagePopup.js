import React from "react";
//не имеет пропсов и вложенного содержимого.
function ImagePopup({props}){
    return (
    <div className = {`popup ${props.card.src && "popup_open"} popup_type_image`}>
     <div className="popup__combine-image">
         <div>
            <div style="alignment: right">
            <button type="button"
            onClick={props.onClose}
            aria-label='Закрыть'
            className="popup__close-button popup__close-button-no-rel"  />
            </div>
               <div className="popup__combine-word">
               <div className =  "popup__container-image" >
               <img className="popup__image"
                    alt="Большая картинка"

                     />
               <h2 className="popup__image-word" />
              </div>
              </div>
           </div>
         </div>
     </div>
      );
      }
export default ImagePopup;