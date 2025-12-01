import { cn } from "@/lib/utils";

export function Block({
  containerClassName,
  contentClassName,
  children,
}: {
  containerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(containerClassName)}>
      <div
        className={cn("mx-auto max-w-[1440px] p-4 md:p-6", contentClassName)}
      >
        {children}
      </div>
    </div>
  );
}
