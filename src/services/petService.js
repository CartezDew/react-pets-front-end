const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/pets`;

const index = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const show = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const create = async (formData) => {
  try {
    // TODO: Hacky, fix this better later
    formData.age = Number(formData.age);

    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const update = async (formData, id) => {
  try {
    formData.age = Number(formData.age);

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// TODO complete this delete function
const deletePet = async (id) => {
 try {
  
 } catch (error) {
  
 }
}

export { index, show, create, update, deletePet };
