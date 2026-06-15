import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16 border-t border-foreground/10 pt-16">
      <h3 className="text-2xl font-bold text-foreground mb-8">Project Gallery</h3>
      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {images.map((imgUrl, idx) => (
          <div 
            key={idx} 
            className="relative w-full overflow-hidden rounded-2xl glass-capsule shadow-lg group break-inside-avoid border border-white/5 dark:border-white/10"
          >
            <Image
              src={imgUrl}
              alt={`Project screenshot ${idx + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-accent-teal/0 group-hover:bg-accent-teal/10 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
