// import React from 'react';
// function Navbar () {
//     return ( 

//      );
// }

// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm"
      style={{ backroundColor: "#FFF" }}>
      <div className="container p-1">
        <a className="navbar-brand" href="#"><img src="media/logo.svg"
          style={{ width: "25%" }}
        /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">

          <form className="d-flex" role="search">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SignUp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Support
                </a>
              </li>



            </ul>

          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

