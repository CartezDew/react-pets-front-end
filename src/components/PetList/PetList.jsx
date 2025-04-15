import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { index } from "../../services/petService";

const PetList = (props) => {
  const navigator = useNavigate();
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const pets = await index();

        if (pets.err) {
          throw new Error(pets.error);
        }

        setPetList(pets);
      } catch (error) {
        console.error(error);
      }
    };
    getPets();
  }, []);

  const addPet = (e) => {
    navigator("/pets/new");
  };

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          {petList.length === 0 ? (
            <h4>There are no pets</h4>
          ) : (
            petList.map((pet, index) => {
              return (
                <li key={index}>
                  <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
                </li>
              );
            })
          )}
        </ul>
        <button onClick={addPet}>Add Pet</button>
      </div>
    </div>
  );
};

export default PetList;
