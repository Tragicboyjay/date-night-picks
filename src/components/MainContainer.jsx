import Picker from "./Picker"
import Add from "./Add"
import { useAtom } from "jotai";
import state from "../atoms/state";
import All from "./All";
import Edit from "./Edit";

const MainContainer = () => {
    const [currentState, ] = useAtom(state);
    return (  
        <div id="main-container">
            {currentState === 'random' && <Picker />}
            {currentState === 'add' && <Add />}
            {currentState === 'all' && <All />}
            {currentState === 'edit' && <Edit />}
            
        </div>
    );
}
 
export default MainContainer;