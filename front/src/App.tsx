import './App.css'
import Hello from "./components/Hello.tsx";
import HelloJSX from "./components/HelloJSX.tsx";

function App() {

  return (
    <>
      <h1>Available components</h1>
      <h2>Hello world</h2>
      <h3><strong>Hello</strong> : a plain javascript component</h3>
      <Hello name="my friend"/>
      <h3><strong>HelloJSX</strong> : a component using JSX</h3>
      <HelloJSX name="fancy dev"/>
    </>
  )
}

export default App
