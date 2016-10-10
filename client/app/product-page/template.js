/**
 * Templates should be stateless and "dumb". No logic here please.
**/

import React from 'react';
import styles from 'product-page/styles.css';

CcProductTemplate.propTypes = {
  description: React.PropTypes.string,
  selectedImage: React.PropTypes.string,
  id: React.PropTypes.string,
  images: React.PropTypes.array,
  name: React.PropTypes.string,
  onAddToCart: React.PropTypes.func,
  onImageClick: React.PropTypes.func,
  price: React.PropTypes.string,
};

function CcProductTemplate(
  {
    description,
    selectedImage,
    images,
    name,
    onAddToCart,
    onImageClick,
    price,
  }
) {
  return (
    <div>
      <div className="row">
        <div className="col col-xs-6 col-md-4">
          <img
            className={`img-thumbnail img-responsive ${styles.featureImage}`}
            alt={name} src={selectedImage}
          />
          {images && images.map((image, index) =>
            <div key={index} className="col col-xs-6">
              <img
                className={`${styles.thumb} ${styles.link}`}
                alt={name}
                src={image}
                onClick={onImageClick}
              />
            </div>
          )}
        </div>
        <div className="col col-xs-6 col-md-8">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className={`text-info ${styles.price}`}>{price}</div>
          <button className="btn btn-success" onClick={onAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default CcProductTemplate;
