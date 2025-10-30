import * as THREE from 'three';
import {useWallStore} from "../stores/wallStores.ts";
import {WallHeight, WallWidth} from "../constants";
import Button from "./Button.tsx";

export default function WallControls() {
    const {mode, setMode, clearPoints, points, addWall, clearWalls} = useWallStore();

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
            // const material = new THREE.MeshBasicMaterial({color: "#aaa"});
            const material = new THREE.MeshPhysicalMaterial({color: "#aaa"});
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
        <div className="flex flex-col gap-2">
            <Button onClick={handleStart}>开始绘制</Button>
            <Button onClick={handleCancel}>取消绘制</Button>
            <Button onClick={handleGenerate}
                    cusClassName={`${(mode === "idle" || points.length < 2) ? "cursor-not-allowed bg-gray-500" : ""}`}>生成墙体</Button>
            <Button onClick={clearWalls}>清空所有墙体</Button>
        </div>
    );
}