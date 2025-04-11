import './MovieBannerCard.scss'
import {Image} from 'minista';
import Button from '@/components/Button';

const MovieBannerCard = (props) => {
    const {
        title,
        description,
        imgSrc,
    } = props

    return (
        <div className="movie-banner-card">
            <Image
                src={imgSrc}
                className="movie-banner-card__image"
            />
            <div className="movie-banner-card__inner">
                <div className="movie-banner-card__body">
                    <h2 className="movie-banner-card__title h3">
                        {title}
                    </h2>
                    <div className="movie-banner-card__description hidden-mobile">
                        <p>{description}</p>
                    </div>
                </div>
                <footer className="movie-banner-card__footer">
                    <Button
                        className="movie-banner-card__play-button"
                        iconName="play"
                        label="Play Now"
                        hasFillIcon
                    />
                    <div className="movie-banner-card__actions">
                        <Button
                            mode="black-06"
                            iconName="plus"
                            label="Add to playlist"
                            isLabelHidden
                        />
                        <Button
                            mode="black-06"
                            iconName="like"
                            label="Like"
                            isLabelHidden
                        />
                        <Button
                            mode="black-06"
                            iconName="volume"
                            label="Mute"
                            isLabelHidden
                        />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MovieBannerCard;