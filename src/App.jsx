import ButtonArrowFunc from "./components/Button/SimpleButton";
import ButtonClass from "./components/Button/ClassButton";
import ButtonFunc from "./components/Button/FunctionButton";

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
