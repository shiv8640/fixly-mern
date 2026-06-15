import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Service Details</h1>
      <p>Service ID: {id}</p>
    </div>
  );
}

export default ServiceDetails;