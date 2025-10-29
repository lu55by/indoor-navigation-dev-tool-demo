import * as THREE from 'three';
import {useWallStore} from "../stores/wallStores.ts";
import {WallHeight, WallWidth} from "../constants";

export default function WallControls() {
    const {setMode, clearPoints, points, addWall, clearWalls} = useWallStore();

    const handleStart = () => {
        console.log('drawing');
        setMode("drawing");
        document.body.style.cursor = "crosshair";
    };

    const handleCancel = () => {
        setMode("idle");
        document.body.style.cursor = "auto";
        clearPoints();
    };

    const handleGenerate = () => {
        if (points.length < 2) return;

        for (let i = 0; i < points.length - 1; i++) {
            const a = points[i];
            const b = points[i + 1];

            const dx = b.x - a.x;
            const dz = b.z - a.z;
            const length = Math.sqrt(dx * dx + dz * dz);

            const geometry = new THREE.BoxGeometry(WallWidth, WallHeight, length);
            const material = new THREE.MeshBasicMaterial({color: "#aaa"});
            const wall = new THREE.Mesh(geometry, material);

            // 中点
            wall.position.set((a.x + b.x) / 2, WallHeight / 2, (a.z + b.z) / 2);
            // 旋转
            wall.rotation.y = Math.atan2(dx, dz);
            addWall(wall);
        }

        document.body.style.cursor = "auto";
        clearPoints();
        setMode("idle");
    };

    return (
        <div
            // style={{
            //     position: "absolute",
            //     top: 20,
            //     left: 20,
            //     display: "flex",
            //     flexDirection: "column",
            //     gap: 8,
            // }}
            // className="absolute top-2 left-2 flex flex-col gap-2"
            className="flex flex-col gap-2"
        >
            <button onClick={handleStart}>开始绘制</button>
            <button onClick={handleCancel}>取消绘制</button>
            <button onClick={handleGenerate}>生成墙体</button>
            <button onClick={clearWalls}>清空所有墙体</button>
        </div>
    );
}