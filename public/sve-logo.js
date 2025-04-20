// This file generates a data URL for the SVE logo
// We're using this approach since we can't directly create binary files

export const sveLogo = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,50 L200,50 L300,100 L400,50 L500,50 L400,150 L300,150 L200,100 L100,150 L0,150 Z" fill="#0B5394" />
  <path d="M500,50 L600,50 L700,100 L800,50 L700,150 L600,150 L500,100 Z" fill="#F7941D" />
  <text x="400" y="190" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#0B5394">SHREE VENKATESH ENTERPRISES</text>
</svg>
`)}`;

export default sveLogo; 