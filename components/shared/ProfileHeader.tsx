"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Other imports and component definition
interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  const router = useRouter();

  const handleEditProfile = async () => {
    try {
      await router.push("/profile/editprofile");
    } catch (error) {
      console.error("Failed to navigate to edit page:", error);
    }
  };
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        {/* Profile info */}
        <div className='flex items-center gap-3'>
          {/* Profile image */}
          <div className='relative h-20 w-20 object-cover'>
            <Image
              src={imgUrl}
              alt='logo'
              fill
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          {/* Profile name and username */}
          <div className='flex-1'>
            <h2 className='text-left text-heading3-bold text-light-1'>
              {name}
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>

        {/* Edit button */}
        {accountId === authUserId && type !== "Community" && (
          <button
            className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'
            onClick={handleEditProfile}
          >
            <Image
              src='/assets/edit.svg'
              alt='edit'
              width={16}
              height={16}
            />
            <p className='text-light-2 max-sm:hidden'>Edit</p>
          </button>
        )}
      </div>

      {/* Bio */}
      <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>

      {/* Divider */}
      <div className='mt-12 h-0.5 w-full bg-dark-3' />
    </div>
  );
}

export default ProfileHeader;
