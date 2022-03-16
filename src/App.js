import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = { name: 'Dr.Mahfuz', job: 'singer' }
const singer2 = { name: 'Eva Rahman', job: 'singer2' }
const singers = [
  { name: 'Dr.Mahfuz', job: 'singer' },
  { name: 'Agun', job: 'Agun' },
  { name: 'Subhro', job: 'Pathor' },
  { name: 'Hridoy', job: 'caina meye' }
]
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappRaz', 'Bappi', 'Riaz', 'Jashim', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singar => <Family singer={singar.name}></Family>)
      }

      {/* <Person name={nayoks[0]} nayka="mousumi"></Person>
      <Person name="BappaRaz" nayka="cheka"></Person>
      <Person name={nayoks[2]} nayka="Kopila"></Person> */}
      <h5>New Component.YaY!!</h5>
      <p>rock mama .react mama</p>
      <Friend phone="01739874"></Friend>
      <Friend phone="02984744"></Friend>

      <h3>Ammu is Coming!!!</h3>
      <Family phone="01797334331"></Family>
      <Family style="Nadan jani kothakar!"></Family>
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>naiyka: {props.nayka}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className="container">
      <h3>Name:Sathi</h3>
      <p>job: Guraghuri</p>
      <p>phone: {props.phone}</p>
    </div>
  )
}

function Family(props) {
  console.log(props)
  return (
    <div className="family">
      <h2>Mother: Jahanara</h2>
      <h3>Family singer: {props.singer}</h3>
      <p>Job: boka deowa</p>
      <p>{props.phone}</p>
      <h3>Bokar style: {props.style} </h3>
    </div>
  )
}
export default App;
