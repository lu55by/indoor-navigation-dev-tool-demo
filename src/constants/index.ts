import * as THREE from 'three';

export type Mode = "idle" | "drawing";

export interface WallPoint {
    x: number;
    z: number;
}

export interface WallStore {
    mode: Mode;
    points: WallPoint[];
    walls: THREE.Mesh[];
    setMode: (mode: Mode) => void;
    addPoint: (point: WallPoint) => void;
    clearPoints: () => void;
    addWall: (mesh: THREE.Mesh) => void;
    clearWalls: () => void;
}

export const WallWidth = 1
export const WallHeight = 2