import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickHistory = () => history.push("/page1/detail");
  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to={{ pathname: "/page1/detail", state: arr }}>detail</Link>
      <br />
      <Link to="/page1/detail1">detail1</Link>
      <br />
      <button onClick={onClickHistory}>Detail</button>
    </div>
  );
};
