import Brands from "@/components/branding/Brands";
import HeadHero from "@/components/sections/HeadHero";
import HomeAbout from "@/components/sections/HomeAbout";
export default function Home() {
  return (
    <div className="">
      <section id="head-hero">
        <HeadHero />
      </section>
      <section
        id="brands"
        className="py-0 layout_padding bg-secondary_section_bg"
      >
        <Brands />
      </section>
      <section
        id="home-about"
        className="py-20 layout_padding bg-secondary_section_bg"
      >
        <HomeAbout />
      </section>
      <div className="mb-32">test</div>
    </div>
  );
}
