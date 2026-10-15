export const RandomImageCard = ({ data }) => {
  return (
    <div className="product-grid">
      {data.map((user) => (
        <article className="product-card" key={user.id}>
          <div className="product-card-media">
            <img className="product-card-image" src={user.images[0]} alt={user.title} />
          </div>
          <div className="product-card-content">
            <p className="product-card-category">{user.category}</p>
            <h2 className="product-card-title">{user.title}</h2>
            <p className="product-card-description">{user.description}</p>
            <div className="product-card-details">
              <p>
                Brand <span>{user.brand}</span>
              </p>
              <p className="product-card-price">
                ${user.price}
              </p>
            </div>
            <p className="product-card-discount">{user.discountPercentage}% off</p>
          </div>
        </article>
      ))}
    </div>
  );
};
