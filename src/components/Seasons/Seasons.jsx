import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup';
import seasonItem from '@/components/Seasons/seasonItem';
import Accordion from '@/components/Accordion';

const Seasons = (props) => {

    const {

    } = props

    return (
       <AccordionGroup
        className="seasons"
        mode="dark"
        isOrderedList={false}
       >
           {seasonItem.map(({title, subtitle, episodes}, index) => (
               <Accordion
                title={title}
                titleLevelClassName="h4"
                subtitle={subtitle}
                id={`season-${index}`}
                name="seasons"
                isOpen={index === 0}
                key={index}
                isArrowButton
               >
                   <ul className="seasons__list">
                       {episodes.map((episode, index) => (
                           <li className="seasons__item" key={index}>
                               {episode.title}
                           </li>
                       ))}
                   </ul>
               </Accordion>
           ))}
       </AccordionGroup>
    );
};

export default Seasons;