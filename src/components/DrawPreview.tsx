import {useWallStore} from "../stores/wallStores.ts";
import {Line} from "@react-three/drei";

export default function DrawPreview() {
    const {points, mode} = useWallStore();
    if (mode !== "drawing" || points.length < 1) return null;

    const positions = points.map((p) => [p.x, 0, p.z]) as [number, number, number][];
    return <Line points={positions} color="orange" lineWidth={2}/>;
}