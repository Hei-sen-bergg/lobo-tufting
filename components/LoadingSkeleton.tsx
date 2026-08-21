import React from 'react';

export const SkeletonBlock: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-[#1C261C] rounded-2xl ${className}`} />
);

/** Full-page skeleton shown while Sanity data loads. */
export const PageSkeleton: React.FC = () => (
  <div className="py-32 px-6 max-w-7xl mx-auto space-y-16" aria-busy="true" aria-label="Loading">
    <div className="text-center space-y-4 flex flex-col items-center">
      <SkeletonBlock className="h-16 md:h-20 w-3/4 max-w-2xl" />
      <SkeletonBlock className="h-16 md:h-20 w-1/2 max-w-xl" />
      <SkeletonBlock className="h-6 w-2/3 max-w-lg" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonBlock key={i} className="aspect-square" />
      ))}
    </div>
  </div>
);

/** Grid-only skeleton for list pages whose header copy can render immediately. */
export const GridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div
    className="grid gap-10 pt-10"
    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
    aria-busy="true"
    aria-label="Loading items"
  >
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonBlock key={i} className="aspect-square" />
    ))}
  </div>
);
