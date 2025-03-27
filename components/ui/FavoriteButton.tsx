"use client";
import Image from "next/image";
import { useState } from "react";
import FavIcon from "@/assets/images/Fav.png";
import ButtonComp from "../functional/buttonComp";
import { ADD_FAVORITE_PROGRAM, ADD_FAVORITE_UNIVERSITY, REMOVE_FAVORITE_PROGRAM, REMOVE_FAVORITE_UNIVERSITY } from "@/apis";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useRTL } from "@/hooks/useRTL";
interface FavoriteButtonProps {
  Id: string;
  initialFavorite?: boolean;
  type: "program" | "university";
  onButtonSuccess?: () => void;
  onButtonClick?: () => void;
  className?: string;
}

export default function FavoriteButton({
  Id,
  initialFavorite = false,
  type,
  onButtonSuccess,
  onButtonClick,
  className,
}: FavoriteButtonProps) {
  const { isRTL } = useRTL();
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggleFavorite = () => {
    if (onButtonClick) return onButtonClick();

    if (!isFavorite) {
      if (type === "program")
        return ADD_FAVORITE_PROGRAM({ params: { programUuid: Id } }).then(() => {
          setIsFavorite(!isFavorite);
          onButtonSuccess?.();
        });

      if (type === "university")
        return ADD_FAVORITE_UNIVERSITY({ params: { universityUuid: Id } }).then(() => {
          setIsFavorite(!isFavorite);
          onButtonSuccess?.();
        });
    }

    if (isFavorite) {
      if (type === "program")
        return REMOVE_FAVORITE_PROGRAM({ id: Id }).then(() => {
          setIsFavorite(!isFavorite);
          onButtonSuccess?.();
        });

      if (type === "university")
        return REMOVE_FAVORITE_UNIVERSITY({ id: Id }).then(() => {
          setIsFavorite(!isFavorite);
          onButtonSuccess?.();
        });
    }
  };

  return (
    <ButtonComp
      onClick={toggleFavorite}
      className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} rounded-full transition-colors cursor-pointer ${className}`}
      types="ghost"
    >
      {isFavorite ? (
        <div className="flex items-center justify-center bg-primary-lighter rounded-full w-8 h-8">
          <HeartFilled style={{ color: "var(--primary)" }} />
        </div>
      ) : (
        <Image
          src={isFavorite ? FavIcon : FavIcon}
          alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
          width={30}
          height={30}
        />
      )}
    </ButtonComp>
  );
}
