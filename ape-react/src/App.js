
import './App.css';
import TopBlock from './components/block1/topblock';
import Header from './components/Header/header';
import TablaVans from './components/table/table';




function App() {
  return (
    <div className="App">
      <Header/>
      {/* <TopBlock/> */}   
      <TablaVans/>  
    </div>
  );
}

export default App;
