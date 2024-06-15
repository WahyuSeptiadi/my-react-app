const ButtonRoundedSB = (props) => {
    const { type = "submit", text = ". . .", width = "px-4", background = "bg-black" } = props;
    return (
        <button
            className={`${background} ${width} mt-3 h-10 font-semibold rounded-md text-white`}
            type={type}
        >{text}</button>
    );
}

export default ButtonRoundedSB
