import React from "react";
//не имеет пропсов и вложенного содержимого.
function ImagePopup({card, onClose}){
    return (
    <div className = {`popup popup_type_image ${card.src && "popup_open"}`}>
     <div className="popup__combine-image">
         <div>
             {/*<div style="alignment: right">*/}
            <button type="button" onClick={onClose} aria-label='Закрыть' className="popup__close-button popup__close-button-no-rel"  />
         </div>
              <div className="popup__combine-word">
                  <div className =  "popup__container-image" >
                  <img alt="Большая картинка" className="popup__image" />
                  <h2 className="popup__image-word" />
              </div>
           </div>
         </div>
     </div>
      );
      }
export default ImagePopup;