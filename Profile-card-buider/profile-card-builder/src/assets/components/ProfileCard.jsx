import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";
import { Role } from "./Role";

export function ProfileCard({profile}) {
  return (
    <div className="profile-card">
      <Avatar avatarUrl={profile.avatar} />
      <UserInfo profile={profile} />
      <Role role={profile.role} />
    </div>
  );
}