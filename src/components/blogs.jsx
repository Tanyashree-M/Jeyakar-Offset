import React from "react";

export const Blogs = () => {
  const blogs = [
    {
      "img": "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?t=st=1724676049~exp=1724679649~hmac=ddf227661290d65ec4912ab9ede18464277facc7583cfc00338e1f67760835e3&w=1060",
      "name": "Blog Title",
      "job": "Author Name"
    },
    {
      "img": "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?t=st=1724676049~exp=1724679649~hmac=ddf227661290d65ec4912ab9ede18464277facc7583cfc00338e1f67760835e3&w=1060",
      "name": "Blog Title",
      "job": "Author Name"
    },
    {
      "img": "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?t=st=1724676049~exp=1724679649~hmac=ddf227661290d65ec4912ab9ede18464277facc7583cfc00338e1f67760835e3&w=1060",
      "name": "Blog Title",
      "job": "Author Name"
    },
    {
      "img": "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?t=st=1724676049~exp=1724679649~hmac=ddf227661290d65ec4912ab9ede18464277facc7583cfc00338e1f67760835e3&w=1060",
      "name": "Blog Title",
      "job": "Author Name"
    }
  ]
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row">
          {blogs
            ? blogs.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  {" "}
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
