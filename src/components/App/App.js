import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";

import Header from "../Header/Header";
import IssuesList from "../IssuesList/IssuesList";
import IssueDetail from "../IssuesList/IssueDetail";


import data from "../../data/issues";

function App() {
  const [state, setState] = useState({
    data,
    currentPage: 1,
    itemsPerPage: 6,
    //activePage: 1
  });
  console.log("data =>", state.data);

  // const handlePageChange = pageNumber => {
  //   console.log(`active page is ${pageNumber}`);
  //   setState({ activePage: pageNumber });
  // };

  const indexOfLastItem = state.currentPage * state.itemsPerPage; // 5
  const indexOfFirstItem = indexOfLastItem - state.itemsPerPage; // 0
  const currentItems =data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => () => setState({
    ...state,
    currentPage: pageNumber,
  });

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={()=> <IssuesList
                        data={currentItems}
                        itemsPerPage={state.itemsPerPage}
                        paginate={paginate}
                        totalItems={state.data.length}
                        //handlePageChange={pageNumber => handlePageChange(pageNumber)}
                        //activePage={state.activePage}
                      />
          }
          
        />
        <Route
          exact
          path="/issue/:id"
          render={(props)=>{
            const { id } = props.match.params;
            console.log(id);
            
            return (
            <IssueDetail id={id} data={data} />
              )
          }} 
        />
      </Switch>
      
    </div>
  );
}

export default App;
