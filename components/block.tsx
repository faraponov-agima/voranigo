import { cn } from "@/lib/utils";

export function Block({
  containerClassName,
  contentClassName,
  children,
  style,
}: {
  containerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn(containerClassName)} style={style}>
      <div
        className={cn("mx-auto max-w-[1440px] p-4 md:p-6", contentClassName)}
      >
        {children}
      </div>
    </div>
  );
}
