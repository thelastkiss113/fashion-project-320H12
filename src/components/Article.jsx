// src/components/Article.js
import React from 'react';

function Article({ date, title, imgSrc, imgAlt, content }) {
  return (
    <article>
      <h1 className="date">{date}</h1>
      <h2>{title}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <p>{content}</p>
      <a href="#">Continues...</a>
    </article>
  );
}

export default Article;
