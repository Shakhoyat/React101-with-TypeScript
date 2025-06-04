import "./App.css";
import Person from "./Person";
let name: string = "TypeScript 101";
let age: number = 25;
let isStudent: boolean = true;

let hobbies: string[] = ["Reading", "Coding", "Hiking"];
let person: { name: string; age: number; isStudent: boolean } = {
  name: "John Doe",
  age: 30,
  isStudent: false,
};
const App = () => {
  return (
    <div>
      <Person name={"Pedre"}age={30}isStudent={true}/>
    </div>
  )
}

export default App