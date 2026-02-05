"use client";

interface Props {
  src?: string;
  size?: number;
  alt?: string;
}

export default function Avatar({ src, size = 40, alt = "avatar" }: Props) {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt={alt}
      className="rounded-full object-cover"
      width={size}
      height={size}
    />
  );
}
