export const formatPrice = (price: number | string | null | undefined) => {
  if (!price && price !== 0) return '';
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPriceToman = (price: number | string | null | undefined) => {
  const formattedPrice = formatPrice(price);
  return formattedPrice ? `${formattedPrice} تومان` : '';
};

export const arabicToPersian = (str: string | null | undefined = '') => {
  if (typeof str !== 'string') return '';
  const diff = {
    ك: 'ک',
    دِ: 'د',
    بِ: 'ب',
    زِ: 'ز',
    ذِ: 'ذ',
    شِ: 'ش',
    سِ: 'س',
    ى: 'ی',
    ي: 'ی',
    ئ: 'ی',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0',
  };

  for (const [key, value] of Object.entries(diff)) {
    str = str.replaceAll(key, value);
  }

  return str;
};
