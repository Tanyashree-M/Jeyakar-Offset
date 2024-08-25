import React from "react";

export const Infra = () => {
  const infra = [
    {
      "icon": "fa fa-comments-o",
      "title": "PREPRESS",
    },
    {
      "icon": "fa fa-comments-o",
      "title": "PRINTING",
    },
    {
      "icon": "fa fa-comments-o",
      "title": "BINDING",
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
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

