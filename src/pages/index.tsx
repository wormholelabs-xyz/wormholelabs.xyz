import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layoyt";
import Logo from "../images/labs.inline.svg";
import bg from "../images/hero.svg";
import line from "../images/line.svg";
import hole from "../images/hole.svg";
import mission from "../images/mission.svg";

import jump from "../images/jump.svg";
import stripe from "../images/stripe.svg";
import offchain from "../images/offchain.svg";
import amazon from "../images/amazon.svg";
import twitch from "../images/twitch.svg";
import pantera from "../images/pantera.svg";

const work = [
  { logo: jump },
  { logo: stripe },
  { logo: offchain },
  { logo: amazon },
  { logo: twitch },
  { logo: pantera },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <span className="absolute top-0 left-0 w-full h-full xl:h-auto -z-[1] pointer-events-none">
          <Image
            src={bg}
            alt=""
            priority
            className="object-cover  object-bottom-center w-full h-full"
          />
        </span>
        <div className="container text-center pt-40 md:pt-[250px] lg:pt-[372px] pb-32 lg:pb-40 hero relative">
          <h1 className="h1">Shaping the future of interoperability</h1>
          <p className="text-[22px] max-w-[630px] mx-auto font-light mt-10 opacity-70 leading-normal mb-10">
            At Wormhole Labs, we're committed to forging a future where
            interoperability and security lead the blockchain revolution. We
            envision a boundaryless blockchain world, and we’re working together
            to make it a reality.
          </p>
          <Link href="/" className="btn">
            Wormhole CTA
          </Link>
        </div>
      </div>
      <div id="about-us" className="scroll-mt-24">
        <div className="container">
          <div className="pt-10 pb-20  md:pt-20  md:pb-48">
            <h2 className="h2 mb-6">About us</h2>
            <div className="text-lg font-light opacity-70 leading-normal md:max-w-[688px]">
              <p className="mb-7">
                We envision a seamless blockchain universe where barriers fade,
                and smooth transitions prevail. Our expertise lies in crafting
                state-of-the-art software solutions dedicated to connection and
                composability of distributed systems. 
              </p>
              <p>
                Driven by passion, and founded on excellence, Wormhole Lab is a
                dynamic software company specializing in the world of Wormhole.
                Our global footprint, with a dedicated team spanning three
                continents, is a testament to our unwavering commitment to
                elevate the Wormhole ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <span className="absolute -top-[200px] left-0 w-full h-full -z-[1] pointer-events-none hidden md:block">
          <Image src={line} alt="" className="cover w-full" />
        </span>
        <div className="container">
          <div
            className="md:max-w-[650px] scroll-mt-24 vision px-10 py-16 md:ml-auto"
            id="our-vision"
          >
            <span className="uppercase text-xs tracking-[9.1px] font-normal opacity-50 block">
              OUR VISION
            </span>
            <h3 className="h3 my-4">Open-source commitment</h3>
            <div className="text-base font-light opacity-70 leading-normal ">
              <p className="mb-6">
                The essence of blockchain lies in its decentralized spirit.
                Resonating with this ethos, we pride ourselves on developing
                open-source products built on the Wormhole Interoperability
                Protocol.
              </p>
              <p>
                By promoting accessibility and community involvement, we aim to
                champion a collaborative approach to innovation.
              </p>
            </div>
          </div>
          <div className="py-20 md:py-32 scroll-mt-24" id="open-source">
            <p className="max-w-md text-[26px] mb-20">
              Join us on a journey of advancing blockchain interoperability and
              fortifying its security.
            </p>
            <div className="md:flex divide-y md:divide-y-0 md:divide-x divide-[#373737] lg:text-xl">
              <div className="pb-10 md:pb-0 md:pr-20">
                <span className="font-medium text-[60px] lg:text-[96px] block leading-none">
                  12
                </span>
                <span className=" max-w-[128px] inline-block">
                  open source contributors
                </span>
              </div>
              <div className="py-10 md:py-0 md:px-20">
                <span className="font-medium text-[60px] lg:text-[96px] block leading-none">
                  12,334
                </span>
                <span className="  inline-block">lines of code</span>
              </div>
              <div className="pt-10 md:pt-0 md:pl-20">
                <span className="font-medium text-[60px] lg:text-[96px] block leading-none">
                  567
                </span>
                <span className="  inline-block">GitHub profiles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-team" className="relative scroll-mt-24">
        <span className="absolute -right-[150px] -top-[150px] opacity-50 lg:opacity-100">
          <Image src={hole} alt="" />
        </span>
        <div className="container">
          <div className="lg:pt-32 lg:pb-40">
            <h2 className="h2 mb-6">Our team</h2>
            <div className="text-lg font-light opacity-70 leading-normal max-w-[465px]">
              <p className="mb-6">
                From coding prodigies to visionary strategists, our team of 17
                professionals bring diverse perspectives and unmatched skills.
              </p>
              <p>
                While geographically diverse, we stand united in our mission -
                to lead, innovate, and shape the future of blockchain
                interoperability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 py-20 lg:pt-40 lg:pb-32 ">
            {work.map((p, i) => (
              <span className="p-6 flex items-center justify-center" key={i}>
                <Image src={p.logo} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div id="join-our-mission" className="pb-20 md:pb-40 scroll-mt-24">
        <div className="container flex flex-col-reverse lg:flex-row items-center">
          <div className="pt-10  flex-shrink-0 lg:max-w-[468px] w-full">
            <h3 className="h3 mb-6">Join our mission</h3>
            <p className=" font-light opacity-70 leading-normal max-w-[468px]">
              Working closely in the interoperability space, we're always
              welcoming new partners, collaborators, and enthusiasts. Whether
              you're a developer keen on open-source initiatives or an
              enterprise looking for cutting-edge blockchain solutions, Wormhole
              Labs is here to assist.
            </p>

            <h4 className="h3 mb-6 text-[32px] mt-24">Connect with Us</h4>
            <p className=" font-light opacity-70 leading-normal  mb-9 max-w-[468px]">
              Stay updated on our latest projects, join our community
              discussions, or simply drop us a line. Let's build the internet of
              blockchains, together.
            </p>
            <Link href="/" className="btn">
              Talk with us
            </Link>
          </div>
          <div className="flex justify-center items-center flex-1">
            <Image src={mission} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
