import styles from "./BackButton.module.css"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export const BackButton =()=>
{
    let history=useNavigate();
    return(
        <div className={styles.container}>
        <Button variant="dark" onClick={()=>history(-1)}>Back</Button>
        </div>
    )
}