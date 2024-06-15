const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input
            type={type}
            className="text-sm w-full px-3 py-2 border border-slate-400 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder: opacity-50"
            placeholder={placeholder}
            id={name}
        />
    );
}

export default Input
