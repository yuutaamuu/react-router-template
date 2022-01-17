import { useLocation } from "react-router-dom";

export const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Detailページです。</h1>
    </div>
  );
};
