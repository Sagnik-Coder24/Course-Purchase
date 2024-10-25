import "./App.css";
import Coursesales from "./Components/Coursesales";
import courses from "./assets/courses.json";

function App() {
  return (
    <>
      <div className="header">
        <h1>Welcome to Course Purchase Page</h1>
      </div>

      <Coursesales items={courses} />
    </>
  );
}

export default App;
