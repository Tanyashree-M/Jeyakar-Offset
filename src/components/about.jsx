import React from "react";

export const About = () => {
  const about = {
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Why": [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
      "Incididunt ut labore"
    ],
    "Why2": [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor"
    ]
  }

  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" interval="1500" >

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner" style={{
          "display": "flex", "justify-content": "center",
          "height": "100vh"
        }}>

          <div className="item active" >
            <img src="./img/about/about1.png" alt="about images" />
          </div>

          <div className="item" >
            <img src="./img/about/about2.png" alt="about images" />
          </div>

          <div className="item" >
            <img src="./img/about/about3.png" alt="about images" />
          </div>

          <div className="item" >
            <img src="./img/about/about4.png" alt="about images" />

          </div>

        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev" >
          <i className="fa fa-chevron-left" style={{ "position": "absolute", 'top': '50%', 'color': 'black' }}></i>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <i className="fa fa-chevron-right" style={{ "position": "absolute", 'top': '50%', 'color': 'black' }}></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <h2 style={{ "margin-top": "20px" }}>About Us</h2>
      <p>{about ? about.paragraph : "loading..."}</p>
      <h3>Why Choose Us?</h3>
      <div className="list-style">
        <div className="col-lg-6 col-sm-6 col-xs-12">
          <ul>
            {about
              ? about.Why.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))
              : "loading"}
          </ul>
        </div>
        <div className="col-lg-6 col-sm-6 col-xs-12">
          <ul>
            {about
              ? about.Why2.map((d, i) => (
                <li key={`${d}-${i}`}> {d}</li>
              ))
              : "loading"}
          </ul>
        </div>
      </div>
    </div >

  );
};

