import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";


export const Food = () => {
    const { pathname } = useLocation();
    const [value, setValue] = useState("");
    const state = useblogDataSelector();
    const dispatch = useDispatch();
    const [data] = state.filter((element) => {
        return element.url === pathname
    });

    const onClick = (id) => (e) => {
        dispatch(addComents({ id: id, coments: value, }))
        setValue("");
    };

    return (
        <div className="all">
            <h1 className="first">Food </h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br />
            <img className="third" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Food Blog: Embark on a culinary adventure with our Food Blog. Indulge your senses as we explore delectable cuisines, mouthwatering recipes, and the rich tapestry of flavors that define the world of gastronomy. From savory delights to sweet temptations, our blog is a celebration of diverse culinary experiences. Join us on a delightful journey where every dish tells a story, and every bite is a flavorful exploration of cultures and traditions</p>
            
            <input className="fourth" type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }} />
            <br />
            <br />
            <button className="second"  onClick={onClick(data.id)}>add coment</button>
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