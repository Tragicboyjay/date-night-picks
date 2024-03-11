import { useState } from "react";

const Picker = () => {
    const [choice, setChoice] = useState('Click the button for a Random choice!');
    const [activity, setActivity] = useState('resto');

    const getRandomChoice = () => {
        let randomIndex;
        let randomActivity;

        const allActivitiesData = localStorage.getItem("DNP");
        const allActivities = allActivitiesData ? JSON.parse(allActivitiesData) : [];

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
                <option value="resto">Restaurants</option>
                <option value="activity">Activities</option>
                <option value="both">Both</option>
            </select>

            <button
                onClick={getRandomChoice}
                className="btn"
            >Get Random Choice!</button>
        </div>

        
    );
}
 
export default Picker;