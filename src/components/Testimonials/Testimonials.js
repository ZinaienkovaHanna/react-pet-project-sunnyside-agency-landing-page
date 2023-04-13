import Testimonial from '../Testimomial/Testimonial';
import testimonials from '../../data/testimonials';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <>
      <h3>CLIENT TESTIMONIALS</h3>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
