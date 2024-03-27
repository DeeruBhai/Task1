import React from "react";
import "./pagination.css";
function Pagination({ totalposts, postperpage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalposts / postperpage); i++) {
    pages.push(i);
  }
  // console.log(pages, totalposts, postperpage);
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        // console.log(page);
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
