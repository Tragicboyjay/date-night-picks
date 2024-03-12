import { useAtom } from "jotai";
// import data from "../atoms/data";
import state from "../atoms/state"
import { useState, useEffect} from "react";
import currentEdit from "../atoms/currentEdit";

const All = () => {
    const [, setState] = useAtom(state)
    const [allState, setAllState] = useState('completed');
    const [, setEditID] = useAtom(currentEdit);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setShowNav(windowWidth > 420);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const stars = number => {
        let stars = []
        for (let i = number; i > 0; i--){
            stars.push(<i style={{color: 'var(--accent)'}} className="fa-solid fa-star"></i>)
        }
        return stars
    };

    const handleEdit = id => {
        setState('edit')
        setEditID(id)
    }

    const handleShowNav = () => {
        showNav ? setShowNav(false) : setShowNav(true);
    }

    const allActivitiesData = localStorage.getItem("DNP");
    const allActivities = allActivitiesData ? JSON.parse(allActivitiesData) : [];

    const restaurants = allActivities.filter(activity => activity.type === 'restaurant');
    const activities = allActivities.filter(activity => activity.type === 'activity');
    

    return (  
        <div id="all">
            <h2>All Activities</h2>
            <nav id="all-nav">
                {windowWidth < 420 && <h3 onClick={() => handleShowNav()}><i style={{color: 'var(--accent)'}}  className="fa-solid fa-bars"></i></h3>}
                { showNav || windowWidth > 420 ?  
                    <ul>
                        <li className={allState === 'completed'? 'active': undefined} onClick={() => setAllState('completed')}>Completed</li>
                        <li className={allState === 'activities'? 'active': undefined} onClick={() => setAllState('activities')}>Activities</li>
                        <li className={allState === 'restaurants'? 'active': undefined} onClick={() => setAllState('restaurants')}>Restaurants</li>
                        <li className={allState === 'all'? 'active': undefined} onClick={() => setAllState('all')}>All</li>
                    </ul>
                : undefined}
            </nav>

            
            {allState === 'restaurants' && 
                <div className="all-container">
                    {restaurants.length > 0 ? restaurants.sort((a, b) => a.name.localeCompare(b.name)).map((activity) => {
                        return (
                            <div key={activity.id} className="all-row" onClick={() => handleEdit(activity.id)}>
                                {activity.visited ? <h4><i  style={{color: 'var(--accent)'}} className="fa-solid fa-circle"></i></h4> : <h4><i style={{color: 'var(--accent)'}} className="fa-regular  fa-circle"></i></h4>}
                                <h4>{activity.name}</h4>
                                <h4>{activity.rate === null || activity.rate < 1 ? '-': stars(activity.rate)}</h4>
                            </div>
                        )
                        })
                        : <h3>No Restaurants Found</h3>
                    } 
                </div>
            }
            {allState === 'activities' && 
                <div className="all-container">
                    {activities.length > 0 ? activities.sort((a, b) => a.name.localeCompare(b.name)).map((activity) => {
                        return (
                            <div key={activity.id} className="all-row" onClick={() => handleEdit(activity.id)}>
                                {activity.visited ? <h4><i  style={{color: 'var(--accent)'}} className="fa-solid fa-circle"></i></h4> : <h4><i style={{color: 'var(--accent)'}} className="fa-regular  fa-circle"></i></h4>}
                                <h4>{activity.name}</h4>
                                <h4>{activity.rate === null || activity.rate < 1 ? '-': stars(activity.rate)}</h4>
                            </div>
                        )
                        })
                        : <h3>No Activities Found</h3>
                    } 
                </div>
            }
            {allState === 'completed' && 
                <div className="all-container">
                    {allActivities.filter(activity => activity.visited).length > 0 ? allActivities.filter(activity => activity.visited).sort((a, b) => a.name.localeCompare(b.name)).map((activity) => {
                        return (
                            <div key={activity.id} className="all-row" onClick={() => handleEdit(activity.id)}>
                                {activity.visited ? <h4><i  style={{color: 'var(--accent)'}} className="fa-solid fa-circle"></i></h4> : <h4><i style={{color: 'var(--accent)'}} className="fa-regular  fa-circle"></i></h4>}
                                <h4>{activity.name}</h4>
                                <h4>{activity.rate === null || activity.rate < 1 ? '-': stars(activity.rate)}</h4>
                            </div>
                        )
                        })
                        : <h3>No Activities Completed</h3>
                    } 
                </div>
            }
            {allState === 'all' && 
                <div className="all-container">
                    {allActivities.length > 0 ? allActivities.sort((a, b) => a.name.localeCompare(b.name)).map((activity) => {
                       return (
                        <div key={activity.id} className="all-row" onClick={() => handleEdit(activity.id)}>
                            {activity.visited ? <h4><i  style={{color: 'var(--accent)'}} className="fa-solid fa-circle"></i></h4> : <h4><i style={{color: 'var(--accent)'}} className="fa-regular  fa-circle"></i></h4>}
                            <h4>{activity.name}</h4>
                            <h4>{activity.rate === null || activity.rate < 1 ? '-': stars(activity.rate)}</h4>
                        </div>
                       )
                    })
                    : <h3>No Activities Found</h3>
                    } 
                </div>
            }

            <button onClick={() => setState('add')} className="btn">ADD</button>
        </div>
    );
}
 
export default All;