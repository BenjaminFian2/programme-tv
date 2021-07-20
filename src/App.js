import "./App.css";

import img from "./assets/img/logo_m6.jpg";
import data from "./assets/data/data.json";

import TimeSlot from "./components/TimeSlot";

function App() {
  return (
    <div className="App">
      <div>
        <img src={img} alt="logo m6" />
        <p>M6</p>
      </div>
      {data.map((elem, index) => {
        return (
          <div>
            <TimeSlot
              key={index}
              num={index}
              time={elem.time}
              title={elem.title}
              type={elem.type}
              duration={elem.duration}
              image={elem.image}
              isUnseen={elem.isUnseen}
              direct={elem.direct}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
