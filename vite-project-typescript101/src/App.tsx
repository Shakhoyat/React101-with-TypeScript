import "./App.css";
import Person from "./Person";

const App = () => {
  const fetchUser = () => {
    return {
      name: "Pedre",
      age: 30,
      isStudent: true
    };
  };
  const userfetch = fetchUser();
  return (
    <div>
      <Person name={userfetch.name} age={userfetch.age} isStudent={userfetch.isStudent} />
    </div>
  )
}

export default App