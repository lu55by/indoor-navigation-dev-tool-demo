import {useWallStore} from "../stores/wallStores.ts";
import {type ThreeEvent} from "@react-three/fiber";

export default function WallDrawer() {
    const {mode, addPoint} = useWallStore();
    // const { scene, camera } = useThree();

    // const handleClick = (e: THREE.Event) => {
    //     if (mode !== "drawing") return;
    //
    //     // 获取点击点（与地面交点）
    //     const raycaster = new THREE.Raycaster();
    //     const mouse = new THREE.Vector2(
    //         (e.nativeEvent.offsetX / e.target.clientWidth) * 2 - 1,
    //         -(e.nativeEvent.offsetY / e.target.clientHeight) * 2 + 1
    //     );
    //
    //     raycaster.setFromCamera(mouse, camera);
    //     const ground = scene.getObjectByName("ground") as THREE.Mesh;
    //     if (!ground) return;
    //
    //     const intersects = raycaster.intersectObject(ground);
    //     if (intersects.length > 0) {
    //         const point = intersects[0].point;
    //         addPoint({ x: point.x, z: point.z });
    //     }
    // };


    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        if (mode !== "drawing") return;
        e.stopPropagation();

        const point = e.point;
        addPoint({x: point.x, z: point.z});
    }

    return (
        <mesh
            name="ground"
            rotation-x={-Math.PI / 2}
            position={[0, 0, 0]}
            onClick={handleClick}
        >
            <planeGeometry args={[200, 200]}/>
            <meshBasicMaterial visible={false}/>
        </mesh>
    );
}