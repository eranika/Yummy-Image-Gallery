import ImgList from "./ImgList";
import useFetch from "./useFetch";
// import Records from './db.json';
// import { Link } from 'react-router-dom'


const Gallery = () => {

    const { data:imgs, isPending, error } = useFetch('http://localhost:8000/images');
    return ( 
        <div className="gallery">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { imgs && <ImgList pass = {imgs} /> }  
        </div>
     );
 }
 
export default Gallery;