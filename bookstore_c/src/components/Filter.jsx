import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    height: 40px;
    margin: 0 1rem;
    display: flex;
    align-items: center;

    span {
        text-transform: uppercase;
        margin-right: 20px;
    }

    button, input {
        margin: 0 4px;
        padding: 4px 10px;
        color: #a9a9a9;
        border: 1px solid #a9a9a9;
        border-radius: 3px;
        &.btn-active {
            background-color: #ff7878;
            color: #fff;
            outline: none;
        }
    
        &.btn-regular {
            border: 1px solid #000;
        } 
    }
`;

const FilterButton = ({classN, filterBy, setFilter, selectCategory}) => {    
    const clickHandler = () => {
        if(filterBy === 'all') { selectCategory(0) }
        setFilter(filterBy);
    };

    return (
        <button className={classN} 
                onClick={()=>clickHandler()}>
            {filterBy}
        </button>
    );
}


const Filter = ({setFilter, setSearchQuery, searchQuery, filterBy, selectCategory}) => {    
    const filters = ['all', 'price high', 'price low', 'author'];

    return (
        <Styles>
            <span>Filter:</span>
            
            {filters.map(val => {
                    const classN = (filterBy === val) ? 'btn-active': 'btn-regular';
                    return (
                        <FilterButton 
                            key={val} 
                            classN={classN} 
                            filterBy={val} 
                            setFilter={setFilter} 
                            selectCategory={selectCategory} />
                    );
            })}

            <input 
                type="text"
                value={searchQuery} 
                placeholder="search product..."
                onChange={(e) => setSearchQuery(e.target.value)} />
        </Styles>
    );
};

export default Filter;
