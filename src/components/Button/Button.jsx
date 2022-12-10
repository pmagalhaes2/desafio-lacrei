import "./button.css";

const Button = (props) => {
  return (
    <button className={props.class}>
      <a href={props.link} target="_blank">
        {props.children}
      </a>
    </button>
  );
};

export default Button;
