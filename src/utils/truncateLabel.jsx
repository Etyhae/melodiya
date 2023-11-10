const screenW = window.screen.width;

export const truncateLabel = (label, divider) => {
  if (divider === 0 || divider === undefined) {
    return label;
  }
  else {
    const symbolsMax = Math.round(screenW / divider); 
    return label.length > symbolsMax ? label.slice(0, symbolsMax).trim() + "..." : label;
  }
};