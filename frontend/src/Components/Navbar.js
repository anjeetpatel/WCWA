import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 p-4">
      <a class="navbar-brand" href="#">
        WCWA
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#Education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Membership
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Beauty Salons and Spa
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Networking
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Conferences
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Workshops
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Webinars
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Accreditation & Quality Control
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
