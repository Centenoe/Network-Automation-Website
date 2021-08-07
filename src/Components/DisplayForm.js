import Test from "./NetworkForm";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {CopyToClipboard} from 'react-copy-to-clipboard'

console.log("test")
console.log()
const whateveryouwant = "data"


export default function DisplayForm() {
    return (
        <div>
            <h1> Copy to Config</h1>
            <p> {whateveryouwant} </p>
            <CopyToClipboard text = {whateveryouwant}>
            <Button variant="contained" color="primary" size="large">Copy</Button>
            </CopyToClipboard>
        </div>

    );
}