import { useState } from "react";

const Add = () => {
    const allActivitiesData = localStorage.getItem("DNP");
    const allActivities = allActivitiesData ? JSON.parse(allActivitiesData) : [];

    const [activityinput, setActivityInput] = useState('');

    const [activityChecked, setActivityChecked] = useState(true);
    const [restaurantChecked, setRestaurantChecked] = useState(false);

    const [error, setError] = useState({
        error: false,
        msg: ''
    });

    const handleCheckbox = which => {
        if (which === 'activity') {
            setActivityChecked(true)
            setRestaurantChecked(false)
        }
        else if (which === 'restaurant') {
            setActivityChecked(false)
            setRestaurantChecked(true)
        }
    }

    //generate random id
    const generateRandomId = (length = 8) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (activityinput === '') {
            setError({
                error: true,
                msg: 'Please enter a value before submitting'
            })

            return
        }

        if (restaurantChecked) {

            const newRestaurant = {
                id: generateRandomId(),
                name: activityinput.toUpperCase(),
                visited: false,
                rate: null,
                type: 'restaurant'
            }

            const newActivitiesList = [...allActivities,newRestaurant];
            localStorage.setItem("DNP", JSON.stringify(newActivitiesList));
        }

        if (activityChecked) {

            const newActivity = {
                id: generateRandomId(),
                name: activityinput.toUpperCase(),
                visited: false,
                rate: null,
                type: 'activity'
            }

            const newActivitiesList = [...allActivities,newActivity];
            localStorage.setItem("DNP", JSON.stringify(newActivitiesList));
        }

        if (!error.error) {
            setActivityInput('')
        }

    }

    return (  
        <form id="add" onSubmit={handleSubmit}>
            <h2>Enter an Activity or Restaurant</h2>
            <p className="error">{error.msg}</p>
            <input 
                type="text"
                value={activityinput}
                onChange={e => setActivityInput(e.target.value)}
            />

            <div id="checks">
                <input 
                    type="checkbox"
                    checked={activityChecked}
                    onChange={() => handleCheckbox('activity')} 
                />
                <label>Activity</label>

                <input 
                    type="checkbox"
                    checked={restaurantChecked}
                    onChange={() => handleCheckbox('restaurant')} 
                />
                <label>Restaurant</label>  
            </div>
            <button className="btn" type="submit">Add</button>
        </form>
    );
}
 
export default Add;