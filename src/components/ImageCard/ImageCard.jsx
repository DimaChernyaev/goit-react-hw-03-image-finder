import { Component } from "react";
import ModalView from 'components/Modal/Modal';
import { ImageItem, Image } from "./ImageCard.styled";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import PropTypes from 'prop-types';


export class ImageCard extends Component {
    state = {
        isModalOpen: false,
    }

    componentWillUnmount () {
        clearAllBodyScrollLocks();
    }

    modalOpen = (evt) => {
        console.log(evt);
        this.setState({
            isModalOpen: true
        })
    }
    
    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        const {isModalOpen} = this.state;
        const {webformatURL, tags, largeImageURL} = this.props;

        return (
                <ImageItem>
                    <Image src={webformatURL} alt={tags} onClick={this.modalOpen}></Image>
                    {isModalOpen && <ModalView 
                        isOpen={isModalOpen}
                        onClose={this.closeModal}
                        largeImage={largeImageURL}
                        tags={tags}
                        />}
                </ImageItem>
        )
    }
}

ImageCard.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default ImageCard;