/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './styles/article.css';

const Article = (props) => {
  const {
    title, description, date, link,
  } = props;

  return (
    <>
      <div className="homepage-article">
        <div className="homepage-article-content">
          <div className="homepage-article-date">
            |&nbsp;&nbsp;&nbsp;
            {date}
          </div>
          <div className="homepage-article-title">{title}</div>
          <div className="homepage-article-description">
            {description}
          </div>
          <div className="homepage-article-link">
            <Link to={link}>
              Read article
              {' '}
              <FontAwesomeIcon
                style={{ fontSize: '10px' }}
                icon={faChevronRight}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Article.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Article;
