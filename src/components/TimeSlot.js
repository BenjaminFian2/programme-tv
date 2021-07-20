const TimeSlot = (props) => {
  return (
    <div className="TimeSlot">
      <p className="time">{props.time}</p>
      <img src={props.image} alt={`programme ${props.num + 1}`} />
      <div>
        <p className="title">{props.title}</p>
        <p className="type">{props.type}</p>
        <p className="details">
          <span className="duration">{props.duration}</span>
          <span className="alert">
            {props.isUnseen && "Inédit"}
            {props.direct && "Direct"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TimeSlot;
