import { useState } from 'react';
import { listProducts } from '../helpers/products';
import '../assets/styles/Search.css';

export const Search = () => {
  const [search, setSearch] = useState("");

  const allProducts = [
    ...listProducts.listBurgers,
    ...listProducts.listPizzas,
    ...listProducts.listEmpanadas,
    ...listProducts.listSnacks,
    ...listProducts.listHelados,
    ...listProducts.listBebidas
  ];

  const filteredProducts = !search
    ? []
    : allProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="top-bar">
      <input
        type="search"
        placeholder="Buscar producto..."
        className="search-bar"
        value={search}
        onChange={handleSearch}
      />

      {search && (
        <div className="search-results">
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index} className="search-item">
                <div className='container-img-search-item'><img src={product.image} alt={product.title} className="search-item-image" /></div>
                <div className="search-item-details">
                  <div className="search-item-info">
                    <span className="search-item-name">{product.title}</span>
                    <span className="search-item-description">{product.detail || 'No description available'}</span>
                  </div>
                  <span className="search-item-price">${product.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};