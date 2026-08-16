/**
 * Fallback skyline for devices that skip the WebGL scene. Inline SVG, so it
 * costs no network request at all — the constrained devices that land here are
 * exactly the ones that should not be downloading a multi-megabyte photo.
 * Mirrors the 3D composition: mountains, a low-rise spread, the Namsan
 * silhouette on the left and the tapered supertall on the right.
 */
export default function StaticSkyline() {
  return (
    <svg
      viewBox="0 0 375 260"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "56%",
        display: "block",
      }}
    >
      {/* Mountain ring */}
      <path
        d="M0 176 L44 132 L82 168 L118 122 L164 172 L206 138 L248 174 L292 130 L330 170 L375 142 L375 260 L0 260 Z"
        fill="#071a3f"
        opacity="0.75"
      />

      {/* Namsan hill + N Seoul Tower */}
      <path d="M28 260 L74 186 L120 260 Z" fill="#05122f" />
      <rect x="71" y="150" width="6" height="40" fill="#05122f" />
      <path d="M66 150 L82 150 L78 142 L70 142 Z" fill="#05122f" />
      <rect x="66" y="136" width="16" height="7" rx="2" fill="#3f7fbf" />
      <rect x="72.6" y="112" width="2.8" height="26" fill="#05122f" />
      <circle cx="74" cy="110" r="2.4" fill="#ff4d5e" />

      {/* Tapered supertall */}
      <path d="M286 260 L292 118 L306 118 L312 260 Z" fill="#05122f" />
      <path d="M292 118 L306 118 L301 104 L297 104 Z" fill="#bfe3ff" opacity="0.8" />
      <circle cx="299" cy="100" r="2.2" fill="#ff4d5e" />

      {/* Low-rise spread */}
      <g fill="#0b1f45">
        <rect x="0" y="212" width="30" height="48" />
        <rect x="34" y="224" width="22" height="36" />
        <rect x="118" y="196" width="26" height="64" />
        <rect x="148" y="214" width="20" height="46" />
        <rect x="172" y="182" width="30" height="78" />
        <rect x="206" y="208" width="24" height="52" />
        <rect x="234" y="192" width="28" height="68" />
        <rect x="266" y="218" width="18" height="42" />
        <rect x="316" y="200" width="26" height="60" />
        <rect x="346" y="220" width="29" height="40" />
      </g>

      {/* Window glow — a sparse scatter is enough to read as a lit city */}
      <g fill="#ffd79a" opacity="0.55">
        <rect x="7" y="220" width="3" height="4" />
        <rect x="16" y="232" width="3" height="4" />
        <rect x="41" y="234" width="3" height="4" />
        <rect x="125" y="204" width="3" height="4" />
        <rect x="133" y="220" width="3" height="4" />
        <rect x="155" y="226" width="3" height="4" />
        <rect x="179" y="192" width="3" height="4" />
        <rect x="189" y="208" width="3" height="4" />
        <rect x="213" y="216" width="3" height="4" />
        <rect x="241" y="200" width="3" height="4" />
        <rect x="251" y="224" width="3" height="4" />
        <rect x="272" y="228" width="3" height="4" />
        <rect x="323" y="210" width="3" height="4" />
        <rect x="352" y="230" width="3" height="4" />
      </g>
      <g fill="#9fd4ff" opacity="0.45">
        <rect x="24" y="226" width="3" height="4" />
        <rect x="128" y="234" width="3" height="4" />
        <rect x="184" y="224" width="3" height="4" />
        <rect x="220" y="232" width="3" height="4" />
        <rect x="245" y="216" width="3" height="4" />
        <rect x="331" y="226" width="3" height="4" />
      </g>
    </svg>
  );
}
