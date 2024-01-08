import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";

export const Travel = () => {
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
            <h1 className="first">Travel</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Travel Stories Blog: Embark on a journey of discovery and wanderlust with our Travel Stories Blog. Immerse yourself in captivating tales of exploration, cultural encounters, and breathtaking landscapes. Our blog is a passport to diverse destinations, providing travel tips, hidden gems, and inspiring narratives that will fuel your desire for adventure. Whether you're a seasoned globetrotter or an armchair traveler, join us as we traverse the globe, sharing the magic and wonders of different corners of the Earth.</p>
            
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