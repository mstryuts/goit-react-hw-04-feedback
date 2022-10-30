import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ changeValue, options }) => (
  <ul className={css.btnList}>
    {options.map(o => (
      <li key={nanoid()} className={css.btnItem}>
        <button className={css.btn} onClick={() => changeValue(o)}>
          {o}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  changeValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
