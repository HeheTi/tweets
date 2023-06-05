import axios from 'axios';
import { ENDPOINTS, FILTER_BY_FOLLOWING, LIMIT_DATA } from 'services/constants';

const instanceAxios = axios.create({
  baseURL: 'https://647defaaaf984710854aa392.mockapi.io',
});

export const getUsers = async (
  filter = FILTER_BY_FOLLOWING.showAll,
  page = 1,
  limit = LIMIT_DATA
) => {
  try {
    const url = `${ENDPOINTS.USERS}?${
      filter.length > 0 ? filter + '&' : ''
    }page=${page}&limit=${limit}`;
    const { data } = await instanceAxios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const changeFollowing = async (id, userData) => {
  try {
    const { data } = await instanceAxios.put(
      `${ENDPOINTS.USERS}/${id}`,
      userData
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
