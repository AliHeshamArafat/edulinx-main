"use client";
import Image from "next/image";
import { useState } from "react";
import FavIcon from "@/assets/images/Fav.png";
import ButtonComp from "../functional/buttonComp";
import { ADD_FAVORITE_PROGRAM, ADD_FAVORITE_UNIVERSITY } from "@/apis";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

interface FavoriteButtonProps {
  Id: string;
  initialFavorite?: boolean;
  type: "program" | "university";
}

export default function FavoriteButton({ Id, initialFavorite = false, type }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggleFavorite = () => {
    if (type === "program") return ADD_FAVORITE_PROGRAM({ params: { programUuid: Id } }).then(() => setIsFavorite(!isFavorite));

    if (type === "university") return ADD_FAVORITE_UNIVERSITY({ params: { universityUuid: Id } }).then(() => setIsFavorite(!isFavorite));
  };

  return (
    <ButtonComp
      onClick={toggleFavorite}
      className="absolute top-3 right-3 rounded-full transition-colors cursor-pointer"
      types="ghost"
    >
      {isFavorite ? <HeartFilled /> : <HeartOutlined />}

      {/* <Image
        src={isFavorite ? FavIcon : FavIcon}
        alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        width={30}
        height={30}
      /> */}
    </ButtonComp>
  );
}
