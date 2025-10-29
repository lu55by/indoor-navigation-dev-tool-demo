import CanvasScene from "./components/CanvasScene.tsx";
import {Leva} from "leva";
import WallControls from "./ui/WallControls.tsx";

function App() {

    return <div className="w-full h-full grid grid-cols-[10rem_1fr]">
        <Leva collapsed/>
        <WallControls/>
        <CanvasScene/>
    </div>
}

export default App
