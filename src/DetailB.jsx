import { useParams } from "react-router-dom";

export const DetailB = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>DetailBページです。</h1>
      {id}
    </div>
  );
};
