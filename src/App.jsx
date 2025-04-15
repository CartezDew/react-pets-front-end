import { Route, Routes } from "react-router";
import "./App.css";
import PetList from "./components/PetList/PetList.jsx";
import PetDetail from "./components/PetDetail/PetDetail.jsx";
import PetForm from "./components/PetCreateForm/PetCreateForm.jsx";
import PetEditForm from "./components/PetEditForm/PetEditForm.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Pets Front End</h1>} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetail />} />
        <Route path="/pets/new" element={<PetForm />} />
        <Route path="/pets/edit/:id" element={<PetEditForm />} /> 
      </Routes>
    </>
  );
};

export default App;
