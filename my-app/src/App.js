import "./App.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";

function App() {
  return <div className="App">
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass/>
    </div>;
}

export default App;