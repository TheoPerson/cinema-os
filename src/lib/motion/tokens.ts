export const motionDuration = {
  instant: 0.08,
  snap: 0.16,
  ui: 0.24,
  smooth: 0.42,
  cinematic: 0.72,
  ambient: 1.2
} as const;

export const motionSpring = {
  snappy: { type: "spring", stiffness: 360, damping: 28, mass: 0.55 },
  ui: { type: "spring", stiffness: 260, damping: 28, mass: 0.7 },
  gentle: { type: "spring", stiffness: 170, damping: 26, mass: 0.9 }
} as const;
