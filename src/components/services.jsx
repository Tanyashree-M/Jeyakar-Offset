import React from "react";

export const Services = () => {
  const services = [
    {
      "icon": "fa fa-wordpress",
      "image": "../img/about.jpg",
      "name": "PREPRESS DESIGNING SERVICES",
      "text": "We provideour customers with prepress designing ,proof materials,printed piecesto ensure their satisfaction and their demand at high quality and on time."
    },
    {
      "icon": "fa fa-wordpress",
      "image": "../img/about.jpg",
      "name": "CUTOMIZATION OF DESIGNS",
      "text": "At JEYAKAR, we specialize in offering our prestigious customers with customized designs with high quality, making your dreams and ideas come to being."
    },
    {
      "icon": "fa fa-wordpress",
      "image": "../img/about.jpg",
      "name": "LAYOUT AND PAGE ASSEMBLY",
      "text": "We here provide our customers with best quality on layout and page layout. You come ,we serve. "
    },
    {
      "icon": "fa fa-wordpress",
      "image": "../img/about.jpg",
      "name": "PROOF READING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },

  ]


  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {services
            ? services.map((d, i) => (
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
        <h2>Specialised in printing of </h2>
        <ul>
          <li>DIARIES</li>INTIN
          <li>CALENDERS</li>
          <li>SOFT COVER NOTEBOOK/BOOK PRINTING</li>
          <li>HARD COVER BOOK PRINTING</li>
          <li>BUSINESS STATIONERIES</li>
          <li>ADVERTISING AND PROMOTIONAL POSTERS</li>
        </ul>
      </div>
    </div>
  );
};



