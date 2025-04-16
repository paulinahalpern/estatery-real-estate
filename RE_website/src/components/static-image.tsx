interface StaticImageProps {
  img: string;
  className?: string;
  alt: string;
}

export function StaticImage({ img, className, alt }: StaticImageProps) {
  return <img src={img} className={className} alt={alt} />;
}
