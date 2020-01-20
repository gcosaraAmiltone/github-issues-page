import React from 'react';
import ReactMarkdown from'react-markdown';
import PropTypes from 'prop-types';

const IssueDetail = ({ id, data }) => {
    console.log(id);
    const pageContent = data.find(issue=>issue.id == id);

    console.log(pageContent);
    

      
    
    return (
        <div>
             <ReactMarkdown className="markdown" source={pageContent.body}/>
            
        </div>
    )
};

IssueDetail.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
};

export default IssueDetail;
