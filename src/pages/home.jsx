import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section>
            <h1>Home</h1>
            <Link to="/contacts">Go to</Link> 
        </section>
    )
};