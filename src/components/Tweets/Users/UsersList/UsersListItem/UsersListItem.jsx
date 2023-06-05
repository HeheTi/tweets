import PropTypes from 'prop-types';
import s from './UsersListItem.module.css';
import { useEffect, useState } from 'react';
import { changeFollowing } from 'services/api/usersApi';

const UsersListItem = ({
  id,
  avatar,
  followers,
  isFollowing,
  tweets,
  user,
  updateUser,
}) => {
  const handleFollowClick = async () => {
    try {
      const dataForUpdate = {
        avatar,
        followers: isFollowing ? followers - 1 : followers + 1,
        isFollowing: !isFollowing,
        tweets,
        user,
      };
      const updatedUser = await changeFollowing(id, dataForUpdate);
      if (updatedUser) {
        updateUser(id, updatedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className={s.item}>
      <p>{user}</p>
      <div>
        <img src={avatar} alt={user} />
      </div>
      <p>{tweets} tweets</p>
      <p>
        {followers.toLocaleString('en-US', { useGrouping: true })} followeres
      </p>
      <button type="button" onClick={handleFollowClick}>
        {isFollowing ? 'following' : 'follow'}
      </button>
    </li>
  );
};

UsersListItem.propTypes = {};

export default UsersListItem;
