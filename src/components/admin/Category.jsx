// eslint-disable-next-line react/prop-types
export const Category = ({ name, urlIcon }) => {

  


  return (
      <a href={`#${name}`} className="category-btn">
      <p className="text-category">{name}</p>
      <img src={urlIcon} alt="Hamburguesa" className="icon-category" />
      </a>
  );
};
