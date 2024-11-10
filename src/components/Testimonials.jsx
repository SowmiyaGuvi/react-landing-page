import React from 'react';


function Testimonials() {
  return (
    <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {[{ name: 'Margaret E.', text: 'This is fantastic! Thanks so much guys!' },
              { name: 'Fred S.', text: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages." },
              { name: 'Sarah W.', text: 'Thanks so much for making these free resources available to us!' }].map((testimonial, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid rounded-circle mb-3" src={`public/img/testimonials-${index + 1}.jpg`} alt={testimonial.name} />
                    <h5>{testimonial.name}</h5>
                    <p className="font-weight-light mb-0">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
  );
}

export default Testimonials;