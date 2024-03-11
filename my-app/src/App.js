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
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import { SearchBar3 } from "./components/SearchBar3";

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
      <LifeCyclesCDU/>
      <LifeCyclesCWU/>
      <ControlledForm/>
      <UncontrolledForm/>
      <SearchBar3/>

    </div>;
}

export default App;