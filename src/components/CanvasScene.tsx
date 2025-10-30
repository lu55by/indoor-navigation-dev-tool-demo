import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import ControlledGrid from "./ControlledGrid.tsx";
import WallDrawer from "./WallDrawer.tsx";
import DrawPreview from "./DrawPreview.tsx";
import Walls from "./Walls.tsx";

export default function CanvasScene() {
    return (
        <Canvas camera={{position: [10, 20, 10]}}>
            <OrbitControls/>
            <ControlledGrid/>
            {/*<Environment preset="sunset"/>*/}
            <directionalLight position={[2, 2, 0]} color="#eee"/>
            {/*<ambientLight intensity={10}/>*/}
            <WallDrawer/>
            <DrawPreview/>
            <Walls/>
        </Canvas>
    );
};