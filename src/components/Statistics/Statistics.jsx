import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className={css.statList}>
    <li className={css.statItem}>
      <p className={css.statText}>Good:{good}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Neutral:{neutral}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Bad:{bad}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Total:{total}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Positive feedback:{percentage}%</p>
    </li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
