import './images-list-style.css';
import ImagesListImage from './ImagesListImage';

const ImagesList = ({ imgs }) => {
  const ImagesCollection = imgs.map((val, ind) => {
    <ImagesListImage src={val} key={ind} />
  });

  return(
    <div>
      { ImagesCollection }
    </div>
  );
}

export default ImagesList;
