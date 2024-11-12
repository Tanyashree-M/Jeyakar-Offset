import React from "react";

export const Services = () => {
  const services = [
    {
      "name": "PREPRESS DESIGNING SERVICES",
      "text": "We provideour customers with prepress designing ,proof materials,printed piecesto ensure their satisfaction and their demand at high quality and on time."
    },
    {
      "name": "CUTOMIZATION OF DESIGNS",
      "text": "At JEYAKAR, we specialize in offering our prestigious customers with customized designs with high quality, making your dreams and ideas come to being."
    },
    {
      "name": "LAYOUT AND PAGE ASSEMBLY",
      "text": "We here provide our customers with best quality on layout and page layout. You come ,we serve. "
    },
    {
      "name": "PROOF READING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    }]

  const specialisation = [
    {
      "name": "DIARIES",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "name": "CALENDARS",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "name": "SOFT COVER NOTEBOOK/BOOK PRINTING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "name": "HARD COVER BOOK PRINTING",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "name": "BUSINESS STATIONERIES",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
    {
      "name": "ADVERTISING AND PROMOTIONAL POSTERS",
      "text": "Our team makes sure we have only the best and quality content on hand of our consumers."
    },
  ]

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
    <div>
      <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel" interval="1" data-pause="false" >

        <div style={{ 'marginTop': '70px' }}>
          <ol className="carousel-indicators">
            <li data-target="#servicesCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#servicesCarousel" data-slide-to="1"></li>
            <li data-target="#servicesCarousel" data-slide-to="2"></li>
            <li data-target="#servicesCarousel" data-slide-to="3"></li>
            <li data-target="#servicesCarousel" data-slide-to="4"></li>
            <li data-target="#servicesCarousel" data-slide-to="5"></li>
            <li data-target="#servicesCarousel" data-slide-to="6"></li>
            <li data-target="#servicesCarousel" data-slide-to="7"></li>
            <li data-target="#servicesCarousel" data-slide-to="8"></li>

          </ol>
          <div className="carousel-inner">

            <div className="item active" >
              <img src="./img/services/service2.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item" >
              <img src="./img/services/service3.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item"  >
              <img src="./img/services/service5.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item"  >
              <img src="./img/services/service1.jpg" alt="services images" style={carousel_style} />
            </div>


            <div className="item"  >
              <img src="./img/services/service4.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item"  >
              <img src="./img/services/service6.jpg" alt="services images" style={carousel_style} />

            </div>

            <div className="item"  >
              <img src="./img/services/service7.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item"  >
              <img src="./img/services/service8.jpg" alt="services images" style={carousel_style} />
            </div>

            <div className="item"  >
              <img src="./img/services/service9.jpg" alt="services images" style={carousel_style} />
            </div>

          </div>
          <a className="left carousel-control" href="#servicesCarousel" data-slide="prev" >
            <i className="fa fa-chevron-left" style={chevron_style}></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#servicesCarousel" data-slide="next">
            <i className="fa fa-chevron-right" style={chevron_style}></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row" style={{ "backgroundColor": "white", "display": "flex", "flexWrap": "wrap", "padding": "50px" }}>
            {services
              ? services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" style={{ "color": "black" }}>
                  {" "}

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
    </div>
  );
};



