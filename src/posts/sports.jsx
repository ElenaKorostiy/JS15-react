import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";

export const Sports = () => {
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
            <h1 className="first">sport hello</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Sports Blog: Dive into the exhilarating world of sports with our dynamic Sports Blog. Experience the thrill of victories, explore inspiring athlete stories, and stay updated on the latest games and competitions. From in-depth analyses to exciting highlights, our blog is your gateway to the diverse and adrenaline-pumping universe of sports. Join us in celebrating athleticism, teamwork, and the passion that drives athletes to push their limits and achieve greatness.</p>
            
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