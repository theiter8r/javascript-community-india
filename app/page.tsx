import { DetailsSection } from "@/components/details-section";
import { FussSection } from "@/components/fuss-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { PageDecor } from "@/components/page-decor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    // The comp is a 1728px frame, i.e. the 1440px design grid at 1.2x. Content
    // is capped at that grid and centred, hero included — the comp frames the
    // still rather than bleeding it to the window edges.
    <div className="relative mx-auto w-full max-w-[1440px] overflow-x-clip">
      <PageDecor />

      <div className="relative">
        <SiteHeader />
        <HeroSection />
        <main>
          <FussSection />
          <TeamSection />
          <GallerySection />
          <DetailsSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
