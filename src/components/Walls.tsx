import {useWallStore} from "../stores/wallStores.ts";
import {useId} from "react";

export default function Walls() {
    const {walls} = useWallStore();
    const id = useId()
    if (!walls.length) return null;
    return (
        <>
            {walls.map((mesh, i) => (
                <primitive key={`wall-${id}-${i}`} object={mesh}/>
            ))}
        </>
    );
}