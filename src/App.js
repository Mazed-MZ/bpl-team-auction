import './App.css';
import fakeData from './fakeData.json';
import Header from './components/Header/Header';
import PlayerData from './components/PlayerData/PlayerData';
import TeamDraft from './components/TeamDraft/Team';
import { useState } from 'react';

function App() {

  const [player, setPlayer] = useState([]);
  const playerInfo = fakeData;
  const handlePlayer = (data) => {
    // const newPlayer = [...playerInfo]
    // const samePlayer = newPlayer.find(info => info.id === newPlayer.id)
    setPlayer(data);
  }


  return (
    <div className="App">
      <Header></Header>
      <div>
        {
          playerInfo.map(data => <PlayerData pd={data} key={data.id} handlePlayer={handlePlayer} ></PlayerData>)
        }
      </div>
      <div className='auction-div'>
        <TeamDraft player={player}></TeamDraft>
      </div>
    </div>
  );
}

export default App;
