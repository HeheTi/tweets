import React, { useState } from 'react';
import s from './Filter.module.css';
import { FILTER_BY_FOLLOWING } from 'services/constants';
import { ReactComponent as FilterIcon } from 'image/equalizer.svg';
import PropTypes from 'prop-types';

const showSelectedText = filter => {
  switch (filter) {
    case FILTER_BY_FOLLOWING.showAll:
      return 'Show all';

    case FILTER_BY_FOLLOWING.follow:
      return 'Follow';

    case FILTER_BY_FOLLOWING.followings:
      return 'Followings';

    default:
      break;
  }
};

const Filter = ({ setFilter, filter }) => {
  const [isShowFilter, setIsShowFilter] = useState(false);

  const handleFilterClick = current => {
    setFilter(current);
    setIsShowFilter(false);
  };

  return (
    <div className={s.wrapperFilter}>
      <div className={s.wrapperSelectedFilter}>
        <p
          className={s.selectedFilter}
          onClick={() => setIsShowFilter(prevState => !prevState)}
        >
          {showSelectedText(filter)}
        </p>
        <button
          type="button"
          onClick={() => setIsShowFilter(prevState => !prevState)}
          className={s.btnFilter}
        >
          <FilterIcon />
        </button>
      </div>

      {isShowFilter && (
        <ul className={s.filterList}>
          <li
            onClick={() => handleFilterClick(FILTER_BY_FOLLOWING.showAll)}
            className={s.item}
          >
            Show all
          </li>
          <li
            onClick={() => handleFilterClick(FILTER_BY_FOLLOWING.follow)}
            className={s.item}
          >
            Follow
          </li>
          <li
            onClick={() => handleFilterClick(FILTER_BY_FOLLOWING.followings)}
            className={s.item}
          >
            Followings
          </li>
        </ul>
      )}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Filter;
