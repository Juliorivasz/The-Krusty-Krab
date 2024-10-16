
// eslint-disable-next-line react/prop-types
export const Category = ({name, urlIcon}) => {
  return (
    <button className="category-btn"><img src={urlIcon} alt="Hamburguesa" className="iconosVarios"/>{name}</button>
  )
}
