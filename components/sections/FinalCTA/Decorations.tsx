import { Box, Columns3, Droplet, MessageCircle } from "lucide-react";
import { ReactNode } from "react";

const VIEWBOX_HEIGHT = 470;

interface IDecorationsHalfProps {
  viewBoxX: number;
  anchor: "xMinYMid" | "xMaxYMid";
  className: string;
  children: ReactNode;
}

function DecorationsHalf({
  viewBoxX,
  anchor,
  className,
  children,
}: IDecorationsHalfProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`${viewBoxX} 0 640 ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio={`${anchor} slice`}
      className={`pointer-events-none absolute inset-y-0 h-full w-1/2 ${className}`}
    >
      {children}
    </svg>
  );
}

function LeftShapes() {
  return (
    <>
      <g className="fill-none stroke-orange" strokeWidth={2}>
        <circle cx={76} cy={70} r={54} />
        <rect
          x={322}
          y={46}
          width={56}
          height={56}
          rx={10}
          transform="rotate(-15 350 74)"
        />
      </g>

      <MessageCircle
        x={140}
        y={212}
        width={36}
        height={36}
        strokeWidth={0}
        className="fill-orange"
      />

      <g className="fill-orange">
        <rect
          x={-14}
          y={236}
          width={46}
          height={58}
          rx={10}
          transform="rotate(-10 9 265)"
        />
        <circle cx={116} cy={430} r={60} />
        <path
          transform="rotate(-8 322 410)"
          d="M308 388a6 6 0 0 1 6-6h14a8 8 0 0 1 8 8v8a8 8 0 0 1-4 7 8 8 0 0 1 4 7v8a8 8 0 0 1-8 8h-18a6 6 0 0 1-6-6Z"
        />
      </g>
    </>
  );
}

function RightShapes() {
  return (
    <>
      <g className="fill-none stroke-orange" strokeWidth={2}>
        <circle cx={893} cy={59} r={15} />
        <circle cx={1224} cy={444} r={15} />
        <path d="M1046 92V101M1026 102L1033 109M1067 102L1060 109M1020 125H1032M1060 125H1072" />
      </g>

      <Box
        x={1124}
        y={224}
        width={72}
        height={72}
        strokeWidth={1}
        className="hidden stroke-orange md:block"
      />
      <Columns3
        x={960}
        y={382}
        width={54}
        height={54}
        strokeWidth={1}
        className="stroke-orange"
      />

      <Droplet
        x={1030}
        y={92}
        width={32}
        height={32}
        strokeWidth={0}
        className="fill-orange"
      />

      <g className="fill-orange">
        <rect
          x={1150}
          y={-20}
          width={140}
          height={130}
          rx={14}
          transform="rotate(8 1220 45)"
        />
      </g>
    </>
  );
}

export default function Decorations() {
  return (
    <>
      <DecorationsHalf viewBoxX={0} anchor="xMinYMid" className="left-0">
        <LeftShapes />
      </DecorationsHalf>

      <DecorationsHalf viewBoxX={640} anchor="xMaxYMid" className="right-0">
        <RightShapes />
      </DecorationsHalf>
    </>
  );
}
