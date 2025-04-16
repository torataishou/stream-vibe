import './ShowBanner.scss';
import MovieBannerCard from '@/components/MovieBannerCard';

const ShowBanner = (props) => {

    const titleId = 'show-banner-title'

    const {

    } = props

    return (
        <section
            className="container"
            aria-label={titleId}
        >
            <MovieBannerCard
                title="Stranger Things"
                titleId={titleId}
                TitleTag="h1"
                description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
                imgSrc="/src/assets/images/movie-banner/3.jpg"
                isSmallPaddingY
            />
        </section>
    );
};

export default ShowBanner;