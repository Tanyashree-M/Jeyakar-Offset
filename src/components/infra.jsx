import React from "react";

export const Infra = () => {
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
              <img src="./img/infra/infra1.png" alt="infra images" style={{
                "height": "500px", "margin": "0 auto", "display": "block"
              }} />
            </div>

            <div className="item" >
              <img src="./img/infra/infra2.png" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />
            </div>

            <div className="item"  >
              <img src="./img/infra/infra3.png" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />
            </div>

            <div className="item"  >
              <img src="./img/infra/infra4.png" alt="infra images" style={{ "height": "500px", "margin": "0 auto", "display": "block" }} />

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
      <div id="infra" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Infrastructure</h2>
            <ul>
              <li>PREPRESS</li>
              <li>PRINTING</li>
              <li>BINDING</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

