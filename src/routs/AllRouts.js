import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import TweetsPages from 'pages/TweetsPages';

const AllRouts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPages />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

export default AllRouts;
