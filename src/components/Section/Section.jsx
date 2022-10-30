import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

export default Section;
