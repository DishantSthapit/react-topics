import "./scrollTop.css";

export default function ScrollTop() {
  const colorArray = ["#ffffff", "#000000"];

  return (
    <div className="App">
      {Array(5)
        .fill(0)
        .map((a, i) => (
          <div
            key={i}
            style={{
              height: 200,
              backgroundColor: i % 2 === 0 ? colorArray[0] : colorArray[1]
            }}
          ></div>
        ))}
      <Button />
    </div>
  );
}

const Button = () => (
  <button
    onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
    className="button"
  >
    Up
  </button>
);
