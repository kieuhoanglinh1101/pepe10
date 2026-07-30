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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.3" fill="white" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5V8.5z" fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
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
              { Icon: InstagramIcon, name: 'Instagram' },
              { Icon: TikTokIcon, name: 'TikTok' },
              { Icon: YouTubeIcon, name: 'YouTube' },
              { Icon: XIcon, name: 'Twitter' },
            ].map(({ Icon, name }, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Icon />
                <span
                  className="text-white"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    letterSpacing: '0.02em',
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
