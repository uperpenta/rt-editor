import { getSession } from "~/server/better-auth/server";
import {
  Header,
  HeroSection,
  FeaturesGrid,
  CTASection,
  LandingFooter,
} from "~/app/_components/landingPage";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="from-landing-mint via-landing-apricot to-landing-lavender min-h-screen bg-linear-to-br">
      <Header session={session} />
      <HeroSection session={session} />
      <FeaturesGrid />
      <CTASection session={session} />
      <LandingFooter />
    </div>
  );
}
