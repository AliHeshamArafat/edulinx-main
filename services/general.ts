const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return fallbackImage;

  return `${process.env.NEXT_PUBLIC_BASE_URL_IMG}${imageUrl}`;
};
