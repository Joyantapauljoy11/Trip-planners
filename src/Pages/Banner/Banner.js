import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/PghKQft/tea-870x555.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>SYLHET</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/j5mWV4W/23131882661-84531afa1a-b.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>SAINMARTIN</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/0s3857q/tour-1-20210328153747.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>BANDARBAN</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/LgnYRjb/Sundarban-Forest.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>SUNDARBAN</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
