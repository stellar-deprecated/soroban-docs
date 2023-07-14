import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import "./index.scss";

export default function Landing() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          property="og:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          name="twitter:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
      </Head>

      <main className="Landing">
        <Hero />
        <Designed />
        <Learn />
        <GettingStarted />
        <Earn />
        <SCF />
        <Soroban />
        <MediaSection />
        <Footer />
      </main>
    </Layout>
  );
}

const Hero = () => (
  <div className="Hero">
    <div className="Hero__wrapper hp-center">
      <div>
        <div className="Hero__logo">
          <img src="/img/landing/soroban-white.svg" alt="Logo" />
        </div>

        <div className="Hero__title">
          <div>Introducing</div>
          <div>Soroban</div>
        </div>
      </div>

      <div className="Hero__right">
        <p>
          A developer-friendly, Rust-based smart contracts platform designed for
          scale and sensibility. Currently live on the test network
          dubbed Futurenet, Soroban seamlessly integrates with and works
          alongside the existing Stellar blockchain.
        </p>

        <p>
          Start building on Soroban today with the help of established tools and
          documentation, or explore earning opportunities with the Soroban
          Adoption Fund programs.
        </p>

        <div className="Hero__btn-group">
          <a
            href="/#build-and-earn-rewards"
            className="hp-btn hp-btn-secondary"
          >
            Earn
          </a>

          <a href="/docs" className="hp-btn hp-btn-primary">
            Docs
          </a>
        </div>
      </div>
    </div>
    <img className="Hero__img1" src="/img/landing/image-1.svg" alt="1" />
    <img className="Hero__img2" src="/img/landing/image-2.svg" alt="2" />
    <img className="Hero__img3" src="/img/landing/image-3.svg" alt="3" />
    <img className="Hero__img4" src="/img/landing/image-4.svg" alt="4" />
    <img className="Hero__img5" src="/img/landing/image-5.svg" alt="5" />
  </div>
);

const Designed = () => (
  <div className="Designed">
    <div className="Designed__wrapper hp-center hp-center--sm">
      <h2 className="Designed__title">Designed For</h2>

      <div className="Designed__cards">
        <DesignedCard title="Batteries-Included Developer Experience">
          With tools such as plug-and-play SDKs, Soroban CLI, RPC server, and
          local sandbox, Soroban provides a user-friendly experience that gets
          developers up and running quickly. Start building with
          flexible, reusable functions and ready-to-use contracts.
        </DesignedCard>

        <DesignedCard title="Scale">
          Soroban is designed with scalability in mind. Boost performance with multi-core scaling,
          an optimized fee model, and without pesky serialization loops. Soroban also tackles the
          elephant in the room head-on by addressing the problem of state bloat.
        </DesignedCard>

        <DesignedCard title="Real-World Utility">
          Connect to Stellar’s exceptional interoperability by accessing its
          wide variety of on-chain assets and worldwide on and off-ramps. Also,
          benefit from five-second contract finality on a proven and mature
          network boasting 150 TPS.
        </DesignedCard>
      </div>
    </div>
  </div>
);

const DesignedCard = ({ title, children }) => (
  <div className="DesignedCard">
    <div className="DesignedCard__title">
      <p>{title}</p>
    </div>

    <div className="DesignedCard__wrapper">
      <div>
        <img src="/img/landing/designed-for-icon.svg" alt="Designed for" />
      </div>
      <p>{children}</p>
    </div>
  </div>
);

const Learn = () => (
  <div className="Learn">
    <div className="Learn__wrapper hp-center">
      <div className="Learn__left">
        <h2 className="Learn__title">Learn</h2>

        <p>
          Getting started with Soroban is easy! Just install the Rust toolchain
          and Soroban CLI to begin writing your first Soroban smart contract.
          Learn more and continue building by checking out Soroban
          documentation.
        </p>
      </div>

      <div className="Learn__right">
        <pre className="Learn__code">
          {`#![no_std]
use soroban_sdk::{contractimpl, vec, Env, Symbol, Vec};

#[contract]
pub struct HelloContract;

#[contractimpl]
impl HelloContract {
    pub fn hello(env: Env, to: Symbol) -> Vec<Symbol> {
        vec![&env, symbol_short!("Hello"), to]
    }
}`}
        </pre>

        <div className="Learn__btn-group">
          <a href="/docs" className="hp-btn hp-btn-secondary">
            Go to Docs
          </a>
          <a
            className="hp-btn hp-btn-primary"
            rel="noreferrer"
            href="/#build-and-earn-rewards"
          >
            Earn
          </a>
        </div>
      </div>
    </div>
  </div>
);

