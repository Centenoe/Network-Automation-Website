import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomepageHeader from './Components/HomepageHeader'
import UserImportSettingsCompnent from './Components/UserImportSettings'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <HomepageHeader>
          </HomepageHeader>
        </Grid>

        <Grid item xs={6}>
          <UserImportSettingsCompnent>
          </UserImportSettingsCompnent>
        </Grid>

      </Grid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
