export function UserInfo({profile}) {
  return (
    <>
      <p className="user-name">{profile.name}</p>
      <p className="user-bio">{profile.bio}</p>
    </>
  )
}