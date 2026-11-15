import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface AvatarDTO {
  src: string;
  alt: string;
}

interface IAvatarGroupProps {
  avatars: AvatarDTO[];
  className?: string;
}

export default function AvatarGroup({ avatars, className }: IAvatarGroupProps) {
  return (
    <ul className={twMerge("flex -space-x-2", className)}>
      {avatars.map((avatar) => (
        <li
          key={avatar.src}
          className="relative size-8 overflow-hidden rounded-full border-2 border-background"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes="32px"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
