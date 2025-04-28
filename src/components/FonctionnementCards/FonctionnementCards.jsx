import "./fonctionnementCards.scss"

export default function FonctionnementCards({ className, text }) {
  return (
    <li className="fonctionnementCards_container">
      <div>
        <i className={className}></i>
        <p>{text}</p>
      </div>
    </li>
  );
}
