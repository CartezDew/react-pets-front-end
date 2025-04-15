import { Link } from "react-router";

const PetList = (props) => {
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          { props.pets.length === 0 ? (
            <h4>There are no pets</h4>
          ) : (
            props.pets.map((pet, index) => {
              return <li key={index}>{pet.name}</li>;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default PetList;
