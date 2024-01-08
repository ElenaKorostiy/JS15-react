import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";



export const Adventure = () => {

const {pathname} = useLocation();
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
            <h1 className="first">Adventure</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Adventure is an exhilarating journey into the unknown, often filled with unexpected challenges and discoveries. Whether exploring new landscapes, facing thrilling escapades, or embracing personal growth, adventures shape our lives, providing stories and memories that linger long after the journey is complete."</p>


            <input className="fourth" type="text"
            value={value}
            onChange={(e) => {
            setValue(e.target.value);
            }} />
            <br/>
            <br/>
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