const GettingStarted = () => (
  <div className="GettingStarted">
    <div className="hp-center">
      <h2 className="GettingStarted__title">Getting Started</h2>

      <div className="GettingStarted__cards">
        <GettingStartedCard
          title="Setup"
          subtitle="Install and configure Rust and the Soroban CLI."
          href="/docs/getting-started/setup"
        />

        <GettingStartedCard
          index="1."
          title="Hello World"
          subtitle="Create your first Soroban contract."
          href="/docs/getting-started/hello-world"
        />

        <GettingStartedCard
          index="2."
          title="Storing Data"
          subtitle="Write a simple Soroban contract that stores and retrieves data."
          href="/docs/getting-started/storing-data"
        />

        <GettingStartedCard
          index="3."
          title="Deploy to a local network"
          subtitle="Use docker and the Stellar Quickstart image to run a local network."
          href="/docs/getting-started/deploy-to-a-local-network"
        />

        <GettingStartedCard
          index="4."
          title="Connect Freighter wallet"
          subtitle="Freighter is a browser extension that can sign Soroban transactions."
          href="/docs/getting-started/connect-freighter-wallet"
        />

        <GettingStartedCard
          index="5."
          title="Deploy to Futurenet"
          subtitle="Deploy and invoke your contracts on the Futurenet testnet."
          href="/docs/getting-started/deploy-to-futurenet"
        />
      </div>
    </div>
  </div>
);

const GettingStartedCard = ({ index, title, subtitle, href }) => (
  <a className="GettingStartedCard" href={href}>
    {index && <p className="GettingStartedCard__index">{index}</p>}

    <p className="GettingStartedCard__title">{title}</p>

    <p className="GettingStartedCard__subtitle">{subtitle}</p>

    <div className="GettingStartedCard__icon">
      <img
        className="GettingStartedCard__unactive"
        src="/img/landing/arrow-black.svg"
        alt="arrow"
      />
      <img
        className="GettingStartedCard__active"
        src="/img/landing/arrow-white.svg"
        alt="arrow"
      />
    </div>
  </a>
);

const Earn = () => (
  <div className="Earn" id="build-and-earn-rewards">
    <div className="Earn__wrapper hp-center hp-center--md">
      <h2 className="Earn__title">Earn</h2>

      <div className="Earn__right">
        <p>
          The Stellar Development Foundation (SDF)’s $100M Soroban Adoption Fund
          encourages and supports developers as they learn, experiment, build,
          and scale projects on Soroban. The fund is an umbrella for many
          programs that support all levels of Soroban adoption, some of which
          have launched and some of which have yet to launch.
        </p>

        <p>
          These programs open doors for developers to become pioneers of the
          Soroban ecosystem by encouraging them to build the vital tools and
          projects that will make the platform successful.
        </p>

        <a
          href="https://stellar.org/blog/a-developers-guide-to-soroban-adoption-fund-programs"
          target="_blank"
          className="hp-link"
          rel="noreferrer"
        >
          <span>Read More</span>
          <img src="/img/landing/arrow-white.svg" alt="arrow" />
        </a>
      </div>
    </div>
  </div>
);

const SCF = () => (
  <div className="SCF">
    <div className="SCF__wrapper hp-center hp-center--md">
      <div className="SCF__left">
        <img src="/img/landing/scf.svg" alt="Community Fund" />
      </div>

      <div className="SCF__right">
        <h2 className="SCF__title">
          <span>Stellar</span>
          <span>Community</span>
          <span>Fund</span>
        </h2>

        <p className="SCF__subtitle">
          Submit your Soroban project to the Stellar Community Fund and request
          up to $150K worth of XLM in awards to cover 2-3 months of development costs.
          This is your chance to play a fundamental role in bootstrapping the Soroban
          ecosystem by creating the tools, protocols, dApps, and resources necessary
          for it to thrive.
        </p>

        <a
          href="https://communityfund.stellar.org/"
          target="_blank"
          className="hp-link hp-link__dark"
          rel="noreferrer"
        >
          <span>Learn More</span>
          <img src="/img/landing/arrow-black.svg" alt="arrow" />
        </a>
      </div>
    </div>
  </div>
);

