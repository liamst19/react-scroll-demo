
// Test to see if element is inside viewport
export const elementIsInView = (element, offset = 0) => {
  // Get the dimensions of Section element
  const elRect = element.current.getBoundingClientRect();
  const viewportBottom = document.documentElement.clientHeight;

  return (elRect != null)
    && (elRect.top <= offset
        || elRect.bottom <= viewportBottom);
};

