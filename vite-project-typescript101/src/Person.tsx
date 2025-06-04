import { useState } from "react";
export interface PersonProps  {
    name: string;
    age: number;
    isStudent: boolean;
}

const Person = (props: PersonProps) => {

  const [isShowInfo, setisShowInfo] = useState<boolean>(false);
    return (
        <div>
            {
                isShowInfo && (
                    <p>
                    Name: {props.name}, Age: {props.age}, Is Student: {props.isStudent ? "Yes" : "No"}
                </p>
                )
            }
          
        </div>
    );
};

export default Person;