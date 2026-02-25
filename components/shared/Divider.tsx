import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn("flex items-center justify-center py-12", className)}
      role="separator"
      aria-hidden="true"
    >
      {/* Left line */}
      <div className="h-px w-full max-w-[120px] bg-gradient-to-r from-transparent to-parchment" />

      {/* Center diamond */}
      <div className="mx-4 size-2 shrink-0 rotate-45 rounded-sm bg-amber" />

      {/* Right line */}
      <div className="h-px w-full max-w-[120px] bg-gradient-to-l from-transparent to-parchment" />
    </div>
  );
}
