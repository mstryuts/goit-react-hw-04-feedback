import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <div>
    <h2 className={css.title}>{message}</h2>
  </div>
);

export default Notification;
