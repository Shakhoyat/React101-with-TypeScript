import React from "react";

export enum Countries {
  USA = "USA",
  Canada = "Canada",
  UK = "UK",
  Australia = "Australia",
  India = "India",
  Germany = "Germany",
  France = "France",
  Japan = "Japan",
}

interface PersonProps {
  name: string;
  age: number;
  isStudent: boolean;
  country: Countries;
}

const Person: React.FC<PersonProps> = ({ name, age, isStudent, country }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
      <p>Country of Origin: {country}</p>
    </>
  );
};

export default Person;
