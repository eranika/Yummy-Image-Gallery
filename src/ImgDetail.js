import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';


const ImgDetail = () => {
    const { id } = useParams();
    const { data: img, error, isPending } = useFetch('http://localhost:8000/images/' + id)
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/images/' + img.id,{
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="img-detail">
            { isPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { img && (
                <article>
                    <h2>{ img.name }</h2>
                    {console.log(img.imgsrc)}
                    <img src={ img.imgsrc } alt="img" />
                    <p>{ img.dateCreated }</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default ImgDetail;