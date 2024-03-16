import { useState } from "react";

const HIW = () => {
    const [showHIW, setShowHIW] = useState(false);

    const showHIWBody = () => {
        if (showHIW) {
            setShowHIW(false);
        }else {
            setShowHIW(true);
        }
    };

    return (  
        <div id="how-it-works">
            <div id="hiw-title">
                <h2 onClick={showHIWBody}>How It Works <i className={showHIW ? "fa-solid fa-chevron-down HIWOpened" : "fa-solid fa-chevron-down HIWClosed"}></i></h2>
                
            </div>

            <div id="hiw-body" className={showHIW ? "HIWBodyShown" : "HIWBodyHidden"}>

                <p>
                    Welcome to Date Night Picks! This web application is
                    designed to make planning your date nights a breeze.
                    Follow these steps to get started:
                </p>
                <br />
                <h3>1. Random Activity Picker:</h3>
                <p>
                    Click on the &quot;Random Activity&quot; option to receive a
                    unique suggestion for your date night plans. Choose
                    between activities, restaurants, or both, and let Date
                    Night Picks surprise you with exciting recommendations.
                </p>
                <br />
                <h3>2. Add New Activities or Restaurants:</h3>
                <p>
                    Easily expand your list by navigating to the &quot;Add
                    Activity&quot; page. Input the name and type of the
                    activity/restaurant, and Date Night Picks will handle
                    the rest. Your newly added entries will be available
                    for future date nights.
                </p>
                <br />
                <h3>3. View All Activities:</h3>
                <p>
                    Explore all the activities and restaurants you&apos;ve added
                    to Date Night Picks on the &quot;All Activities&quot; page. Filter
                    the list based on completion status, type, or view all
                    entries at once. Effortlessly manage and organize your
                    date night plans with ease.
                </p>
                <br />
                <h3>4. Edit Activities:</h3>
                <p>
                    Have a change of plans or want to update an activity&apos;s
                    details? Navigate to the &quot;All Activities&quot; page and click
                    on the activity you wish to edit. From there, you can
                    rate the activity or mark it as completed by toggling
                    the checkboxes. All changes are automatically saved
                    to your local storage, ensuring your updates are
                    persistent across sessions.
                </p>
                <br />
                <p>
                    That&apos;s it! Start planning your memorable date nights
                    now with Date Night Picks. Click on the navigation bar
                    options to access different features and make the most
                    out of your date nights.
                </p>
        </div>
        </div>
    );
}
 
export default HIW;