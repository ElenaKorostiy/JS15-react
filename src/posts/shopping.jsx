import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";

export const Shopping = () => {
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
            <h1 className="first">Shopping</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Shopping Blog: Discover the latest trends, fashion tips, and exciting finds in our Shopping Blog. Immerse yourself in the world of style, where we curate the best in fashion, beauty, and lifestyle. From must-have accessories to exclusive deals, our blog is your go-to guide for all things chic and trendy. Join us as we navigate the shopping scene, uncover hidden gems, and share our passion for the art of personal expression through fashion</p>
            
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