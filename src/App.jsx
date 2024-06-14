import React from "react"

class ButtonClass extends React.Component {
  render() {
    return <button
      className="h-10 px-6 font-semibold bg-yellow-500 rounded-md"
      type="submit"
    >Button Class</button>
  }
}

function ButtonFunc() {
  return (
    <button
      className="h-10 px-6 font-semibold bg-red-700 rounded-md"
      type="submit"
    >Button Func</button>
  );
}

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

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <ButtonClass></ButtonClass>
        <ButtonFunc></ButtonFunc>
        <ButtonArrowFunc></ButtonArrowFunc>
        <ButtonArrowFunc background="bg-green-500">Login</ButtonArrowFunc>
      </div>
    </div>
  )
}

export default App
