import './Button.css';


function Button(props) {
    return (
        <button className="btn" style={props.style}>{props.text}</button>
    );
}

export default Button;