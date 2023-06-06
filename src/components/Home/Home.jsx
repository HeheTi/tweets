import photo from 'image/Are-My-Social-Media-Efforts-Producing-Any-Results.jpg';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Tweets App</h1>
      <div className={s.wrapperImg}>
        <img src={photo} alt="example tweets mobile" />
      </div>
    </div>
  );
};

export default Home;
