import "./Card.css";
// import { Button } from "./button/Button";


export const Card = ({type, src, title="text"}) => {
  console.log(type, src);
  return (
      <>
       <div className="container" >
        <img className="container-img" src={src} alt="My Photo" />
        <p className="container-text"><button className="card-button">{title}</button></p>
       </div>
        
    </>
  );
};

// export const Card = ({ type, src, title = "text", onClick }) => {
//   const handleButtonClick = () => {
//     if (onClick) {
//       onClick(type, src, title );
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <img className="container-img" src={src} alt="My Photo" />
//         <p className="container-text">
//           <button className="card-button" onClick={handleButtonClick}>
//             {title}
//           </button>
//         </p>
//       </div>
//     </>
//   );
// };


// export const Card = ({ type, src, title = "text" }) => {
//   const handleButtonClick = () => {
//     const targetElement = document.getElementById(title);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <div className="container" id={title}>
//         <img className="container-img" src={src} alt="My Photo" />
//         <p className="container-text">
//           <button className="card-button" onClick={handleButtonClick}>
//             {title}
//           </button>
//         </p>
//       </div>
//     </>
//   );
// };