import './PersonCard.scss'
import {Image} from 'minista';

const PersonCard = (props) => {

    const {
        imgSrc,
        imgAlt,
    } = props

    return (
        <div
        className="person-card"
        >
            <Image
                className="person"
                src={imgSrc}
                alt={imgAlt}
                title={`${imgAlt}`}
            />
        </div>
    );
};

export default PersonCard;