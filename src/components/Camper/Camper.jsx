import css from './Camper.module.css';

const Camper = ({ item }) => {
  return (
    <>
      <picture>
        <source
          srcSet={item.gallery.original}
          type="image/webp"
        />
        <img
          src={item.gallery.original}
          alt={item.description}
        />
      </picture>
      <div>
        <h2>{item.name}</h2>
      </div>
    </>
  );
};

export default Camper;
