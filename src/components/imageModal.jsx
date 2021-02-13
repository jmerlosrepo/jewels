import React, {Component} from 'react';

class ImageModal extends Component{
    
    render(){
        const {visible, image, onCloseModal} = this.props;
        
        let isVisible = visible ? 'modalContainer' : 'modalContainer hidden';

        return(
            <div className={isVisible}>
                <div className="modalBody">
                    <button className="modalBtn" onClick={onCloseModal}>X</button>
                    <img src={'http://localhost:3001/jewels/' + image} alt="logo"/>
                </div>
            </div>
        );
    }
}

export default ImageModal;
