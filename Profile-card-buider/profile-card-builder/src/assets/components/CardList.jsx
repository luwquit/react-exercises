import profiles from "../data/profiles";
import { ProfileCard } from "./ProfileCard";
import { Card } from "./Card";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CardProps } from "./CardProps";

export function CardList() {
  return (
    <>
    <CardProps header={<Header />} />
      <div className="card-list">
        {profiles.map(profile => {
          return (
            <Card key={profile.id}>
              <ProfileCard profile={profile} />
            </Card>
          )
        })}
      </div>
      <CardProps footer={<Footer />} />
    </>
  )
}