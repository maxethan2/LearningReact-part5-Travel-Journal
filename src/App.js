import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import data from "./data"

const cards = data.map(data => {
  return <>
    <Card 
      title={data.title}
      location={data.location}
      googleMapsUrl={data.googleMapsUrl}
      description={data.desciption}
      endDate={data.endDate}
      startDate={data.startDate}
      imageUrl={data.imageUrl}
    />
    <img src='../Images/Line.png' className='line-seperator'></img>
  </>
})

function App() {
  console.log(data)
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
