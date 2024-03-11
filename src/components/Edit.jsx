import { useAtom } from "jotai";
import currentEdit from "../atoms/currentEdit";
import state from "../atoms/state";
import { useState } from "react";

const Edit = () => {
    const [editID, setEditID] = useAtom(currentEdit);

    const allActivitiesData = localStorage.getItem("DNP");
    const allActivities = allActivitiesData ? JSON.parse(allActivitiesData) : [];

    const curentEditObj = allActivities.filter(x => x.id === editID)[0];

    
    const [, setState] = useAtom(state);
    const [rate, setRate] = useState(curentEditObj.rate);
    const [visited, setVisited] = useState(curentEditObj.visited)

    const handleVisited = () => {
        visited ? setVisited(false) : setVisited(true);
    }

    const handleDelete = () => {
        const newActivityList = allActivities.filter( activity => activity.id != curentEditObj.id);
        localStorage.setItem("DNP", JSON.stringify(newActivityList));

        setState('all')
        setEditID('')
    }

    const handleSave = () => {
        const modifiedActivity = {
            name: curentEditObj.name,
            id: editID,
            rate: rate > 5 ? 5: rate,
            visited: visited,
            type: curentEditObj.type
        }

        
        const listBefore = allActivities.filter(activity => activity.id != editID);
        const newList = [...listBefore, modifiedActivity]
        localStorage.setItem("DNP", JSON.stringify(newList));

        setState('all')
        setEditID('')
    }

    return (  
        <div id="edit">
            <h2>{`Edit "${curentEditObj.name}"`}</h2>

            <div id="edit-container">
                
                    
                <div className="rate-input">
                    <label><h4>Rate</h4></label>
                    <input type="number" onChange={e => setRate(e.target.value)} value={rate}/>
                </div>
                <button onClick={() => handleVisited()}  className={visited ? 'btn selected': 'btn'}>Completed</button>
            </div>

            <div className="delete-save">
                <button className="btn delete" onClick={() => handleDelete(editID)}>Delete</button>
                <button className="btn" onClick={() => handleSave()}>Save</button>
            </div>
            


        </div>
    );
}
 
export default Edit;