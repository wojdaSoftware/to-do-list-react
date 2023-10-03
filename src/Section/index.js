import './style.css';

const Section = ({title, extraHeaderContent, body}) => (
    <section className="section">
        <header className={`section__header ${extraHeaderContent ? "section__header--extraContent" : ""}`}>
            <h2 className="section__title">{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;