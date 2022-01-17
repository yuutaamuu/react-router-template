import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>404ページです。</h1>
      <Link to="/">Top</Link>
    </div>
  );
};
