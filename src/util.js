

  // Check to see if element is in viewport
export const elementIsInView = (element, offset = 0) => {
  // Get the dimensions of Section element
  const elRect = element.current.getBoundingClientRect();
  const viewportHeight = document.documentElement.clientHeight;

  return (elRect != null)
    && (elRect.top <= offset
        || elRect.bottom <= viewportHeight);
};
