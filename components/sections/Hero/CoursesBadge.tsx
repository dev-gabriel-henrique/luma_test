import FloatingBadge from "@/components/ui/FloatingBadge";

interface ICoursesBadgeProps {
  className?: string;
}

export default function CoursesBadge({ className }: ICoursesBadgeProps) {
  return (
    <FloatingBadge className={className}>
      <span className="rounded-md bg-brand-primary-light px-2 py-1 text-[15px] font-bold text-brand-primary">
        120+
      </span>
      <span className="text-[15px] text-text-primary">expert-led courses</span>
    </FloatingBadge>
  );
}
