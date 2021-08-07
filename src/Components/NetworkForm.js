import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
import Information from './Information';
//import "./styles.css";



export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = data => <DisplayForm data = {data}/>
    const onSubmit = data => {
        let pleasework = data;
       return pleasework
    }
        console.log(errors);

        console.log(onSubmit())
    
                return (

            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <TextField type="text" {...register("Hostname", { required: true, maxLength: 15 })} id="outlined-basic" label="Hostname" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel id="Domain Lookup">Domain Lookup</InputLabel>
                            <Select {...register("Domain Lookup")}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type="text" {...register(" Enable Secret", {})} id="outlined-basic" label="Enable Secret" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel>Logging Synchronous</InputLabel>
                            <Select {...register("Logging Synchronous")}>
                                <option value="Enable">Enable</option>
                                <option value="Disable">Disable</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                {/* <Information userdata = {data}/> */}

                <p>{onSubmit.Hostname} </p>

                
                <input type="submit" value="submit" />

            </form>
        );
    }