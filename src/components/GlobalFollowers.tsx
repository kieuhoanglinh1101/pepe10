import CircularGallery from '@/components/CircularGallery';

const GALLERY_ITEMS = [
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%2015_23_48%2030%20thg%207,%202026.webp',
    text: 'Instagram @pepe.official 2.1M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_49_48%20PM.webp',
    text: 'TikTok @pepe.dance 1.8M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_51_37%20PM.webp',
    text: 'YouTube Pepe Channel 940K',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_52_12%20PM.webp',
    text: 'X @pepe 1.2M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_46_19%20PM.webp',
    text: 'Telegram Pepe Army 560K',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_53_16%20PM.webp',
    text: 'Discord Pepe Lounge 780K',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%2015_22_19%2030%20thg%207,%202026.webp',
    text: 'Instagram Reels 1.3M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/ChatGPT%20Image%20Jul%2030,%202026,%2002_53_48%20PM.webp',
    text: 'TikTok Viral 2.7M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/webp%201/ChatGPT%20Image%20Jul%2030,%202026,%2002_54_55%20PM.webp',
    text: 'Meme Drops 4.1M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/webp%201/ChatGPT%20Image%20Jul%2030,%202026,%2002_56_14%20PM.webp',
    text: 'Trending Now 1.9M',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/webp%201/ChatGPT%20Image%2015_00_25%2030%20thg%207,%202026.webp',
    text: 'Community Event',
  },
  {
    image: 'https://ik.imagekit.io/zznoau6lx/PEPE/webp%201/ChatGPT%20Image%20Jul%2030,%202026,%2002_57_09%20PM.webp',
    text: 'Pepe Forever',
  },
];

function InstagramIcon() {
  return (
    <img
      src="https://ik.imagekit.io/zznoau6lx/PEPE/bieu-tuong-instagram-logo-huy-hieu-hien-dai_578229-124%20(1).webp"
      alt="Instagram"
      className="object-contain"
      style={{ width: '26px', height: '26px' }}
    />
  );
}

function TikTokIcon() {
  return (
    <img
      src="https://ik.imagekit.io/zznoau6lx/PEPE/tiktok-logo.webp"
      alt="TikTok"
      className="object-contain"
      style={{ width: '24px', height: '24px' }}
    />
  );
}

function YouTubeIcon() {
  return (
    <img
      src="https://ik.imagekit.io/zznoau6lx/PEPE/youtube-logo-youtube-icon-transparent-free-png.webp"
      alt="YouTube"
      className="object-contain"
      style={{ width: '28px', height: '28px' }}
    />
  );
}

function XIcon() {
  return (
    <img
      src="https://ik.imagekit.io/zznoau6lx/PEPE/x-logo-minimalist-monochrome-x-logo-2PEkUhZB-Photoroom.webp"
      alt="Twitter"
      className="object-contain"
      style={{ width: '22px', height: '22px' }}
    />
  );
}

export function GlobalFollowers() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-32 pt-0 imp-section"
    >
      {/* Background — flat dark green, no glow */}
      <div className="absolute inset-0 imp-bg-base" />
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Heading + social row — centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span
            className="text-green-400 mb-2"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              letterSpacing: '0.05em',
            }}
          >
            5,000,000+
          </span>
          <h2
            className="leading-[0.9]"
            style={{
              fontFamily: '"Luckiest Guy", cursive',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              letterSpacing: '0.01em',
              color: '#fafff4',
              textShadow:
                '0 2px 0 #166534,' +
                '0 4px 0 #14532d,' +
                '0 6px 8px rgba(0,0,0,0.6),' +
                '0 0 40px rgba(86,242,123,0.45)',
            }}
          >
            GLOBAL FOLLOWERS
          </h2>

          {/* Social platform row — official icon + platform name */}
          <div className="flex items-center justify-center gap-10 mt-8">
            {[
              { Icon: InstagramIcon, name: 'Instagram', font: '"Billabong", "Segoe Script", "Comic Sans MS", cursive' },
              { Icon: TikTokIcon, name: 'TikTok', font: '"TikTok Display", "Montserrat", "Arial Black", sans-serif' },
              { Icon: YouTubeIcon, name: 'YouTube', font: '"Helvetica Neue", Arial, sans-serif' },
              { Icon: XIcon, name: 'Twitter', font: '"Chirp", "Helvetica Neue", Arial, sans-serif' },
            ].map(({ Icon, name, font }, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Icon />
                <span
                  className="text-white"
                  style={{
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: name === 'YouTube' ? '0.03em' : '0.01em',
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive circular gallery — full width */}
      <div className="relative z-10 w-full" style={{ height: '60vh', minHeight: '400px' }}>
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={0.8}
          textColor="#56F27B"
          borderRadius={0.04}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
}
