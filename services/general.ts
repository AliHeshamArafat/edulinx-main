export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return "";

  return `${process.env.NEXT_PUBLIC_BASE_URL_IMG}${imageUrl}`;
};
