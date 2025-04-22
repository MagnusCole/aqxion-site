export default function Loop() {
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">AQXION LOOP™</h2>
      <div className="w-full max-w-[600px] mx-auto">
        <svg width="600" height="140" viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`text { font-family: var(--font-inter), sans-serif; font-size: 14px; fill:#FFFFFF; }
            rect { fill:#C4A24F; }`}
          </style>
          <rect x="10" y="20" width="160" height="60" rx="6"/>
          <text x="90" y="55" textAnchor="middle" fill="#FFFFFF">ACQUIRE</text>
          <rect x="220" y="20" width="160" height="60" rx="6"/>
          <text x="300" y="55" textAnchor="middle" fill="#FFFFFF">ACCELERATE</text>
          <rect x="430" y="20" width="160" height="60" rx="6"/>
          <text x="510" y="55" textAnchor="middle" fill="#FFFFFF">CONSOLIDATE</text>
          <polygon points="180,50 220,50 220,45 180,45" fill="#FFFFFF"/>
          <polygon points="390,50 430,50 430,45 390,45" fill="#FFFFFF"/>
          <path d="M510 90 A200 200 0 0 1 90 90" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
          <polygon points="95,90 90,90 90,85" fill="#FFFFFF"/>
        </svg>
      </div>
      <p className="mt-4 text-lg font-sans text-text">Acquire → Accelerate → Consolidate</p>
    </div>
  );
}