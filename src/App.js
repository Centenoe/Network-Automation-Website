import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomepageHeader from './Components/HomepageHeader'
import UserImportSetting from './Components/UserImportSettings'
import Grid from '@material-ui/core/Grid';
import NetworkForm from './Components/NetworkForm';
import DisplayForm from './Components/DisplayForm';
import { useForm } from 'react-hook-form';
import Information from './Components/Information';



function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
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

            <UserImportSetting>
            </UserImportSetting>

        </Grid>



        <Grid item xs={6}>

          <DisplayForm>
          </DisplayForm>

        </Grid>

      </Grid>
      <Information/>
    </div>
  );
}

export default App;
