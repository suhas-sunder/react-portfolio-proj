import React from 'react'

function handleScrollOffset(el: React.MouseEvent<HTMLAnchorElement>) {
  // Offset y-coordinate for all anchor links
  const yCoordinate =
  (el as unknown as HTMLElement).getBoundingClientRect().top +
  window.scrollY;
const yOffset = -160;
window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

export default handleScrollOffset