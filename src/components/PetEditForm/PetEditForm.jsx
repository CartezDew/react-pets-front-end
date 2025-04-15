import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { show, update } from "../../services/petService.js";

const PetEditForm = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  useEffect(() => {
    const getPet = async () => {
      const petData = await show(id);
      setFormData({
        name: petData.name,
        age: petData.age,
        breed: petData.breed
      });
    };
    getPet();
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // Needs to pass the data to the backend
    await update(formData, id);
    navigator(`/pets/${id}`);
  };

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Edit Pet</button>
      </form>
    </div>
  );
};

export default PetEditForm;
