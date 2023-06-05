import PropTypes from 'prop-types';
import UsersListItem from './UsersListItem';
import s from './UserList.module.css';

const UsersList = ({ users = [], updateUser }) => {
  return (
    <div>
      {users.length > 0 && (
        <ul className={s.list}>
          {users.map(({ id, avatar, followers, isFollowing, tweets, user }) => (
            <UsersListItem
              key={id}
              id={id}
              avatar={avatar}
              followers={followers}
              isFollowing={isFollowing}
              tweets={tweets}
              user={user}
              updateUser={updateUser}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
