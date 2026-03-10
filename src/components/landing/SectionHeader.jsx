import { COLORS, FONTS } from "../../constants/theme";

export default function SectionHeader({ tag, title, sub }) {
  return (
    <div className="text-center mb-10">
      {tag && (
        <p
          className="text-sm tracking-widest uppercase mb-2"
          style={{ color: COLORS.GREEN_LIGHT }}
        >
          {tag}
        </p>
      )}
      <h2
        className="text-3xl font-bold mb-3"
        style={{ color: COLORS.GREEN_DARK }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
