import Title from '../Title/Title';
import Divider from '../Divider/Divider';
import PageNav from '../PageNav/PageNav';
import HeroCardBox from '../HeroCardBox/HeroCardBox';
import './app.css';

function App() {
  return (
    <div className='appBox'>
      <Title />
      <Divider />
      <PageNav />
      <HeroCardBox />
    </div>
  );
}

export default App;
