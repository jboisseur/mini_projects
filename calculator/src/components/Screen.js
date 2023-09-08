import "./Screen.css";

const Screen = ({value}) => {
    return (
        <div className="screenWrapper">
          <div id="display">{value}</div>
          <div id="history"></div>
        </div>
    );
};

export default Screen