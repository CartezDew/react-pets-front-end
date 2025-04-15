import { useParams } from "react-router";

const PetDetail = () => {
  const { id } = useParams();
  
  return <div>PetDetail</div>;
};

export default PetDetail;
