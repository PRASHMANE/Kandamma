import { GALLERY_IMAGES } from "../config/galleryImages";

export default function ImageTape() {
  const strip = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const sec = Math.min(76, Math.max(36, GALLERY_IMAGES.length * 7));

  return (
    <section
      className="tape-wrap"
      aria-label="photo memories"
      style={{ '--tape-duration': `${sec}s` }}
    >
      <div className="tape-fade tape-fade-left" aria-hidden />
      <div className="tape-fade tape-fade-right" aria-hidden />
      <div className="tape-viewport">
        <div className="tape-track">
          {strip.map((src, i) => (
            <div key={`${src}-${i}`} className="tape-card">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
