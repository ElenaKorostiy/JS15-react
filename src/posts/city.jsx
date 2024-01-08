import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";

export const City = () => {
    const { pathname } = useLocation();
    const [value, setValue] = useState("");
    const state = useblogDataSelector();
    const dispatch = useDispatch();
    const [data] = state.filter((element) => {
        return element.url === pathname
    });

    const onClick = (id) => (e) => {
        dispatch(addComents({ id: id, coments: value }))
        setValue("");
    };

    return (
        <div className="all">
            <h1 className="first">City</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>City Blog. Uncover the pulse of urban living with our City Blog. Dive into the bustling energy, architectural wonders, and cultural tapestry that define city life. From towering skyscrapers to quaint neighborhoods, our blog celebrates the diverse and dynamic essence of cities worldwide. Join us on a journey to explore the heartbeat of modern civilization and discover the unique stories woven into the fabric of each metropolis.</p>
            
            <input className="fourth" type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }} />
            <br />
            <br />
            <button className="second" onClick={onClick(data.id)}>add coment</button>
            <div>
                {data.coments.length === 0 ? null : (
                    <ul>
                        {data.coments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
};