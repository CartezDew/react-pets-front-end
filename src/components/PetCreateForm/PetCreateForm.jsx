import { useState } from "react";
import { useNavigate } from "react-router";
import { create } from "../../services/petService.js";

const PetForm = () => {
  const navigator = useNavigate();
  // formData state to control the form.
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // Needs to pass the data to the backend
    await create(formData);
    navigator("/pets");
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
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
