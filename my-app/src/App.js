import "./App.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import LifeCyclesCDM from "./components/LifeCyclesCDM";

function App() {
  return <div className="App">
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass/>
      <EventBinding/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional/>
      <NestingComponents/>
      <MethodsAsPropsParent/>
      <RenderingLists/>
      <LifeCyclesCDM/>

    </div>;
}

export default App;