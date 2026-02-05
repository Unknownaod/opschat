"use client";

interface Props {
  title: string;
}

export default function TopBar({ title }: Props) {
  return (
    <div className="bg-gray-800 p-4 border-b border-gray-700 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
