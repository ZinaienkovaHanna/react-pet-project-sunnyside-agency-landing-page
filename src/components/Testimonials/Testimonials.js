import Testimonial from '../Testimomial/Testimonial';
import testimonials from '../../data/testimonials';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h3>CLIENT TESTIMONIALS</h3>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
