import NotFoundImage from "../assets/404.jpg";

import "./notfound.css";

export const NotFound = () => {
  return (
    <div className="found">
      <h2>404 - Page Not Found</h2>
      <img src={NotFoundImage} alt="404 Not Found" />
      <p>Sorry, the requested page does not exist.</p>
    </div>
  );
};