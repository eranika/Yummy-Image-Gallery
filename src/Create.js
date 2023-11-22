import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [imgsrc, setImgsrc] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const dish = {name, imgsrc, dateCreated};

        setIsPending(true);
        fetch('http://localhost:8000/images',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dish)
        })
        .then(() => {
            console.log("new dish added!");
            setIsPending(false);
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add New Photos</h2>
            <form onSubmit={handleSubmit}>
                <label>Dish Name: 
                    <input 
                    type="text" 
                    required
                    value={ name }
                    onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>Image: 
                <input 
                    type="file" 
                    required
                    // value={ img }
                    onChange={(e) => setImgsrc(URL.createObjectURL(e.target.files[0]))}/>
                    <img src={imgsrc} />
                    {}
                </label>
                { !isPending && <button>Add Dish</button> }
                { isPending && <button disabled>Adding Dish</button> }
            </form>
        </div>
    );
}
 
export default Create;
// 