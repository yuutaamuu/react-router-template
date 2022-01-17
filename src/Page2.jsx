import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/detailA">detailA</Link>
      <br />
      <Link to="/page2/100">detailB</Link>
    </div>
  );
};
