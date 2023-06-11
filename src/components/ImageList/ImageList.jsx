import { List } from "./ImageList.styled"
import ImageCard from "components/ImageCard/ImageCard";
import PropTypes from 'prop-types';

const ImageList = ({ images }) => {

    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
                <ImageCard
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                />
            );
            })}
        </List>
    );
};


ImageList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })),
};

export default ImageList;