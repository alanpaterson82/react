import "./App.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";

function App() {
  return <div className="App">
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass/>
      <EventBinding/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional/>

    </div>;
}

export default App;