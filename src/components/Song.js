import "./Song.css";

function Song(props) {
  return (
    <div className="song">
      <a href={props.link}>
        <img src={props.image} alt={props.name} />
        <span>{props.name}</span>
      </a>
    </div>
  );
}

export default Song;
