import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./styles.css";



export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={1}>

                <TextField type="text" {...register("Hostname", { required: true, maxLength: 15 })} id="outlined-basic" label="Hostname" variant="outlined" />

                <FormControl>
                    <InputLabel id="Domain Lookup">Domain Lookup</InputLabel>
                    <Select {...register} labelId="Domain Lookup">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>
                
                <TextField type="text" {...register(" Enable Secret", {})} id="outlined-basic" label="Enable Secret" variant="outlined" />
                
                <FormControl> 
                    <InputLabel>Logging Synchronous</InputLabel>
                    <Select {...register}>
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                    </Select>
                </FormControl>

            </Grid>
            

            <input type="submit" value="submit"/>

        </form>
    );
}