const Label = (props) => {
    const { name, label } = props
    return (
        <label
            htmlFor={name}
            className="block mb-2 text-sm font-bold text-slate-700"
        >{label}</label>
    );
}

export default Label
