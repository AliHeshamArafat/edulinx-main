"use client";
import Image from "next/image";
import { useState } from "react";
import FavIcon from "@/assets/images/Fav.png";
import ButtonComp from "../functional/buttonComp";

interface FavoriteButtonProps {
  Id: string;
  initialFavorite?: boolean;
}

export default function FavoriteButton({ Id, initialFavorite = false }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggleFavorite = async () => {};

  return (
    <ButtonComp
      onClick={toggleFavorite}
      className="absolute top-3 right-3 rounded-full transition-colors cursor-pointer"
      types="ghost"
    >
      <Image
        src={isFavorite ? FavIcon : FavIcon}
        alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        width={30}
        height={30}
      />
    </ButtonComp>
  );
}
