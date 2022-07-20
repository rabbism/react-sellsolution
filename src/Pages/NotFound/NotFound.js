import React from "react";
import { Link } from "react-router-dom";
import page from "../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div>
      {/* <h1>404</h1>
            <h3>Page is not find</h3> */}
      <img
        src={page}
        class="img-fluid w-75 h-75 rounded mx-auto d-block"
        alt="..."
      />
      <Link to="/">
        <div class="d-grid gap-2 col-6 mx-auto mb-5 w-100">
          <button class="btn btn-primary" type="button">
            Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
