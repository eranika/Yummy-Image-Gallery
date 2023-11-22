import { Link } from 'react-router-dom';

const ImgList = ( { pass } ) => {
   
    // console.log(pass)
    return (  
     <div className="imglist">
        {pass.map((img) => (
            <div className="image" key = { img.id }>
                {/* {console.log(img.imgsrc)} */}
                <Link to = {`/imgs/${img.id}`}>
                    <img src={ img.imgsrc } alt="image" />
                    <p>{img.name}</p> 
                </Link>
            </div>
        ))}
     </div>   
    );
}
 
export default ImgList;