import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Ioannis Karadimos",
    location: "Trikala, Gr",
    email: "karadimos.giannis@gmail.com",
    availability: "Open for work",
    brand:
      "With a strong foundation in HTML, CSS, JavaScript and experience with various frontend frameworks, I enjoy creating user-friendly interfaces that are both visually appealing and efficient.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
