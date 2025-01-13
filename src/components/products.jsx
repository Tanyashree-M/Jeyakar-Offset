import { Image } from "./image";
import React from "react";

export const Products = () => {
  const products = [
    {
      "title": "Calendars",
      "largeImage": "img/products/p1-large.jpg",
      "smallImage": "img/products/p1-small.jpg"
    },
    {
      "title": "Personalised Notebooks",
      "largeImage": "img/products/p2-large.jpg",
      "smallImage": "img/products/p2-small.jpg"
    },
    {
      "title": "Personalised Diaries",
      "largeImage": "img/products/p3-large.jpg",
      "smallImage": "img/products/p3-small.jpg"
    },
    {
      "title": "Personalised Diaries",
      "largeImage": "img/products/p4-large.jpg",
      "smallImage": "img/products/p4-small.jpg"
    },
    {
      "title": "Personalised Notebooks",
      "largeImage": "img/products/p5-large.jpg",
      "smallImage": "img/products/p5-small.jpg"
    },
    {
      "title": "Personalised Diaries",
      "largeImage": "img/products/p6-large.jpg",
      "smallImage": "img/products/p6-small.jpg"
    },
    {
      "title": "Diaries",
      "largeImage": "img/products/p7-large.jpg",
      "smallImage": "img/products/p7-small.jpg"
    },
    {
      "title": "Notebooks",
      "largeImage": "img/products/p8-large.jpg",
      "smallImage": "img/products/p8-small.jpg"
    },
    {
      "title": "Notebooks",
      "largeImage": "img/products/p9-large.jpg",
      "smallImage": "img/products/p9-small.jpg"
    }
  ]
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-4" style={{ 'padding': '10px' }}>
            <div class="embed-responsive embed-responsive-16by9">
              <video controls autoplay loop src="img/products/v1.mp4" class="embed-responsive-item"></video>
            </div>
          </div>
          <div class="col-12 col-md-4" style={{ 'padding': '10px' }}>
            <div class="embed-responsive embed-responsive-16by9">
              <video controls autoplay loop src="img/products/v2.mp4" class="embed-responsive-item"></video>
            </div>
          </div>
          <div class="col-12 col-md-4" style={{ 'padding': '10px' }}>
            <div class="embed-responsive embed-responsive-16by9">
              <video controls autoplay loop src="img/products/v3.mp4" class="embed-responsive-item"></video>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="products-items">
            {products
              ? products.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

