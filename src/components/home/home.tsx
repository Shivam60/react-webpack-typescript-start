import * as React from "react";
import { useHistory } from "react-router-dom";
import Routes from "../../root/routes";

export default function Home(): React.ReactElement {
  const history = useHistory();
  return (
    <div>
      <h1>This the Home Page</h1>
      <button
        onClick={() => {
          history.push(Routes.Page1);
        }}
      >
        Click to go to Page 1
      </button>
      <button
        onClick={() => {
          history.push(Routes.Page2);
        }}
      >
        Click to go to Page 2
      </button>
    </div>
  );
}
