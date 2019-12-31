import React from 'react';
import './TechList.scss';

export default function TechList(props) {
    return (
        <ul className="techlist">
            {props.items.map(item => {
                return (
                    <li className="techlist__item" key={item.id}>
                        {item.logo}
                    </li>
                );
            })}
        </ul>
    );
}
