import React, { useState } from 'react';

const FilterComponent = ({ onFilter, onClear }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilterChange = () => {
        const filters = {};
        if (minPrice) filters.minPrice = minPrice;
        if (maxPrice) filters.maxPrice = maxPrice;

        onFilter(filters);
    }

    const handleClearFilters = () => {
        setMinPrice('');
        setMaxPrice('');
        onClear();
    }

    return (
        <div className="filter-container">
            <input
                type="number"
                placeholder="Min Fiyat"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="filter-input"
            />
            <input
                type="number"
                placeholder="Max Fiyat"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="filter-input"
            />
            <button onClick={handleFilterChange} className="filter-button">Filtrele</button>
            <button onClick={handleClearFilters} className="clear-button">Filtreyi kaldır</button>
        </div>
    );
}

export default FilterComponent;
