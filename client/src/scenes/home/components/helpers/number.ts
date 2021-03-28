export const toIntl = (num: number): string => new Intl.NumberFormat('de-DE').format(num);

export const abbreviateNumber = (num: number): string => {
  if (num < 1e3) return String(toIntl(num));
  if (num >= 1e3 && num < 1e6) return toIntl(+(num / 1e3).toFixed(1)) + 'K';
  if (num >= 1e6 && num < 1e9) return toIntl(+(num / 1e6).toFixed(1)) + 'M';
  if (num >= 1e9 && num < 1e12) return toIntl(+(num / 1e9).toFixed(1)) + 'G';
  if (num >= 1e12) return toIntl(+(num / 1e12).toFixed(1)) + 'T';
  return '';
};
