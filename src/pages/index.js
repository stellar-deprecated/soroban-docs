import React from 'react'
import Layout from '@theme/Layout'
import clsx from 'clsx'

import './index.scss'

export default function Home() {
  return (
    <Layout>
      <main className='homepage'>
        <div className="homepage--hero">
          
          {/* <img className='homepage--arrows' src="./img/homepage/arrows.png" /> */}

          <div class="homepage--maxWidth">
            <img className='homepage--logo' src="./img/homepage/soroban-white.png" alt='Soroban' />
            <h1 class="homepage--h1">Introducing Soroban</h1>
            <h2 class="homepage--h2">Soroban is a smart contracts platform that is designed with purpose and built to perform.</h2>
          </div>
        </div>

        <div className='homepage--designedFor'>
          <h1>Designed For</h1>

          <div className='much-excite orange'>
            <img src="./img/homepage/battery.png" />
            <p>Batteries-Included Developer Experience</p>

            <ul class="hidden">
              <li>A local sandbox for fast setup and iterative development</li>
              <li>Plug-and-play SDKs for simple and complex authorization</li>
              <li>Flexibility to reuse common functionality between contracts and access to built-in/out-of-the box contracts</li>
              <li>Written in Rust from end-to-end, for Rust developers, which taps into a growing ecosystem of safe and efficient tooling</li>
            </ul>
          </div>

          <div className='much-excite white'>
            <img src="./img/homepage/scale.png" />
            <p>Scale</p>

            <ul class="hidden">
              <li>Transaction footprints allow scaling to multiple cores</li>
              <li>Contracts without deserialization / serialization loops</li>
              <li>A calibrated fee model that represents compute and maximizes throughput while reducing cost</li>
              <li>Solving state bloat: the elephant in the room</li>
            </ul>
          </div>

          <div className='much-excite red'>
            <img src="./img/homepage/railroad.png" />
            <p>Access to Financial Rails via Stellar</p>

            <ul class="hidden">
              <li>A local sandbox for fast setup and iterative development</li>
              <li>Stellar speed and reliability – with 5 seconds to finality per contract –</li>
              <li>On a proven  network that has been live since 2015 and is processing 150 tps as we speak</li>
              <li>A global anchor network of on/off ramps and assets, including worldwide cash access</li>
            </ul>
          </div>

          <p>
            It's still in development, and it won't be ready for production until 2023, but you can start experimenting with it right now! Not only that, but you can earn rewards for doing so!
          </p>
        </div>

        <div className='homepage--cta'>
          <h2>Tinker &amp; earn rewards</h2>
          <img src='' />
          <h1>Sorobanathon: First Light</h1>
          <p>
            Between now and December 15, 2022, join Sorobanathon: First Light, experiment with Soroban, and submit a code example, issue, tutorial, blog post, issue, or video documenting your experience. Qualified submissions will receive $25-300 worth of USDC. It's a fun, low-lift way to tinker, test things out, and provide valuable feedback to both the Soroban development team and the Soroban ecosystem as a whole. Let's bootstrap this thing together!
          </p>
          <a href="https://github.com/stellar/sorobanathon" className='homepage--button'>Join the Sorobanathon</a>
        </div>

        <div className='homepage--cta'>
          <h2>
            Connect with developers, <br />
            be the first to get updates
          </h2>
          <img src='' />
          <h1>Join the Discord </h1>
          <p>
            Sorobanathon: First Light is the first of many programs that draws from the $100M Soroban Adoption Fund, which the Stellar Development Foundation created to support the growth and development of the Soroban ecosystem. We'll be sharing more about additional Adoption Fund programs on the Stellar Dev Discord in the not-too-distant, so make sure to join today to be the first to hear those announcements.
          </p>
          <a href="https://discord.gg/6ZCcYqbC96" className='homepage--button'>Join the Discord</a>
        </div>

        <a href="/docs" className='homepage--button'>Read The Docs</a>
      </main>
    </Layout>
  )
}
