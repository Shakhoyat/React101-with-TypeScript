export interface PersonProps  {
    name: string;
    age: number;
    isStudent: boolean;
}

const Person = (props: PersonProps) => {
    return (
        <div>
            <p>
                Name: {props.name}, Age: {props.age}, Is Student: {props.isStudent ? "Yes" : "No"}
            </p>
        </div>
    );
};

export default Person;