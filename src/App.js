import './App.css';
import Profile from './profile/Profile';
function App() {
const name = "Tarek"
const biographie = "Looking for new opportunities"
const job = "Civil Engineer"
const fn = () => alert(name)
 
  return (

    <div className="App">
      <Profile fullname={name} bio={biographie} profession={job} age = {28} greeting={fn} ><img src="/ProfilePhoto.jpg" width="500"></img></Profile>
    </div>
  );
}

export default App;
