import { useEffect, useState } from 'react';
import { getUsers } from 'services/api/usersApi';
import UsersList from './UsersList';
import { LIMIT_DATA } from 'services/constants';
import s from './Users.module.css';

const Users = ({ filter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    setPage(1);
    setUsers([]);
  }, [filter]);

  useEffect(() => {
    const getUsersInfo = async () => {
      const usersData = await getUsers(filter, page);

      if (usersData.length === 0) {
        setIsShowBtn(false);
        return;
      }

      if (page === 1) {
        setUsers(usersData);
      }

      if (page > 1 && usersData.length < LIMIT_DATA) {
        setUsers(prevData => [...prevData, ...usersData]);
        setIsShowBtn(false);
        return;
      }

      if (page > 1) {
        setUsers(prevData => [...prevData, ...usersData]);
      }

      setIsShowBtn(true);
    };

    getUsersInfo();
  }, [filter, page]);

  const updateUser = (id, updatedUser) => {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === id) {
          return { ...user, ...updatedUser };
        }
        return user;
      });
    });
  };

  return (
    <div>
      <UsersList users={users} updateUser={updateUser} />

      {isShowBtn && (
        <button
          type="button"
          className={s.btnLoadMore}
          onClick={() => setPage(prevPage => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Users;
