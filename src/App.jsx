import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import * as petService from "./services/petService.js";
import "./App.css";
import PetList from "./components/PetList/PetList.jsx";

const App = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const pets = await petService.index();

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

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Pets Front End</h1>} />
        <Route path="/pets" element={<PetList pets={petList} />} />
        <Route path="/pets/:id" element={<h1>Pet Detail</h1>} />
      </Routes>
    </>
  );
};

export default App;
