

// import { currentUser } from '@clerk/nextjs';
// import { fetchUser } from '@/lib/actions/user.actions';
// import AccountProfile from '@/components/forms/AccountProfile';

// async function EditProfile() {
//   const user = await currentUser();
//   if (!user) return null; // to avoid typescript warnings

//   const userInfo = await fetchUser(user.id);
//   const userData = {
//     id: user.id,
//     objectId: userInfo?._id,
//     username: userInfo ? userInfo?.username : user.username,
//     name: userInfo ? userInfo?.name : user.firstName ?? '',
//     bio: userInfo ? userInfo?.bio : '',
//     image: userInfo ? userInfo?.image : user.imageUrl,
//   };

//   return (
//     <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
//       <h1 className='head-text'>Edit Profile</h1>
//       <p className='mt-3 text-base-regular text-light-2'>
//         Edit your profile information.
//       </p>

//       <section className='mt-9 bg-dark-2 p-10'>
//         <AccountProfile user={userData} btnTitle='Save' />
//       </section>
//     </main>
//   );
// }

// export default EditProfile;

