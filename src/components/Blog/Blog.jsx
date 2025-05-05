import React from 'react';
import './blog.css';
import blogcards from '../../utils/blog-cards';
import BlogCard from './BlogCard/BlogCard';
import { useEffect, useState } from 'react';


function Blog(props) {
    const data = blogcards;
    const [isCountEl, setIsCountEl] = useState(0);
    const curData = data.slice(0, isCountEl);

    function handleAddCard() {
        if (window.innerWidth > 1440) {
            setIsCountEl(isCountEl + 4);
        } else if (window.innerWidth >= 834) {
            setIsCountEl(isCountEl + 3);
        } else if (window.innerWidth < 834) {
            setIsCountEl(isCountEl + 2);
        }
    }
    useEffect(() => {
        if (window.innerWidth > 1440) {
            setIsCountEl(8);
        } else if (window.innerWidth >= 834) {
            setIsCountEl(6);
        } else if (window.innerWidth < 834) {
            setIsCountEl(4);
        }
    }, [])

    return (
        <section className="blog" id='Blog'>
            <h2 className="section-title blog-title">Блог</h2>
            <div className="blog-cards-container">
                <ul className="blog-cards-list">
                    {curData.map((elem) => {
                        return <BlogCard
                            onCard={props.onCard}
                            cards={elem}
                            key={elem._id}
                        />
                    })}
                </ul>
                {data.length > isCountEl ?
                    <input type="button" value="Больше статей" className="blog-add" onClick={handleAddCard} />
                    : ""}

            </div>
        </section>
    );
}

export default Blog;
