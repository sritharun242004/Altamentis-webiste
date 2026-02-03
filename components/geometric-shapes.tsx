export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-64 h-64 bg-altamentis-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-altamentis-cyan/10 rounded-full blur-3xl" />
    </div>
  );
}

export function HalfCircles({ position = "right" }: { position?: "left" | "right" }) {
  return (
    <div className={`absolute ${position === "right" ? "right-0" : "left-0"} top-1/4 -z-10 hidden lg:block`}>
      <div className="relative w-32 h-64">
        <div className="absolute top-0 right-0 w-24 h-48 bg-altamentis-cyan/20 rounded-l-full" />
        <div className="absolute bottom-0 right-8 w-24 h-48 bg-altamentis-sky/20 rounded-l-full" />
      </div>
    </div>
  );
}

export function RectangleAccent({ position = "left" }: { position?: "left" | "right" }) {
  return (
    <div className={`absolute ${position === "left" ? "left-0" : "right-0"} top-0 -z-10 hidden lg:block`}>
      <div className="w-48 h-96 bg-gradient-to-b from-altamentis-sky/10 to-transparent" />
    </div>
  );
}

export function CirclePattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-altamentis-cyan/30" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-altamentis-sky/30" />
      <div className="absolute bottom-32 left-1/4 w-5 h-5 rounded-full bg-altamentis-cyan/20" />
      <div className="absolute bottom-20 right-1/3 w-4 h-4 rounded-full bg-altamentis-sky/20" />
    </div>
  );
}
