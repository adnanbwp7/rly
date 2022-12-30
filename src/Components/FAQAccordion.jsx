import React, { useRef, useState } from "react";
import './Accordion.css'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

function FAQ_Accordian(props) {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");

    function toggleAccordion() {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{props.title}</p>
                <span style={{ marginLeft: "20px" }}>{active ? <SlArrowDown /> : <SlArrowUp />}</span>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default FAQ_Accordian;

