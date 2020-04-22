import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    ul {
        min-width: 100px;
        max-width: 180px;
        display: inline-block;
        padding: 1em;

        li:not(:first-child) {
            margin-top: 0.3em;
        }
    }

    li {
        line-height: 1.5;
        color: #3e77aa;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            color: #ff7878;
            text-decoration: underline;
            transition: 0.3s;
        }
    }

    .li-active {
        color: #ff7878;
        text-decoration: underline;
    }
`;

const Categories = ({categories, selectedCategory, selectCategory, setFilter}) => {
    return (
        <Styles>
            <ul>{categories && categories.map((category) => 
                <li key={category.id}
                    className={(category.id === selectedCategory) ? 'li-active': ''}
                    onClick={()=>{selectCategory(category.id); setFilter('category')}}
                >{category.title}</li>)}
            </ul>
        </Styles>
    );
};

export default Categories;
