import React from "react";

export const Infra = () => {
  const infra = [
    {
      "image": "../img/about.jpg",
      "title": "PREPRESS"
    },
    {
      "image": "../img/about.jpg",
      "title": "PRINTING"
    },
    {
      "image": "../img/about.jpg",
      "title": "BINDING"
    }
  ]

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Infrastructure</h2>
        </div>
        <div className="row">
          {infra
            ? infra.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {" "}
                <img src={d.image} style={{ "border-radius": "100px", "width": "200px", "height": "200px", "box-shadow": "5px 5px 10px rgba(0, 0, 0, 0.7)", "margin-top": "20px" }} />
                <h3>{d.title}</h3>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

