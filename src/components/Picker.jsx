import { useState } from "react";

const Picker = () => {
    const allActivitiesData = localStorage.getItem("DNP");
    let allActivities = allActivitiesData ? JSON.parse(allActivitiesData) : [];
    allActivities = allActivities.filter(activity => !activity.visited);

    

    const [choice, setChoice] = useState(
        allActivities.length > 1 ?
        'Tap the button to receive a random activity suggestion' :
        "To start receiving random activity suggestions, please add activities to your list"
    );
    const [buttonDisabled,] = useState(allActivities.length < 1 ? true : false)
    const [activity, setActivity] = useState('both');

    const getRandomChoice = () => {
        let randomIndex;
        let randomActivity;
        
        const restaurants = allActivities.filter(activity => activity.type === 'restaurant');
        const activities = allActivities.filter(activity => activity.type === 'activity');
        

        switch (activity) {
            case 'resto':
                if (restaurants.length < 1) {
                    setChoice('Please add some restaurants to get a random choice')
                    break;
                }
                randomIndex = Math.floor(Math.random() * restaurants.length);
                randomActivity = restaurants[randomIndex];
                setChoice(randomActivity.name);
                break;

            case 'activity':
                if (activities.length < 1) {
                    setChoice('Please add some activities to get a random choice')
                    break;
                }
                randomIndex = Math.floor(Math.random() * activities.length);
                randomActivity = activities[randomIndex];
                setChoice(randomActivity.name);
                break;

            case 'both':
                if (allActivities.length < 1) {
                    setChoice('Please add some activities to get a random choice')
                    break;
                }
                randomIndex = Math.floor(Math.random() * allActivities.length);
                randomActivity = allActivities[randomIndex];
                setChoice(randomActivity.name);
                break;
        }   
    }

    return (  
        <div id="picker">
            <h1>{choice}</h1>

            <select
                onChange={e => setActivity(e.target.value)}
                value={activity}
                id="activitySelect"
            >   
                <option value="both">Both</option>
                <option value="resto">Restaurants</option>
                <option value="activity">Activities</option>
                
            </select>

            <button
                disabled={buttonDisabled}
                onClick={getRandomChoice}
                className="btn"
            >Get Random Choice!</button>
        </div>

        
    );
}
 
export default Picker;