import { useEffect, useState } from "react";
import '../../Css/Accordion.css';

const Accordion = ({items, keepOthersOpen}) =>{

    const [accordionItems, setAccordionItems] = useState(null);

    useEffect(() => {
        if(items){
            setAccordionItems([
                ...items.map(item => ({
                    ...item,
                    toggled: false
                }))
            ]);
        }
    }, [items]);
    
    function handleAccordionToggle(clickedItem){
        setAccordionItems(prevItems =>
            prevItems.map(item => {
                if (item.id === clickedItem.id) {
                    return { ...item, toggled: !item.toggled };
                } else if (!keepOthersOpen) {
                    return { ...item, toggled: false };
                } else {
                    return item;
                }
            })
        );
    }
    
    return (
        <div className="accordion-parent">
            {accordionItems?.map((listItem, key) => {
                return (
                    <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
                        <button className="toggle" onClick={() => handleAccordionToggle(listItem)}>
                            <p>{listItem.label}</p>
                            <div className="direction-indicator">{listItem.toggled ? '-' : '+'}</div>
                        </button>
                        <div className="content-parent"> 
                            <div className="content">{listItem.renderContent()}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
    
}
export default Accordion;