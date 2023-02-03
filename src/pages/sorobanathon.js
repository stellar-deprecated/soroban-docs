import React from 'react'
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout'
import clsx from 'clsx'

import './sorobanathon.scss'

export default function Sorobanathon() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content=""
        />
        <meta
          property="og:description"
          content=""
        />
        <meta
          name="twitter:description"
          content=""
        />
      </Head>
      
      <main className='sorobanathon'>
        <div className="hp--hero">
          <img className='hp--topRight' src="./img/homepage/top-right.svg" />
          <img className='hp--bottomLeft' src="./img/homepage/bottom-left.svg" />

          <div className="hp--heroInfo hp--maxWidth">
            <img className='hp--arrows' src="./img/homepage/arrows.svg" />
            <h1 className="hp--h1">Sorobanathon: Equinox 🌖</h1>
          </div>
        </div>
        <div className='hp--maxWidth'>
          <div className='hp--content'>
            <h1>Welcome to Sorobanathon: Equinox<br/>February 3rd - April 1st, 2023.</h1>
            <p>Sorobanathon is back for the new year! Once again, you can earn rewards by experimenting with Soroban and creating content to share your experience. We are looking for any kind of content, big or small!</p>
            <p><strong>Our goals</strong> with Sorobanathon: Equinox are to continue gathering feedback that will guide the development of Soroban, and more importantly, to generate content that will help kickstart the Soroban ecosystem. So roll up your sleeves, experiment, and have some fun!</p>
            <p>During First Light, we received a ton of requests to increase the reward band to allow for more extensive projects… and we are happy to announce that in Sorobanathon: Equinox, you can earn from 25XLM all the way to up to 10,000 XLM for a single submission! This is a <strong>fun, low-lift way to tinker with Soroban</strong> while you help shape its development and grow the ecosystem as a whole.</p>
          </div>

          <div className='hp--content'>
            <h2>Here are the kind of submissions we're looking for:</h2>
            <ul>
              <li>Code examples (<a href="https://sorobandev.com/">sorobandev.com</a>)</li>
              <li>Practical tutorials (such as this (<a href="https://github.com/stellar/sorobanathon/discussions/61">Game betting contract</a>))</li>
              <li>Fun dapp tutorials (such as this (<a href="https://github.com/stellar/sorobanathon/discussions/165">adoption tracking system for a pet shop</a>))</li>
              <li>Video walkthroughs (such as this one on (<a href="https://www.youtube.com/watch?v=XcFgR_OHKl8">Stellar Quest</a>))</li>
              <li>Soroban for X developer tutorials (X = another smart contracts platform, such as Ethereum, Near, or Solana)</li>
            </ul>
            <p>Also, if you're trying to do something and it doesn't work, let us know!  File a good issue and/or document your experience in some way, and turn that in!  Soroban is still a work in progress, and info about issues, bugs, and blockers is super useful right now.</p>
            <p>You can file new issues (and see existing issues) in the  (<a href="https://github.com/stellar/soroban-cli/issues">Soroban CLI repo</a>) or the (<a href="https://github.com/stellar/rs-soroban-sdk/issues">Soroban SDK repo</a>).  If you do file an issue, make sure to link to it in your Sorobanathon: Equinox submission.  If you have questions, feel free to ask them in the (<a href="https://discord.gg/sp8zfb4qH6">Stellar Dev Discord</a>) #soroban-help channel</p>
          </div>

          <div className='hp--content'>
            <h2>Get Started</h2>
            <p>If you haven't already, check out the (<a href="https://soroban.stellar.org/docs">Soroban docs</a>) to get oriented, get set up, and get your head around the Soroban fundamentals. When you're ready to create a submission, we encourage you to post your submission on dev.to. However, it is up to you where you choose to post your submission. Our only ask, if the platform you are using allows for hashtags, make sure to tag it with #soroban, and #sorobanathon.</p>
    
            <h2>How to make a submission on dev.to.</h2>
            <div className='hp--scrollBox'>
              <h2>Sign Up</h2>
              <p>You need a dev.to account to post your submission: (<a href="https://dev.to/enter">Sign Up Here</a>) if you don’t already have one.</p>
              <h2>Click "Create a Post"</h2>
              <p>Once you sign in, there will be a button in the upper-right corner that says "Create a Post" — click it!</p>
              <h2>Pick a Good, Descriptive Title</h2>
              <p>Tell the readers exactly what they will get from the post, and be sure to deliver on that promise.</p>
              <h2>Add Tags</h2>
              <p>This is the most important step! Make sure to add #soroban, #sorobanathon, and any other fitting tags for your post.</p>
              <h2>Write Your Post!</h2>
              <p>The fun part! You can write your post directly in the DEV editor or copy and paste it from elsewhere. We recommend using a tool like https://stackedit.io/ to ensure you get the formatting right.</p>
              <h2>Review Your Post in Preview Mode</h2>
              <p>Click "Preview" at the upper-right of your screen to see the formatted post.</p>
              <h2>Publish! You're Done — Time to Get it Out There!</h2>
              <p>Click the “Publish” button at the bottom of the screen, and your post will be LIVE!</p>
            </div>

            <p>Once you have made your post and have a link to your published, public, live post…</p>
            <ul>
              <li>Head on over to the (<a href="https://discord.gg/st7Mxd58BV">Stellar Dev Discord</a>)</li>
              <li>Find the #sorobanathon-submission forum</li>
              <li>Click “New Post”</li>
              <li>Title it the same as your submission title</li>
              <li>Add a line of description about your submission</li>
              <li>Add the link to your submission</li>
              <li>And then click “Post”</li>
              <li>Once you’ve posted in Discord, you’re done!</li>
            </ul>
            <p>We will review your submission within a week and reply to your submission thread to let you know if it qualifies to earn a reward. If it does, we will ask you to complete a form to collect the info necessary to validate and deliver the reward.</p>
            <p>If your submission does not qualify, we may provide feedback on what's missing or how you can improve your submission so it qualifies. Once you have made the requested revisions, we will re-review your submission and let you know if it qualifies for a reward.</p>
            <p><strong>Note: </strong>SDF is under no obligation to make any rewards if there are no eligible submissions or Eligible Individuals (as defined below), or if Eligible Individuals do not successfully complete the compliance and tax obligations set forth below.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
