import styles from './Testimonial.module.css';

const Testimonial = ({ name, job, img, text, id }) => {
  return (
    <div className={styles.id}>
      <img src={`../images/${img}`} alt={name} />
      <p>{text}</p>
      <h4>{name}</h4>
      <h5>{job}</h5>
    </div>
  );
};

export default Testimonial;
