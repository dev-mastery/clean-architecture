import React from 'react';
import styles from 'product-list-item/styles.css';

CcProductListItemTemplate.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  addToCart: React.PropTypes.func,
  price: React.PropTypes.string,
  shortDescription: React.PropTypes.string,
};

function CcProductListItemTemplate({
  id,
  name,
  image,
  shortDescription,
  onClickProduct,
  price,
}) {
  return (
    <div
      key={id}
      className={`col col-xs-8 col-xs-offset-2 col-sm-offset-0 col-sm-4 ${styles.link}`}
      onClick={onClickProduct}
    >
      <img src={image} alt={name} className="img-responsive" />
      <h5 className={styles.name}>{name}</h5>
      <div className={`text-info ${styles.price}`}>{price}</div>
      <small>{shortDescription}</small>
    </div>
  );
}

export default CcProductListItemTemplate;
