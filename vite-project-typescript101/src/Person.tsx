import { useState } from "react";
export interface PersonProps  {
    name: string;
    age: number;
    isStudent: boolean;
}

const Person = (props: PersonProps) => {

  const [isShowInfo, setShowInfo] = useState<boolean|null >(null);
  const toggleInfo = () => {
    setShowInfo((prev) =>!prev );
    }

    return (
        <div>
            {
                isShowInfo && (
                    <p>
                    Name: {props.name}, Age: {props.age}, Is Student: {props.isStudent ? "Yes" : "No"}
                </p>
                )
            }
            <button onClick={toggleInfo}>
                {isShowInfo ? "Hide Info" : "Show Info"}
            </button>
          
        </div>
    );
};

export default Person;