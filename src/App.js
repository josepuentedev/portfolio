import {
  Profile,
  Skills,
  Experience,
  Academic,
  Footer,
  Filter,
  Projects
} from "./components";

function App() {
  return (
    <div className="container">
      <Profile />
      <Skills />
      <Experience />
      <Filter />
      <Projects />
      <Academic />
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </div>
  );
}

export default App;
