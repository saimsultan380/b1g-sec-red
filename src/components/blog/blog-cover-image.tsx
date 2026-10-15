import Image from "next/image";
import { ImageIcon } from "lucide-react";

type BlogCoverImageProps = {
  src: string | null;
  alt: string;
  /** Compact height for blog cards */
  compact?: boolean;
};

export function BlogCoverImage({ src, alt, compact = false }: BlogCoverImageProps) {
  const frameClass = compact
    ? "relative w-full aspect-[16/10] overflow-hidden rounded-[10px] bg-slate-100 border border-slate-200 mb-4"
    : "relative w-full aspect-[16/9] overflow-hidden rounded-[12px] bg-slate-100 border border-slate-200";

  if (src) {
    return (
      <div className={frameClass}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={
            compact
              ? "(max-width: 768px) 100vw, 33vw"
              : "(max-width: 768px) 100vw, 800px"
          }
          priority={!compact}
        />
      </div>
    );
  }

  return (
    <div
      className={`${frameClass} flex flex-col items-center justify-center gap-2 text-slate-400`}
      role="img"
      aria-label={alt}
    >
      <ImageIcon className={compact ? "h-8 w-8" : "h-10 w-10"} strokeWidth={1.5} />
      <span className="text-xs sm:text-sm font-semibold">Image placeholder</span>
    </div>
  );
}
