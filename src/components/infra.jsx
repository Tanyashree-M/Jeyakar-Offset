import React from "react";

export const Infra = () => {
  const infra = [
    {
      "title": "PREPRESS"
    },
    {
      "title": "PRINTING"
    },
    {
      "title": "BINDING"
    }
  ]

  const carousel_style = {
    'height': '500px',
    'position': 'relative',
    "margin-top": "80px"
  }

  const chevron_style = {
    "position": "absolute",
    'top': '50%',
    'color': 'black',
    'width': '25px',
    'height': '25px',
  };


  return (
    <div>
      <div id="infraCarousel" className="carousel slide" data-bs-ride="carousel" interval="1" data-pause="false" >

        <div style={carousel_style}>
          <ol className="carousel-indicators">
            <li data-target="#infraCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#infraCarousel" data-slide-to="1"></li>
            <li data-target="#infraCarousel" data-slide-to="2"></li>
            <li data-target="#infraCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">

            <div className="item active" >
              <img src="./img/infra/infra 1.jpg" alt="infra images" style={{
                "height": "500px", "margin": "0 auto", "display": "block"
              }} />
            </div>

            <div className="item" >
              <img src="./img/infra/infra2.jpg" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />
            </div>

            <div className="item"  >
              <img src="./img/infra/infra 3.jpg" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />
            </div>

            <div className="item"  >
              <img src="./img/infra/infra 4.jpg" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />

            </div>

          </div>
          <a className="left carousel-control" href="#infraCarousel" data-slide="prev" >
            <i className="fa fa-chevron-left" style={chevron_style}></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#infraCarousel" data-slide="next">
            <i className="fa fa-chevron-right" style={chevron_style}></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
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
                  <h3>{d.title}</h3>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

