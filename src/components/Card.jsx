/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div className="card">
      <a href={props.link}>
        <img src={props.poster} alt="" width={250} height={300} />
      </a>
    </div>
  );
}

export default Card;
