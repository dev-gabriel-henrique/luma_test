import { Star } from "lucide-react";

import FloatingBadge from "@/components/ui/FloatingBadge";

const RATING_STARS = 5;

interface IRatingBadgeProps {
  className?: string;
}

export default function RatingBadge({ className }: IRatingBadgeProps) {
  return (
    <FloatingBadge className={className}>
      <span
        className="flex gap-1 text-star"
        role="img"
        aria-label={`${RATING_STARS} out of ${RATING_STARS} stars`}
      >
        {Array.from({ length: RATING_STARS }, (_, index) => (
          <Star key={index} size={12} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className="text-[15px] text-text-primary">4.9 avg rating</span>
    </FloatingBadge>
  );
}
