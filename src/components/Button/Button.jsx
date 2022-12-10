import "./button.css";

const Button = (props) => {
  return <button className={props.class}>{props.children}</button>;
};

export default Button;
