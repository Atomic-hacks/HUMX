import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { COLORS, FONTS } from "../../constants/theme";
import { FOOTER_COLUMNS } from "../../constants/content";

const SOCIAL_ICONS_MAP = {
  f: FaFacebook,
  t: FaTwitter,
  in: FaLinkedin,
  ig: FaInstagram,
};

const IconComponent = SOCIAL_ICONS_MAP["f"];

export default function Footer() {
  return (
    <footer style={{ background: COLORS.GREEN_DARK }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-2xl font-bold mb-3" style={{}}>
            HUMX
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Redefining luxury hospitality with world-class amenities and
            personalised service since 2005.
          </p>
          <div className="flex gap-3">
            {Object.entries(SOCIAL_ICONS_MAP).map(([key, IconComponent]) => (
              <a
                key={key}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title={key}
              >
                {IconComponent && <IconComponent size={14} />}
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map((c) => (
          <div key={c.head}>
            <h4 className="text-white font-semibold mb-4 text-sm">{c.head}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
        © 2026 HUMX Resort. All rights reserved.
      </div>
    </footer>
  );
}
