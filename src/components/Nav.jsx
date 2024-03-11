import { useAtom } from "jotai";
import state from "../atoms/state";
const Nav = () => {
    const [currentState, setCurrentState] = useAtom(state)
    return (  
        <nav>
            <ul>
                <li className={currentState === 'random' ? 'active': undefined} onClick={() => setCurrentState('random')}>Random</li>
                <li className={currentState === 'all' ? 'active': undefined} onClick={() => setCurrentState('all')}>All Activities</li>
                <li className={currentState === 'add' ? 'active': undefined} onClick={() => setCurrentState('add')}>Add Activity</li> 
            </ul>
        </nav>
    );
}
 
export default Nav;