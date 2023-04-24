import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import "./landing.scss";

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

      <main>
        <div className="soroban-v2-design">
          <img
            className="image-1-icon"
            alt=""
            src="./img/landing/image-1@2x.png"
          />

          <div className="rectangle-div"></div>
          <div className="ibm-1-1"></div>
          <img
            className="group-icon"
            alt=""
            src="./img/landing/group-245.svg"
          />

          <img
            className="soroban-v2-design-child1"
            alt=""
            src="./img/landing/group-4601.svg"
          />

          <img
            className="e6841-065-1-icon"
            alt=""
            src="./img/landing/e6841-065-1.svg"
          />

          <div className="soroban-white-1-parent">
            <div className="hero-left">
              <img
                className="soroban-white-1-icon"
                alt=""
                src="./img/landing/sorobanwhite-1.svg"
              />

              <div className="introducing-soroban">
                <p className="introducing">Introducing</p>
                <p className="introducing">Soroban</p>
              </div>
            </div>

            <div className="hero-right">
              <p className="a-developer-friendly-rust-bas-container">
                <span className="a-developer-friendly-rust-bas">
                  A developer-friendly, Rust-based smart contracts platform
                  sensibly designed with scalability in mind. Currently live on
                  the test network dubbed Futurenet, Soroban seamlessly
                  integrates with and works alongside the existing Stellar
                  blockchain. 
                </span>
                <span className="a-developer-friendly-rust-bas">&nbsp;</span>
                <span className="a-developer-friendly-rust-bas">
                  Start building on Soroban today with the help of established
                  tools and documentation, or explore earning opportunities with
                  the Soroban Adoption Fund programs.
                </span>
              </p>
              <div className="btns-wrap">
                <button className="buttonprimarydefault">
                  <div className="default">Earn</div>
                </button>
                <div className="buttonsecondarydefault">
                  <div className="read-more">Docs</div>
                </div>
              </div>
            </div>
            <img
              className="soroban-v2-design-item"
              alt=""
              src="./img/landing/group-22.svg"
            />

            <img
              className="soroban-v2-design-inner"
              alt=""
              src="./img/landing/group-21.svg"
            />
            <img
              className="image-4-icon"
              alt=""
              src="./img/landing/image-4@2x.png"
            />

            <img
              className="soroban-v2-design-child"
              alt=""
              src="./img/landing/group-20.svg"
            />
            <img
              className="e6841-061-1-icon"
              alt=""
              src="./img/landing/e6841-061-1.svg"
            />
          </div>
          <div className="stellar-community-fund">
            <div className="vector-parent">
              <img
                className="group-child"
                alt=""
                src="./img/landing/vector-8.svg"
              />

              <div className="frame-parent">
                <div className="frame-wrapper">
                  <div className="group-parent">
                    <div className="stellar-community-fund-wrapper">
                      <div className="stellar-community-fund-container">
                        <p className="introducing">Stellar</p>
                        <p className="introducing">Community</p>
                        <p className="introducing">Fund</p>
                      </div>
                    </div>
                    <div className="submit-your-soroban">
                      Submit your Soroban project to the Stellar Community Fund
                      and receive up to $150K worth of XLM in awards. This is
                      your chance to play a fundamental role in bootstrapping
                      the Soroban ecosystem by creating the tools, protocols,
                      dApps, and resources necessary for it to thrive.
                    </div>
                  </div>
                </div>
                <div className="images">
                  <img
                    className="image-23-icon"
                    alt=""
                    src="./img/landing/image-23.svg"
                  />

                  <img
                    className="image-54-icon"
                    alt=""
                    src="./img/landing/image-54.svg"
                  />

                  <img
                    className="image-11-icon"
                    alt=""
                    src="./img/landing/image-11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="features-parent">
            <div className="features">
              <div className="designed-for">Designed for</div>

              <div className="step-1-parent">
                <div className="step-1-wrapper">
                  <div className="batteries-included-developer-e">
                    Batteries-Included Developer Experience
                  </div>
                  <div className="group-item"></div>
                  <div className="step">
                    <img
                      className="step-image"
                      alt=""
                      src="./img/landing/vector-7.svg"
                    />
                    <p className="with-tools-such">
                      With tools such as plug-and-play SDKs, Soroban CLI, RPC
                      server, and local sandbox, Soroban provides a
                      user-friendly experience that gets developers up and
                      running on the platform quickly. Start building with
                      flexible, reusable functions and ready-to-use contracts.
                    </p>
                  </div>
                </div>
                <div className="step-2-wrapper">
                  <div className="scale">Scale</div>
                  <div className="group-inner"></div>
                  <div className="step">
                    <img
                      className="step-image"
                      alt=""
                      src="./img/landing/vector-7.svg"
                    />
                    <p className="with-tools-such">
                      Soroban is designed with scalability in mind. Boost
                      performance with multi-core scaling, eliminated
                      serialization loops, and an optimized fee model. We’re
                      also tackling the elephant in the room head-on by
                      addressing the solution to state bloat.
                    </p>
                  </div>
                </div>
                <div className="step-3-wrapper">
                  <div className="real-world-utility">Real-World Utility</div>
                  <div className="line-div"></div>
                  <div className="step">
                    <img
                      className="step-image"
                      alt=""
                      src="./img/landing/vector-71.svg"
                    />
                    <p className="with-tools-such">
                      Connect to Stellar’s unparalleled interoperability by
                      accessing its wide variety of on-chain assets and
                      worldwide on and off-ramps. Also, benefit from five-second
                      contract finality on a proven and mature network boasting
                      150 TPS. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="learn-parent">
            <div className="learn">Learn</div>
            <div className="rectangle-parent">
              <div className="group-child1"></div>
              <div className="helloworld">&lt;helloworld&gt;...</div>
            </div>
            <div className="buttonprimarydefault-parent">
              <div className="buttonprimarydefault1">
                <div className="read-more">Go to Docs</div>
              </div>
              <div className="buttonsecondarydefault1">
                <div className="read-more">Earn</div>
              </div>
            </div>
            <div className="getting-started-with">
              Getting started with Soroban is easy! Just install the Rust
              toolchain and Soroban CLI to begin writing your first Soroban
              smart contract. Learn more and continue building by catching up on
              Soroban documentation.
            </div>
          </div>
          <div className="group-container">
            <div className="step-1-group">
              <div className="step-11">
                <div className="setup">Setup</div>
                <div className="install-and-configure">
                  Install and configure Rust and the Soroban CLI.
                </div>
                <img className="icon" alt="" src="./img/landing/icon.svg" />
              </div>
              <div className="step-8">
                <img className="icon1" alt="" src="./img/landing/icon1.svg" />

                <div className="parent">
                  <div className="div">1.</div>
                  <div className="hello-world-parent">
                    <div className="hello-world">Hello World</div>
                    <div className="create-your-first">
                      Create your first Soroban contract.
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-111">
                <div className="storing-data-parent">
                  <div className="hello-world">Storing Data</div>
                  <div className="create-your-first">
                    Write simple Soroban contract that stores and retrieves
                    data.
                  </div>
                </div>
                <img className="icon1" alt="" src="./img/landing/icon2.svg" />

                <div className="div1">2.</div>
              </div>
              <div className="step-12">
                <div className="storing-data-parent">
                  <div className="hello-world">Deploy to a local network</div>
                  <div className="create-your-first">
                    Use docker and the Stellar Quickstart image to run a local
                    network.
                  </div>
                </div>
                <img className="icon1" alt="" src="./img/landing/icon3.svg" />

                <div className="div1">3.</div>
              </div>
              <div className="step-13">
                <div className="storing-data-parent">
                  <div className="hello-world">Connect Freighter wallet</div>
                  <div className="create-your-first">
                    Freighter is a browser extension that can sign Soroban
                    transactions.
                  </div>
                </div>
                <img className="icon1" alt="" src="./img/landing/icon4.svg" />

                <div className="div1">4.</div>
              </div>
              <div className="step-14">
                <div className="storing-data-parent">
                  <div className="hello-world">Connect Freighter wallet</div>
                  <div className="create-your-first">
                    Freighter is a browser extension that can sign Soroban
                    transactions.
                  </div>
                </div>
                <img className="icon1" alt="" src="./img/landing/icon5.svg" />

                <div className="div1">5.</div>
              </div>
            </div>
            <div className="getting-started">Getting started</div>
          </div>
          <div className="the-stellar-development-founda-parent">
            <div className="the-stellar-development-container">
              <p className="introducing">
                The Stellar Development Foundation (SDF)’s $100M Soroban
                Adoption Fund encourages and supports developers as they learn,
                experiment, build, and scale projects on Soroban. The fund is an
                umbrella for many programs that support all levels of Soroban
                adoption, some of which have launched and some of which have yet
                to launch.
              </p>
              <p className="introducing">&nbsp;</p>
              <p className="introducing">
                These programs open doors for developers to become pioneers of
                the Soroban ecosystem by encouraging them to build the vital
                tools and projects that will make the platform successful.
              </p>
            </div>
            <div className="earn">Earn</div>
            <div className="frame-div">
              <div className="frame-container">
                <div className="read-more-parent">
                  <div className="read-more">Read More</div>
                  <div className="frame-item"></div>
                </div>
              </div>
              <img className="icon6" alt="" src="./img/landing/icon6.svg" />
            </div>
          </div>
          <div className="group-parent1">
            <div className="frame-inner"></div>
            <img className="ships-icon" alt="" src="./img/landing/ships.svg" />
            <div className="soroban-quest-parent">
              <div className="soroban-quest">Soroban Quest</div>
              <div className="a-series-of">
                A series of six available quests designed for the beginner
                Soroban developer. Earn unique NFTs by completing challenges
                that teach you about custom types, auth storage, reverse
                engineering, and more, all in a Gitpod environment.
              </div>
            </div>
          </div>
          <div className="soroban-v2-design-inner1">
            <div className="cards-parent">
              <div className="cards">
                <div className="article-01">
                  <div className="image-45">
                    <div className="text">
                      <div className="text1">Youtube</div>
                    </div>
                  </div>
                  <div className="canvas-the-art-of-investigati-wrapper">
                    <div className="canvas-the-art">
                      Canvas: The Art of Investigation
                    </div>
                  </div>
                </div>
                <div className="article-02">
                  <div className="image-11">
                    <div className="text2">
                      <div className="text1">Guide</div>
                    </div>
                  </div>
                  <div className="soroban-a-new-smart-contract-wrapper">
                    <div className="canvas-the-art">
                      Soroban: A New Smart Contract Standard
                    </div>
                  </div>
                </div>
                <div className="article-01">
                  <div className="image-45">
                    <div className="text">
                      <div className="text1">Youtube</div>
                    </div>
                  </div>
                  <div className="canvas-the-art-of-investigati-wrapper">
                    <div className="canvas-the-art">
                      Canvas: The Art of Investigation
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards1">
                <div className="article-011">
                  <div className="image-45">
                    <div className="text">
                      <div className="text1">Youtube</div>
                    </div>
                  </div>
                  <div className="canvas-the-art-of-investigati-wrapper">
                    <div className="canvas-the-art">
                      Canvas: The Art of Investigation
                    </div>
                  </div>
                </div>
                <div className="article-021">
                  <div className="image-11">
                    <div className="text2">
                      <div className="text1">Guide</div>
                    </div>
                  </div>
                  <div className="soroban-a-new-smart-contract-wrapper">
                    <div className="canvas-the-art">
                      Soroban: A New Smart Contract Standard
                    </div>
                  </div>
                </div>
                <div className="article-03">
                  <div className="image-23">
                    <div className="text2">
                      <div className="text1">Guide</div>
                    </div>
                  </div>
                  <div className="soroban-a-new-smart-contract-wrapper">
                    <div className="canvas-the-art">
                      Building Soroban’s Minimum Viable Ecosystem
                    </div>
                  </div>
                </div>
              </div>
              <div className="guides-and-videos-wrapper">
                <div className="guides-and-videos-container">
                  <span className="guides">Guides </span>
                  <span className="a">a</span>
                  <span className="guides">nd Videos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="soroban-v2-design-inner2">
            <div className="group-div">
              <div className="group-parent2">
                <div className="discord-parent">
                  <div className="discord">Discord</div>
                  <img
                    className="discord-1-icon"
                    alt=""
                    src="./img/landing/discord-1.svg"
                  />
                </div>
                <div className="youtube-parent">
                  <div className="youtube">Youtube</div>
                  <img
                    className="youtube-1-icon"
                    alt=""
                    src="./img/landing/youtube-1.svg"
                  />
                </div>
                <div className="twitter-parent">
                  <div className="twitter">Twitter</div>
                  <img
                    className="youtube-1-icon"
                    alt=""
                    src="./img/landing/twitter-1.svg"
                  />
                </div>
              </div>
              <div className="get-connected">Get Connected</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
