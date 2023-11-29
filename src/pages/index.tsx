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
            interoperability and security lead the blockchain revolution.
          </p>
          <Link href="https://wormhole.com" className="btn">
            Explore Wormhole
          </Link>
        </div>
      </div>
      <div id="about-us" className="scroll-mt-24">
        <div className="container">
          <div className="pt-10 pb-20  md:pt-20  md:pb-48">
            <h2 className="h2 mb-6">About us</h2>
            <div className="text-lg font-light opacity-70 leading-normal md:max-w-[688px]">
              <p className="mb-7">
                Wormhole Lab is a technology company specializing in blockchain 
                interoperability. We make significant contributions to the Wormhole 
                messaging protocol because we envision a wide array of permissionless
                systems built atop a multitude of blockchains with users who can
                safely ignore the underlying technology, or dive deep if they choose.
              </p>
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
                Our team members hail from diverse backgrounds, ranging from
                quantitive trading to venture capital to enterprise software.
                We do not look for specific training, but rather for customer
                obsession, high agency, and extreme ownership.
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
      <div id="contact-us" className="pb-20 md:pb-40 scroll-mt-24">
        <div className="container flex flex-col-reverse lg:flex-row items-center">
          <div className="pt-10  flex-shrink-0 lg:max-w-[468px] w-full">

            <h4 className="h2 mb-6">Contact Us</h4>
            <p className=" font-light opacity-70 leading-normal  mb-9 max-w-[468px]">
              Whether you're a developer who wants to contribute to open-source
              with us or an enterprise looking for cutting-edge blockchain solutions,
              Wormhole Labs is here to help.
            </p>
            <Link href="mailto:contact@wormholelabs.xyz" className="btn">
              Reach Out
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
