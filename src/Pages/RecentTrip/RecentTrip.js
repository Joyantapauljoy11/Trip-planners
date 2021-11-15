import React from "react";
import "./RecentTrip.css";

const RecentTrip = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-danger" style={{ fontFamily: "'Rubik', sans-serif" }} >Recent Trips </h2>
      <div className="col-lg-10 m-auto">
        <div className="col-lg-10 m-auto">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/VpGtVcy/observerbd-com-1556292380-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Dec 22, 2021</p>
                  <h5 className="card-title text-start">
                    Jaflong, Sylhet
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/LxZp9KS/f8ea7bbdff907f98246e5e0f77d3b355-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Sep 13, 2021</p>
                  <h5 className="card-title text-start">
                    Cox's Bazar
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/Sm7LR4t/Tanguar-Haor.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Jan 10, 2020</p>
                  <h5 className="card-title text-start">
                    Tanguar Haor,sunamganj.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrip;
