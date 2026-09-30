import './App.css';
import Task from './components/Task';

function App() {
  return (
        <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" discription="Empty dishwasher" /> 
         <Task title="Laundry" deadline="Tomorrow"discription="fold laundry"/>
      <Task title="Tidy" deadline="Today" discription="clean room" />
    </div>
  );
}

export default App;


