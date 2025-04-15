import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { show } from "../../services/petService.js";

const PetDetail = (props) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [pet, setPet] = useState({});

  useEffect(() => {
    const getPet = async () => {
      const petData = await show(id);
      setPet(petData);
    };
    getPet();
  }, []);

  const handleEdit = () => {
    navigator(`/pets/edit/${id}`);
  };

  const handleDelete = () => {
    // TODO handle delete here
  }

  return (
    <>
      <h3>Name: {pet.name}</h3>
      <h4>Age: {pet.age}</h4>
      <h4>Breed: {pet.breed}</h4>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default PetDetail;
