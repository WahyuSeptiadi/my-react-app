const ButtonRoundedSB = (props) => {
    const {
        type = "button", // listener on click -> type = "submit"
        text = ". . .",
        modifier = "px-4",
        background = "bg-black",
        onClick = () => { },
    } = props;

    return (
        <button
            className={`${background} ${modifier} h-10 font-semibold rounded-md text-white`}
            type={type}
            onClick={onClick}
        >{text}</button>
    );
}

export default ButtonRoundedSB