const Soroban = () => (
  <div className="Soroban">
    <div className="Soroban__wrapper hp-center">
      <h2>Soroban Quest</h2>
      <p>
        A series of quests designed for the beginner Soroban
        developer. Earn unique NFTs by completing challenges that teach you
        about custom types, auth storage, reverse engineering, and more, all in
        a Gitpod environment.
      </p>
      <div className="Soroban__btn-group">
          <a href="https://quest.stellar.org/soroban" className="hp-btn hp-btn-secondary">
            Play Game
          </a>
        </div>
    </div>
  </div>
);

const MediaSection = () => (
  <div className="MediaSection">
    <div className="hp-center">
      <h2 className="MediaSection__title">Guides and Videos</h2>

      <div className="MediaSection__cards">
        <MediaSectionCard
          title="Workshop: Write Your First Smart Contract In Rust Pt. 2"
          tag="Youtube"
          link="https://youtu.be/6FPXYuesH_0"
          imgSrc="https://img.youtube.com/vi/6FPXYuesH_0/maxresdefault.jpg"
        />

        <MediaSectionCard
          title="Workshop: Write Your First Smart Contract In Rust Pt. 1"
          tag="Youtube"
          link="https://youtu.be/jSLJEHVEMQA"
          imgSrc="https://img.youtube.com/vi/jSLJEHVEMQA/maxresdefault.jpg"
        />

        <MediaSectionCard
          title="Soroban: A New Smart Contracts Platform"
          tag="Youtube"
          link="https://www.youtube.com/watch?v=Qwy0P1klpis"
          imgSrc="https://img.youtube.com/vi/Qwy0P1klpis/maxresdefault.jpg"
        />

        <MediaSectionCard
          title="Soroban: A New Smart Contract Standard"
          tag="Guide"
          link="https://stellar.org/blog/soroban-a-new-smart-contract-standard"
          imgSrc="https://assets-global.website-files.com/5dee83171c0040227763490c/63465e69254eb2fc10dec495_sorobanpressrelease.png"
        />

        <MediaSectionCard
          title="Soroban Talks: Instant Soroban Dev Environment Setup"
          tag="Youtube"
          link="https://www.youtube.com/watch?v=3in3EvVumiw"
          imgSrc="https://img.youtube.com/vi/3in3EvVumiw/maxresdefault.jpg"
        />

        <MediaSectionCard
          title="Building Soroban’s Minimum Viable Ecosystem"
          tag="Guide"
          link="https://stellar.org/developers-blog/building-sorobans-minimum-viable-ecosystem"
          imgSrc="https://assets-global.website-files.com/5dee83171c0040227763490c/63f66c99c2b589d7e4177fec_soroban%20minimum%20viable%20ecosystem.png"
        />
      </div>
    </div>
  </div>
);

const MediaSectionCard = ({ tag, link, title, imgSrc }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className="MediaSectionCard">
      <div
        className="MediaSectionCard__wrapper"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className={`MediaSectionCard__tag MediaSectionCard__${tag}`}>
          <p>{tag}</p>
        </div>
      </div>
      <p className="MediaSectionCard__title">{title}</p>
    </div>
  </a>
);

const Footer = ({ title = "Get Connected" }) => (
  <div className="Footer">
    <div className="hp-center">
      <div className="Footer__title">
        <p>{title}</p>
      </div>

      <div className="Footer__cards">
        <SocialCard
          title="Discord"
          src="./img/landing/discord-1.svg"
          href="https://discord.gg/6ZCcYqbC96"
        />

        <SocialCard
          title="Youtube"
          src="./img/landing/youtube-1.svg"
          href="https://youtube.com/@SorobanOfficial"
        />

        <SocialCard
          title="Twitter"
          src="./img/landing/twitter-1.svg"
          href="https://twitter.com/sorobanofficial"
        />
      </div>
    </div>
  </div>
);

const SocialCard = ({ title, src, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="SocialCard">
    <img className="SocialCard__icon" alt="" src={src} />
    <span className="SocialCard__title">{title}</span>
  </a>
);
