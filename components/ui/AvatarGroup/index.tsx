import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface AvatarDTO {
  src: string;
  alt: string;
}

type AvatarSize = "sm" | "md";

interface IAvatarGroupProps {
  avatars: AvatarDTO[];
  size?: AvatarSize;
  borderClassName?: string;
  className?: string;
}

const avatarSizes: Record<AvatarSize, { box: string; pixels: number }> = {
  sm: { box: "size-8", pixels: 32 },
  md: { box: "size-9", pixels: 36 },
};

export default function AvatarGroup({
  avatars,
  size = "sm",
  borderClassName = "border-background",
  className,
}: IAvatarGroupProps) {
  const { box, pixels } = avatarSizes[size];

  return (
    <ul className={twMerge("flex -space-x-2", className)}>
      {avatars.map((avatar) => (
        <li
          key={avatar.src}
          className={`relative overflow-hidden rounded-full border-2 ${box} ${borderClassName}`}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes={`${pixels}px`}
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
