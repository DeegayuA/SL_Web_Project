import { Suspense } from 'react';
import { GlobeDemo } from '../Map';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';

export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background-darker"> {/* Full screen */}
            <ThemeSwitcher />
    
      <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-white">Loading Experience...</div>}>
<GlobeDemo/>  
    </Suspense>
    </div>
  );
}