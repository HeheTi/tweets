import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Users from './Users';
import Filter from './Filter';
import storage from 'services/localStorage';
import s from './Tweets.module.css';
import { FILTER_BY_FOLLOWING, LS_KEY_FILTER } from 'services/constants';

const Tweets = () => {
  const [filter, setFilter] = useState(
    () => storage.get(LS_KEY_FILTER) || FILTER_BY_FOLLOWING.showAll
  );

  useEffect(() => {
    storage.save(LS_KEY_FILTER, filter);
  }, [filter]);

  return (
    <div>
      <div className={s.flexWrapper}>
        <Link to="/">Go home</Link>
        <Filter setFilter={setFilter} filter={filter} />
      </div>

      <Users filter={filter} />
    </div>
  );
};

export default Tweets;
