import FloatingBadge from "@/components/ui/FloatingBadge";

interface ICoursesBadgeProps {
  className?: string;
}

export default function CoursesBadge({ className }: ICoursesBadgeProps) {
  return (
    <FloatingBadge className={className}>
      <span className="rounded bg-brand-primary-light px-1.5 py-1 text-[10px] font-bold text-brand-primary">
        120+
      </span>
      <span className="text-[10px] font-semibold text-text-primary">
        expert-led courses
      </span>
    </FloatingBadge>
  );
}
