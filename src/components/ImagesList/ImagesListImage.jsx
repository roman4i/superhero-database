import './images-list-style.css';
import deleteIcon from '../../images/trash_can.png';

const ImagesListImage = ({ src, changeImages, disSave }) => {
  const onDeleteImg = () => {
    changeImages(old => {
      const data = old.images.filter(val => val !== src);
      return {
        ...old,
        images: data,
      };
    });
    disSave(false);
  }

  return (
    <div>
      <img className='imageFromList' src={'http://localhost:3001/' + src} />
      <input 
        className='deleteImgBtn' 
        type="image" 
        src={deleteIcon} 
        alt="delete" 
        onClick={onDeleteImg} 
      />
    </div>
  );
}

export default ImagesListImage;
