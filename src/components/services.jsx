import React from "react";

export const Services = () => {
  const services = [
    {
      "image": "../img/about.jpg",
      "name": "PREPRESS DESIGNING SERVICES",
      "text": "We provideour customers with prepress designing ,proof materials,printed piecesto ensure their satisfaction and their demand at high quality and on time."
    },
    {
      "image": "../img/about.jpg",
      "name": "CUTOMIZATION OF DESIGNS",
      "text": "At JEYAKAR, we specialize in offering our prestigious customers with customized designs with high quality, making your dreams and ideas come to being."
    },
    {
      "image": "../img/about.jpg",
      "name": "LAYOUT AND PAGE ASSEMBLY",
      "text": "We here provide our customers with best quality on layout and page layout. You come ,we serve. "
    },
    {
      "image": "../img/about.jpg",
      "name": "PROOF READING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    }]

  const specialisation = [
    {
      "image": "../img/about.jpg",
      "name": "DIARIES",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "image": "../img/about.jpg",
      "name": "CALENDERS",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "image": "../img/about.jpg",
      "name": "SOFT COVER NOTEBOOK/BOOK PRINTING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "image": "../img/about.jpg",
      "name": "HARD COVER BOOK PRINTING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "image": "../img/about.jpg",
      "name": "BUSINESS STATIONERIES",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "image": "../img/about.jpg",
      "name": "ADVERTISING AND PROMOTIONAL POSTERS",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
  ]


  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row" style={{ "backgroundColor": "white", "display": "flex", "flexWrap": "wrap" }}>
          {services
            ? services.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4" style={{ "color": "black" }}>
                {" "}
                <img src={d.image} style={{ "border-radius": "100px", "width": "200px", "height": "200px", "box-shadow": "5px 5px 10px rgba(0, 0, 0, 0.7)", "margin-top": "20px" }}></img>
                <div className="service-desc">
                  <h3 style={{ "color": "#5ca9fb" }}>{d.name}</h3>
                  <p style={{ "color": "black" }}>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
        <h2 style={{ "padding-top": "20px" }}>Specialised in printing of </h2>
        <div className="row">
          {specialisation
            ? specialisation.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <img src={d.image} style={{ "border-radius": "100px", "width": "200px", "height": "200px", "box-shadow": "5px 5px 10px rgba(0, 0, 0, 0.7)" }}></img>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>

      </div>
    </div>
  );
};



