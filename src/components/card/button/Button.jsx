// import './Button.css';


// export const Button = ({ children, variant, color, size, disabled }) => {
//  const buttonClass = `custom-button ${variant} ${color} ${size} ${disabled ? 'disabled' : ''}`;
//   return (
//     <button className={buttonClass} disabled={disabled}>
//       {children}
//     </button>
//   );
// };
// };

// Варіант 2
// export const Button = (props) => {
//   const { children, variant, color, size, disabled } = props;
//   const buttonClass = `custom-button ${variant} ${color} ${size} ${disabled ? 'disabled' : ''}`;
//   return (
//     <button className={buttonClass} disabled={disabled}>
//       {children}
//     </button>
//   );
// };

// import Button from './Button'; // Імпорт компонента кнопки у файл Card.jsx

// export const App = () => {
//   return (
//     <div>
//       <Button variant="primary" color="large">Primary Button</Button>
//       <Button variant="secondary" color="small" disabled>Secondary Button</Button>
//     </div>
//   );
// };


