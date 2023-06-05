const Button = ({handleClick, text}) => {
    return (
        <div>
            <button onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;