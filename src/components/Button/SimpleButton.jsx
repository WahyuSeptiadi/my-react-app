// ReusableButton with arrow function + props (properties)
const ButtonArrowFunc = (props) => {
    // default value
    const { children = ". . .", background = "bg-black" } = props;
    return (
        <button
            className={`h-10 px-6 font-semibold ${background} rounded-md`}
            type="submit"
        >{children}</button>
    );
}

export default ButtonArrowFunc
