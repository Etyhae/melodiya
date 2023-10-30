export const truncateLabel = (label, amount) => {
    return label.length > amount ? label.slice(0, amount).trim() + "..." : label;
  };