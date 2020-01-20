import React from "react";
import PropTypes from "prop-types";
//import Pagination from "react-js-pagination";
import "./issuesList.scss";

import Issue from "./Issue";
import Pagination from "../App/Pagination";


function IssuesList({ data, paginate, totalItems, itemsPerPage
  //activePage, handlePageChange
 }) {
  return (
    <div className="issuesList">
      {data.map(issue => (
        <Issue {...issue} key={issue.id} />
      ))}
      <Pagination paginate={paginate} totalItems={totalItems} itemsPerPage={itemsPerPage} />
      {/* <Pagination
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        onChange={pageNumber => handlePageChange(pageNumber)}
      /> */}
    </div>
  );
}


IssuesList.propTypes = {
  data: PropTypes.array.isRequired,
  //activePage: PropTypes.number.isRequired,
  //handlePageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default IssuesList;
