import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './issuesList.scss';

import TimeAgo from 'react-timeago';
//import frenchStrings from 'react-timeago/lib/language-strings/fr';
//import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

//const formatter = buildFormatter(frenchStrings);

function Issue({ title, number, created_at, id }) {
  console.log(id);
  
  return (
    <div className='issue'>
      <Link to={`/issue/${id}`} className="issue-link">
        <div className="issue-title">{title}</div>
        <div className="issue-number">#{number} opened <TimeAgo date={created_at} /></div>
      </Link>
    </div>
  );
}

Issue.propTypes = {
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
};

export default Issue;
