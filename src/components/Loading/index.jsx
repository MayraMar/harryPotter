import Spinner from 'react-bootstrap/Spinner';
import styles from "./Loading.module.css"

export default function Loading (){
return (
    <div>
        <h2>Loading...</h2>
        <Spinner style={{ width: '10rem', height: '10rem' }} animation="grow" />;
       
    </div>
)
}