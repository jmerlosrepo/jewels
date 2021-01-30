import React, {Component} from 'react';

class ImageModal extends Component{
    
    render(){
        const {visible, image, onCloseModal} = this.props;
        
        let isVisible = visible ? 'modalContainer' : 'modalContainer hiddenModal';

        return(
            <div className={isVisible}>
                <div className="modalBody">
                    <button onClick={onCloseModal}>X</button>
                    <img src={image} alt="logo"/>
                </div>
            </div>
        );
    }
}

export default ImageModal;
