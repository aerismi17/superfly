import React, {useState} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';

function App() {
  //state
  const[city, setCity] = useState('')
  const[weather, setWeather] = useState({})
  //api key and url

  const apiKey = process.env.REACT_APP_API_KEY
  //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  async function getWeather(){
    let url = 'https://api.openweathermap.org/data/2.5/weather'
    url += '?q=' + city
    url += '&appid=' + apiKey
    const r = await fetch(url)
    const j = await r.json()
    if(j.weather) {
      setWeather(j.weather)
    }
  }

  return (
    <div className= "App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Nunito+Sans:wght@200;300;400;600;700;800;900"></link>
      <div className = 'header'>
        <div className = 'links'>
          <div className = 'logo'/>
          <a class = 'active' href = '#home'>SUPERFLY</a>
          <a href= '#discord'>DISCORD</a>
          <a href= '#team'>TEAM</a>
          <a href= '#leaderboard'>LEADERBOARD</a>
          <a href= '#contact'>CONTACT</a>
        </div>

        <div className = 'weather'>
          YOUR CITY: 
          <TextField id = 'city' variant="standard" color = 'secondary' style = {{width: '100px'}}
            value = {city} onChange = {e=> setCity(e.target.value)} autoFocus
            onKeyPress = {e => e.key=== 'Enter' && getWeather()}
          />
          {weather && weather.length > 0 && <div className = 'weatherIcon'>
            {weather && weather.map(m=> {
              const img = m.icon
              return <img src = {`http://openweathermap.org/img/w/${img}.png`} alt = '' />
            })} 
          </div>}
        </div>
      </div>

      <div className = 'main'>
        <p className = 'tagline'>Be a hero. Save your city.</p>
        <div className = 'brand'>SUPERFLY</div>
        <div className = 'container'>
          <a className = 'playNowButton' href= "#storelink">PLAY NOW</a>
        </div>
      </div>

      <div className = 'aboutTheGame'>
        <div className = 'descrip'>
          <header className = 'about'>about the game</header>
          <header className = 'summaryTag'>DEFY THE LIMITS</header>
          <p className = 'summary'>
            Superfly is an open-world action sandbox game where you play as a superhero who can switch between six different movement modes. Discover new forms of locomotion as you experiment with pairs of movement modes and explore the city any way you would like. Use each mode’s unique abilities to fight the army of robots invading the city.
          </p>
        </div>
        <div className = 'trailer'>
          <iframe id = 'superflytrailer' title = 'superflytrailer' 
            width="560" height="315" src="https://www.youtube.com/embed/Kc-hB9E0UF8" frameborder = '0' />
        </div>
      </div>
    </div>
  );
}

export default App;
