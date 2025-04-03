import { getImageUrl } from "@/services/general";
import { ProfileData } from "@/types/auth";
import Image from "next/image";
import ProfileHeaderSkeleton from "@/components/skeletons/profileHeaderSkeleton";
import cameraIcon from "@/assets/images/camera.png";
import useUploadAntd from "@/hooks/useUplaodAntd";
import useModal from "@/hooks/useModal";
import FormComp from "@/components/form/formComp";
import { useTranslations } from "next-intl";
import { fallbackImageAvatar } from "@/components/layout/components/profileComp";
interface ProfileHeaderProps {
  profile: ProfileData;
  loading?: boolean;
  refetch?: () => void;
}

export default function ProfileHeader({ profile, loading, refetch }: ProfileHeaderProps) {
  const t = useTranslations("general");

  const modalProps = {
    title: t("edit_profile_picture"),
    footer: null,
    // style: { maxWidth: isMobile ? "90%" : "700px", width: isMobile ? "90%" : "100%", top: "5%" },
  };

  const { showModal, renderModal, hideModal } = useModal({ modalProps });

  const onUploadSuccess = (response: any) => {
    refetch?.();
    hideModal();
  };

  const { fields: uploadFields } = useUploadAntd({
    onUploadSuccess: onUploadSuccess,
    api: "/account/profile-picture",
  });

  const handleImageEdit = () => {
    showModal({
      content: <FormComp fileds={uploadFields} />,
      modalProps,
    });
  };

  if (loading) return <ProfileHeaderSkeleton />;

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative w-24 h-24 mb-3">
        <Image
          src={getImageUrl(profile?.profilePicturePath, fallbackImageAvatar)}
          alt={profile?.fullName || ""}
          fill
          className="rounded-full object-cover"
        />
        {/* Camera Icon */}
        <div
          className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer"
          onClick={handleImageEdit}
        >
          <Image src={cameraIcon} alt="Camera" width={90} height={90} />
        </div>
      </div>
      <h2 className="text-lg font-semibold">{profile?.fullName}</h2>

      {renderModal()}
    </div>
  );
}
