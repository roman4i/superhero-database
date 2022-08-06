import './images-list-style.css';
import ImagesListImage from './ImagesListImage';

const ImagesList = ({ imgs, setChangedData, disSave }) => {
  const ImagesCollection = imgs.map((val, ind) => {
    return <ImagesListImage src={val} key={ind} changeImages={setChangedData} disSave={disSave} />
  });

  return(
    <div className='imagesContainer'>
      { ImagesCollection }
    </div>
  );
}

export default ImagesList;
