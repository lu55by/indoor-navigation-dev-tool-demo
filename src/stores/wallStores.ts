import {create} from "zustand";
import type {WallStore} from "../constants";

export const useWallStore = create<WallStore>((set) => ({
    mode: "idle",
    points: [],
    walls: [],
    setMode: (mode) => set({ mode }),
    addPoint: (p) => set((s) => ({ points: [...s.points, p] })),
    clearPoints: () => set({ points: [] }),
    addWall: (m) => set((s) => ({ walls: [...s.walls, m] })),
    clearWalls: () => set({ walls: [] }),
}));