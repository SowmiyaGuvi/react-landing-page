import React from 'react';
import {Container, Form} from 'react-bootstrap';

function ImageGrid() {
  return (
    <section className="showcase">
        <div className="container-fluid p-0">
          {[1, 2, 3].map((num, index) => (
            <div className="row g-0" key={index}>
              <div className={`col-lg-6 ${index % 2 === 0 ? '' : 'order-lg-2'} text-white showcase-img`} style={{ backgroundImage: `url('src/assets/img/bg-showcase-${num}.jpg')` }}></div>
              <div className={`col-lg-6 ${index % 2 === 0 ? '' : 'order-lg-1'} my-auto showcase-text`}>
                <h2>{num === 1 ? 'Fully Responsive Design' : num === 2 ? 'Updated For Bootstrap 5' : 'Easy to Use & Customize'}</h2>
                <p className="lead mb-0">
                  {num === 1
                    ? 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device.'
                    : num === 2
                    ? 'Newly improved, Bootstrap 5 is leading the way in mobile responsive web development!'
                    : 'Just add your content and images, and your new landing page will be ready to go!'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}

export default ImageGrid;