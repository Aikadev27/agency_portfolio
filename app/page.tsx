"use client";
import Brands from "@/components/branding/Brands";
import Features from "@/components/sections/Features";
import HeadHero from "@/components/sections/HeadHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeService from "@/components/sections/HomeService";
import HowWeWork from "@/components/sections/HowWeWork";
import MilesStone from "@/components/sections/MilesStone";
import VideoReel from "@/components/sections/VideoReel";
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
      <section
        id="milestones"
        className="py-20 layout_padding bg-secondary_section_bg"
      >
        <MilesStone />
      </section>
      <section
        id="how-we-work"
        className="py-0 layout_padding bg-secondary_section_bg"
      >
        <HowWeWork />
      </section>
      <section
        className="layout_padding bg-secondary_section_bg py-14 sm:py-20"
        id="video-reel"
      >
        <VideoReel />
      </section>
      <section
        id="features-hero"
        className="layout_padding bg-secondary_section_bg"
      >
        <Features />
      </section>
      <section
        id="home-service"
        className="py-20 layout_padding bg-secondary_section_bg"
      >
        <HomeService />
      </section>
      <div className="mb-32">test</div>
    </div>
  );
}
