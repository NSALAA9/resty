import { Link } from "react-scroll";
import "./History.scss";

function History({ history, renderHistory, updateUrl }) {
  return (
    <section id="History">
      {renderHistory === true && (
        <div>
          <h2>History</h2>
          {history.map((item, index) => (
            <div key={index}>
              {console.log("this is from history", item.config)}
              <h3>Request {index + 1}</h3>

              <div>Request Method: {item.config.method}</div>

              <div>
                URL:
                <Link to="scrollUp" spy={true} smooth={true}>
                <button
                  className="his-btn"
                  onClick={() => {
                      {" "}
                      {updateUrl(item.config.url)}
                    }}
                    >
                  {item.config.url}
                </button>
                  </Link>
              </div>
           
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default History;