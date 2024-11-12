import React from "react";

export const About = () => {
  const about = {
    "paragraph": "Jeyakar Offset Printers (P) Ltd, our prestigious institution is one of the finest in offset printing in Sivakasi. It is located in the bustling area near Sivakasi bus stand. We have a long history dating back to 1964, when our great grandfather established this offset with a single machine. Today, we are in the process of developing it into a quality printing institution with several machineries and value added services.We here at Jeyakar Offset provide multi-color printing with added embellishments of lamination, foil and UV through inhouse and outsourcing. With services like binding, pasting and packaging making your order complete.",
    "Why": [
      "Trending and aesthetic designs",
      "High quality multi-color printing",
      "Value added services",
      "Safe Packaging and delivery options"
    ]
  }

  const carousel_style = {
    'width': '100 %',
    'height': 'auto',
    'objectFit': 'contain'
  }
  const chevron_style = {
    "position": "absolute",
    'top': '50%',
    'color': 'black',
    'width': '25px',
    'height': '25px',
  };

  return (
    <div id="about">
      <div id="myCarousel" className="carousel slide" data-ride="carousel" interval="1" data-pause="false" style={{ "marginTop": '70px' }} >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div >

          <div className="carousel-inner">

            <div style={carousel_style} className="item active" >
              <img src="./img/about/about1.png" alt="about images" />
            </div>

            <div style={carousel_style} className="item" >
              <img src="./img/about/about2.jpg" alt="about images" />
            </div>

            <div style={carousel_style} className="item"  >
              <img src="./img/about/about3.png" alt="about images" />
            </div>

            <div style={carousel_style} className="item"  >
              <img src="./img/about/about4.jpg" alt="about images" />

            </div>

          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev" >
            <i className="fa fa-chevron-left" style={chevron_style}></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <i className="fa fa-chevron-right" style={chevron_style}></i>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>

      <h2 style={{ "margin-top": "50px" }}>About Us</h2>
      <p>{about ? about.paragraph : "loading..."}</p>
      <h3 >Why Choose Us?</h3>
      <div className="list-style">
        <div className="about-text">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <ul>
              {about
                ? about.Why.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
                : "loading"}
            </ul>
          </div>
        </div>
      </div>
    </div >

  );
};

