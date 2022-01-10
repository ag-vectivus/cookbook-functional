import React from 'react';
import makeArrayFromNumber from '../../helpers/makeArrayFromNumber';
import paginationEventHandler from '../../service/paginationEventHandler';

const Pagination = ({ ...props }) => {
  const { pages, selected } = props;

  const pagesArray = makeArrayFromNumber(pages);
  const handleChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const value =
      target.innerText.length < 5
        ? target.innerText
        : paginationEventHandler(target.innerText, selected, pagesArray);
    props.handleSelected(Number(value));
  };

  return (
    <React.Fragment>
      {pages !== 0 ? (
        <ul className="pagination center-align">
          <li>
            <a href="#!" onClick={(e) => handleChange(e)}>
              <i className="material-icons">first_page</i>
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => handleChange(e)}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {pagesArray.map((page) => {
            return (
              <li
                className={`${page !== selected ? 'waves-effect' : 'active'}`}
              >
                <a href="#!" onClick={(e) => handleChange(e)}>
                  {page}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#!" onClick={(e) => handleChange(e)}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => handleChange(e)}>
              <i className="material-icons">last_page</i>
            </a>
          </li>
        </ul>
      ) : null}
    </React.Fragment>
  );
};

export default Pagination;
