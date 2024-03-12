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
        else {
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

        setError({
            error: false,
            msg: ''
        });

        if (activityinput === '') {
            setError({
                error: true,
                msg: 'Please enter a value before submitting'
            })

            return;
        }

        const activites = []
        activityinput.split('\n').map(activity => {
            const newActivity = {
                id: generateRandomId(),
                name: activity.toUpperCase(),
                visited: false,
                rate: null,
                type: restaurantChecked ? 'restaurant' : 'activity'
            }
            activites.push(newActivity)

        })


        const newActivitiesList = [...allActivities,...activites];
        localStorage.setItem("DNP", JSON.stringify(newActivitiesList));

       
        setActivityInput('')
        

    }

    return (  
        <form id="add" onSubmit={handleSubmit}>
            <h2>Add an Activity or Restaurant</h2>
            <p className="error">{error.msg}</p>
            <textarea 
                type="text"
                value={activityinput}
                onChange={e => setActivityInput(e.target.value)}
            ></textarea>
            <p>To add multiple activities, please enter each activity on a separate line</p>

            <div id="checks">
                <button
                    onClick={() => handleCheckbox('activity')}
                    type="button"
                    className={activityChecked ? "btn selected": "btn"}
                    style={{width: '5rem'}}
                >Activity</button>

                <button 
                    onClick={() => handleCheckbox('restaurant')} 
                    type="button"
                    className={restaurantChecked ? "btn selected": "btn"}
                    style={{width: '5rem'}}
                >Restaurant</button>  
            </div>
            <button style={{width: '4rem'}}  className="btn" type="submit">Add</button>
        </form>
    );
}
 
export default Add;