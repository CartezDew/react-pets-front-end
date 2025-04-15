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

export { index };
