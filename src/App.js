import "./styles.css";
import Img from "./Img.jsx";
import Header from "./Header.jsx";
import Details from "./Details.jsx";

export default function App() {
  return (
    <>
      <div className="App">
        <Img url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN7gmPjPlMRK9U8vTWt-sxwbODuri7Ikg1w&usqp=CAU" />
      </div>

      <div className="des">
        <Header title="Pepperoni Pizza" />
        <p style={{ fontSize: "25px", color: "gray" }}>
          Premium pepperoni and cheese is made with real mozzarella on original
          hand-tossed crust.
        </p>
        <Details
          cal="256 Cal"
          pfc="12/10/31"
          deg="53.8"
          price="$23.90"
          minPrice="$29.90"
        />
      </div>
    </>
  );
}
