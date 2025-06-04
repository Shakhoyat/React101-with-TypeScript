import { useState } from "react";
export interface PersonProps {
  name: string;
  age: number;
  isStudent: boolean;
}

const Person = (props: PersonProps) => {
  const [personBio, setpersonBio] = useState<string | null>("");
  const [isShowInfo, setShowInfo] = useState<boolean | null>(null);
  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonBio(e.target.value);
  };
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age:</p>
      <p>
        This person {props.isStudent ? "is a student " : "is not a student"}
      </p>

      <p>
        {" "}
        {props.name} is {props.age} years old. Bio:
        {!personBio ? "No bio available" : personBio}
      </p>
      <input onChange={handleChange} />
    </>
  );
};

export default Person;
