import { Suspense } from 'react';
import { GlobeDemo } from '../Map';

export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background-darker"> {/* Full screen */}
    
      <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-white">Loading Experience...</div>}>
<GlobeDemo/>  
    </Suspense>
    </div>
  );
}