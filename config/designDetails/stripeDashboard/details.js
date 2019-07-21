// @flow
export default [
  {
    description:
      "*Sidebar: A few years ago I ran a small side project. Towards the end of that project I explored using Stripe as a way to accept payments online. So fortunately I have an account with a few transactions here to demonstrate the app.*\r\n\r\nStripe is one of the few companies that continues to push the use of shadows, highlights and depth in their applications. This, combined with intentional animations and clean transitions, feels a bit like the halfway point between iOS 6 and 7. Not purely-flat. Not overly-embellished.\r\n\r\nIt's also worth noting that there's no registration here, or walkthroughs or superflous messaging. This app is for existing users and there's no need for Stripe to add extra complexity here by trying to onboard prospects. ",
    title: 'Launch',
    media: [
      'https://player.vimeo.com/external/157887642.hd.mp4?s=5fd378b63ea6bbb6d7c828af12056bc7757f0c93&profile_id=167',
    ],
  },
  {
    description:
      'Microinteractions like these add value to the entire user experience. Rather than being jostled around with static view changes, Stripe helps introduce people to their dashboard with motion. Animation also buys Stripe time to load data in the background while preserving an experience that feels snappy and responsive. ',
    title: 'Login',
    media: [
      'https://player.vimeo.com/external/157887682.hd.mp4?s=4c3661c90aa158f993985c4c85767b8ca91c755f&profile_id=167',
    ],
  },
  {
    description:
      'Stripe makes parsing graphs effortless. The information is clear and concise, conveyed with just a few elements on the screen.',
    title: 'Graphs',
    media: [
      'https://player.vimeo.com/external/157887715.hd.mp4?s=d82fcd654858a39e4e714674afe66c7db86f7016&profile_id=113',
    ],
  },
  {
    description:
      "I love the custom loader here, complimenting the blue gradients used throughout the app. This video demonstrates navigating between the tabs within my Activity pane. We're also introduced to perhaps the most unique view hierarchy I've seen in an app like this: cards. More on this next...",
    title: 'List Views',
    media: [
      'https://player.vimeo.com/external/157887747.hd.mp4?s=cc02f260af3a173f96c852eecdd6bd1972ac7f3d&profile_id=113',
    ],
  },
  {
    description:
      "Okay a few things here that Stripe has pulled off well:\r\n 1. semi-transparent blue shadows to stay on-theme\r\n 2. material-style ink in iOS\r\n 3. cards as views\r\n\r\nLet's dig in:\r\n\r\n 1. The blue overlay is a nice touch. The default decision here would have been semi-transparent black; but as we can tell Stripe Dashboard is anything but default.\r\n\r\n 2. Ah, ink drops or ripples or splashes or whatever we're calling it these days. Designers have come to associate the radiating circles that appear on-touch as a strictly Material pattern, reserved for use on Android applications. Here we see it executed on iOS and, while strange at first, it actually feels...good. I'm not surprised that more iOS apps outside of the Google family aren't adopting this effect. First, it's a lot of extra work to get it right. Second, it is absolutely a foreign paradigm to Apple's design standards, set down in the HIG and iOS documentation. \r\n\r\n     But my personal opinion is that designers shouldn't be so beholden to platform “guidelines.” Guidelines change every year as platforms learn more, hardware becomes better, screens become richer. Some of the best design interactions have come from outside Google and Apple: pull to refresh and swipe to delete come to mind, courtesy of Loren Brichter and Palm's webOS, respectively.\r\n\r\n 3. Again, the default decision here when tapping on an item in my transfer history would be to slide a new view in from the right, filling the entire screen. That's the pattern we've come to expect. But Stripe breaks the mold here and introduces the rounded card which can be dismissed with just a swipe. ",
    title: 'Ink + Cards',
    media: [
      'https://player.vimeo.com/external/157887402.hd.mp4?s=45e0aa133f63bd296238ac6e099fe473f817c223&profile_id=167',
    ],
  },
  {
    description:
      "Scrubbing on graphs can be a tricky design problem. You need to preserve context and display the necessary data while also accounting for the fact that a person's finger is covering most of your UI. Stripe handles this well by showing and hiding different bits of information, avoiding the need for clunky tooltips. Animations and subtle bouncing are icing on the cake in this interaction.",
    title: 'Scrubbing',
    media: [
      'https://player.vimeo.com/external/157887405.hd.mp4?s=df942c0e81a3de0fa7f6a740f2dd99fb454f4a38&profile_id=167',
    ],
  },
  {
    description:
      'Even changing the date scope on the graph has subtle bouncing and depth. Sliding the graph as the date range changes can help to preserve context (probably more-so for people that have a more populated graph than I do).',
    title: 'Date Filter',
    media: [
      'https://player.vimeo.com/external/157887477.hd.mp4?s=8b63a677547e5444aa427a4f4a27159e4e79cee0&profile_id=167',
    ],
  },
  {
    description:
      "For some reason there's a toggle on the navigation here to collapse the tabs. Understanding the fact that I lack background on decisions like this, my outside opinion is that this interaction feels unnecessary. The tabs actually help provide more context to the list view when expanded, and they don't take up such a significant amount of vertical space to be a concern. But again, I lack context: I have to trust that Stripe's designers had a very concrete reason for allowing users to hide the tabs.",
    title: 'Header Toggle',
    media: [
      'https://player.vimeo.com/external/157887421.hd.mp4?s=442871a708415263388e7630ac24394a32f3bea1&profile_id=113',
    ],
  },
  {
    description:
      "Not much to say here except that I love how fluid the app feels to navigate. I never leave my dashboard; I'm always just pushing or pulling or swiping data as I need it.",
    title: 'Scrolling',
    media: [
      'https://player.vimeo.com/external/157887424.hd.mp4?s=d136ad1b6d2cbb39b9b8b134bc2b472c749e6832&profile_id=167',
    ],
  },
  {
    description:
      "Stripe went all-in on the cards-as-views navigation pattern. When I tap the search icon I get, you guessed it, another card with a pre-focused search field. I think the lack of a clear signifier for how to exit this screen is balanced with how lightweight it feels. I suppose Stripe is making some clear assumptions here about their audience: probably more fluent with technology and touch screens, thus making it unnecessary to include a big 'X' or 'Cancel' button. \r\n\r\nAgain, it creates the perception that I'm never actually leaving my dashboard; instead I'm just pulling and swiping information as-needed.",
    title: 'Open Search',
    media: [
      'https://player.vimeo.com/external/157887423.hd.mp4?s=ca2dd4a9d03116ecfd7a0a7d0d1ccfd193bdff7c&profile_id=113',
    ],
  },
  {
    description:
      "How can a card-based view navigation possibly work in a multi-step flow? Stack 'em. This was surprising the first time I found myself with a stack of cards on my screen. In a way it offers one of the most-clear indications of where I currently am in the navigational hierarchy (compared to traditional full-page views with labels in the navbar). \r\n\r\nI can't help but be in awe of the level of visual polish here. The 1px depth added to the search UI, the smooth transitions as cards are pushed and pulled along the z-index...it's beautiful and inspiring.",
    title: 'Searching',
    media: [
      'https://player.vimeo.com/external/157887426.hd.mp4?s=99676ac7708fb49b1eb7e992691ee40eb8277a85&profile_id=113',
    ],
  },
  {
    description:
      "Settings views tend to be where we stuff all the \"extras\" that some people need every now and then, but most people don't ever use. I feel like Stripe worked hard to preserve the simplicity of this screen. As I mentioned at the beginning of this post, Stripe's web dashboard gives users an insane amount of control and configurations. It must have taken a lot of restraint to narrow down the information that gets presented on this card, but the restraint has paid off. It's clear and obvious; I'm not drowning in options or explanation text.",
    title: 'Settings',
    media: [
      'https://player.vimeo.com/external/157887428.hd.mp4?s=c3f97e1c78f06bbe039ac3b229e70104905b5fdd&profile_id=167',
    ],
  },
  {
    description:
      'This is my favorite detail in the whole app. Despite every other video in this post showing off something creative and new and visually stunning, *this* right here is something I’ve never seen. \r\n\r\nWhen you log out, the settings card gracefully dismisses to the left; your dashboard is gone and in its place is the login form.\r\n\r\nI imagine that the "signing-out" piece of the user experience is at the very bottom of most designers list of priorities. But somehow the designers at Stripe thought of everything, including this beautiful way to transition someone through a signout flow.',
    title: 'Signing Out',
    media: [
      'https://player.vimeo.com/external/157887427.hd.mp4?s=49b642a2de7015e0e8c115df26aa843c08652529&profile_id=113',
    ],
  },
  {
    description:
      "I could sit and stare at any Stripe product page all day. The [landing page for Dashboard](https://stripe.com/dashboard/iphone) isn't well-advertised, but that doesn't mean it received any less care. It animates beautifully into place and kicks off a video reel to showcase some of the app's different functions.\r\n\r\nThis page is also especially useful for me here, since the demo video shows several interactions that I wasn't able to capture in this post!",
    title: 'Landing Page',
    media: [
      'https://player.vimeo.com/external/157887475.hd.mp4?s=acf74e2896bead7ace08fdd64db1c34eb8907f92&profile_id=119',
    ],
  },
];
