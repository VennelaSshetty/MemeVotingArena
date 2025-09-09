const memes = [
  {
    title: "When you finally solve that coding bug",
    image: { url: "https://th.bing.com/th/id/OIP.bIhhvoy_Yqvh2oM0Cpko6AHaE3?w=293&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "coding_bug_solved" },
    category: "Tech"
  },
  {
    title: "Me trying to explain memes to my parents",
    image: { url: "https://th.bing.com/th/id/OIP.FI7KjOfLAUIh-T6ex4dRyQHaEI?w=317&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "explain_memes" },
    category: "Life"
  },
  {
    title: "When the game updates for 2 hours",
    image: { url: "https://th.bing.com/th/id/OIP.NDhvK7UaerVA5WqYxrkrcgAAAA?w=237&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "game_update" },
    category: "Gaming"
  },
  {
    title: "When the internet goes down for 5 minutes",
    image: { url: "https://i.imgflip.com/2hgfw.jpg", filename: "internet_down" },
    category: "Internet"
  },
  {
    title: "When the professor says 'this will be easy'",
    image: { url: "https://th.bing.com/th/id/OIP.hBJk1XQq2ACI4TbGNbuiRQHaGS?w=249&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "easy_professor" },
    category: "Study"
  },
   {
    title: "When you see your crush after a week",
    image: { url: "https://th.bing.com/th/id/OIP.MrtXJwhrOipR8VR0buxBPQHaHK?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "crush_see" },
    category: "Love"
  },
  {
    title: "Mom vs WiFi speed",
    image: { url: "https://th.bing.com/th/id/OIP.-_svlXSyFodPYdTUYgSv6AHaG4?w=197&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "mom_wifi" },
    category: "Family"
  },
  {
    title: "Cat plotting your doom",
    image: { url: "https://i.imgflip.com/1otk96.jpg", filename: "cat_plot" },
    category: "Pets"
  },
  {
    title: "Gaming all night, regrets in the morning",
    image: { url: "https://th.bing.com/th/id/OIP.DINFlaN3VMdHBosvqgHUpQHaD4?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "gaming_night" },
    category: "Gaming"
  },
  {
    title: "Me staring at my fridge like nothing's inside",
    image: { url: "https://th.bing.com/th/id/OIP.YKyNG02WuqioeSZwlEAtjgHaFe?w=285&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "fridge_stare" },
    category: "Food"
  },
  {
    title: "Life is just a series of bugs",
    image: { url: "https://th.bing.com/th/id/OIP.xetvQeDklayGceyZJxxUOAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7", filename: "life_bugs" },
    category: "Life"
  },
    {
    title: "When your boss says 'we need this ASAP'",
    image: { url: "https://th.bing.com/th/id/OIP.-m6QCaSvFdULsh1d2A37xwHaHa?w=128&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "boss_asap" },
    category: "Tech"
  },
  {
    title: "When the movie had a plot twist no one expected",
    image: { url: "https://i.imgflip.com/2t5.jpg", filename: "movie_plot_twist" },
    category: "Movies"
  },
  {
    title: "Back to school after holidays like...",
    image: { url: "https://i.imgflip.com/1ur9b0.jpg", filename: "school_back" },
    category: "School"
  },
  {
    title: "Tech support: 'Have you tried turning it off and on?'",
    image: { url: "https://th.bing.com/th/id/OIP.ktlNIRNE9ps5pzV1F1YquQHaFn?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "tech_support" },
    category: "Tech"
  },
  {
    title: "When your group chat blows up and you're silent",
    image: { url: "https://i.imgflip.com/1bhv.jpg", filename: "silent_chat" },
    category: "Internet"
  },
  {
    title: "Dinner with family be like",
    image: { url: "https://th.bing.com/th/id/OIP.DSqslACHLsrjdHkqSH0TJAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "family_dinner" },
    category: "Family"
  },
  {
    title: "Love at first sight? More like panic at first sight",
    image: { url: "https://th.bing.com/th/id/OIP.QeHmfYF5E-O-UKKm6othQAHaJQ?w=158&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "love_panic" },
    category: "Love"
  },
  {
    title: "Pets watching you eat their food",
    image: { url: "https://th.bing.com/th/id/OIP.LjtkTYjGiZZdygWC4FLTdwHaKx?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "pets_food_stare" },
    category: "Pets"
  },
  {
    title: "When your food arrives cold",
    image: { url: "https://th.bing.com/th/id/OIP.vcmQPMIlEUZEfIedLvf6ZAHaFj?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "cold_food" },
    category: "Food"
  },
   {
    title: "Every group project be like",
    image: { url: "https://th.bing.com/th/id/OIP.JSqz4vEMeRT5mcc9135unAHaFj?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme21.jpg" },
    category: "Study"
  },
  {
    title: "Family group chat: Everyone replying at once",
    image: { url: "https://th.bing.com/th/id/OIP.CEuk57Hsq0XfEBp6o7qG8gHaGS?w=243&h=206&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme22.jpg" },
    category: "Family"
  },
  {
    title: "When your crush likes your old photo",
    image: { url: "https://th.bing.com/th/id/OIP.eKoMFMnIBQ1nqrCSu05cIQHaHl?w=187&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme23.jpg" },
    category: "Love"
  },
  {
    title: "Pet be like: 'Feed me or regret it!'",
    image: { url: "https://th.bing.com/th/id/OIP.eiw4zhNJoeVLozepiZbDXwHaJ6?w=149&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme24.jpg" },
    category: "Pets"
  },
  {
    title: "Internet is down and you realize how dependent you are",
    image: { url: "https://th.bing.com/th/id/OIP.t1te2BX0yLCqEAIpLj4GPQHaIS?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme25.jpg" },
    category: "Internet"
  },
  {
    title: "When you get a headshot in a competitive game",
    image: { url: "https://th.bing.com/th/id/OIP.5yRUZgkkTXQ8xNVOe9jBdwAAAA?w=257&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme26.jpg" },
    category: "Gaming"
  },
  {
    title: "When the restaurant gives you extra fries unexpectedly",
    image: { url: "https://th.bing.com/th/id/OIP.2d-zUKdcfBpiHbEMHAQjDwHaHc?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme27.jpg" },
    category: "Food"
  },
  {
    title: "Life is loading… please wait",
    image: { url: "https://www.bing.com/th/id/OGC.69b7206d4af61b76611965d3ccf7cc5e?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.kym-cdn.com%2fphotos%2fimages%2fnewsfeed%2f000%2f344%2f341%2f09d.gif&ehk=EfwQOdC38dDrWzGNxLQWFCPAOkj781c8rAkMDoArcnY%3d", filename: "meme28.jpg" },
    category: "Life"
  },
  {
    title: "When a movie exceeds your expectations",
    image: { url: "https://th.bing.com/th/id/OIP.AXLPq--vRC3S8gkPEplunwHaE8?w=191&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme29.jpg" },
    category: "Movies"
  },
  {
    title: "When u borrowed pen from ur friend and see that's your lost pen",
    image: { url: "https://th.bing.com/th/id/OIP.AFgdDT3WsdzA5F3dL6ZxwgHaHx?w=207&h=218&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme30.jpg" },
    category: "School"
  },
  {
    title: "Codind Reels vs Coding Reality",
    image: { url: "https://th.bing.com/th/id/OIP.35FgGm9TNgxtE4JAveypEgHaHC?w=235&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme31.jpg" },
    category: "Tech"
  },
  {
    title: "When you're the last one in class still awake",
    image: { url: "https://th.bing.com/th/id/OIP.-gff_t62ChEIzSMJxR9PmgHaF6?w=243&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme32.jpg" },
    category: "Study"
  },
  {
    title: "Family dinner: Who finished the dessert?!",
    image: { url: "https://th.bing.com/th/id/OIP.6pmw7M-nMzxaX1Mq7ybHDgHaE8?w=280&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme33.jpg" },
    category: "Family"
  },
  {
    title: "When your date says 'Let's keep it casual'",
    image: { url: "https://th.bing.com/th/id/OIP.rh_z8aey4nbQ6ckat3sb7QHaHi?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme34.jpg" },
    category: "Love"
  },
  {
    title: "When your cat ignores you all day but sits on your keyboard",
    image: { url: "https://th.bing.com/th/id/OIP.P3DeUZxFbngZWrinRwjG1gHaFj?w=223&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme35.jpg" },
    category: "Pets"
  },
  {
    title: "WiFi drops, and youtube videos transition be like",
    image: { url: "https://th.bing.com/th/id/OIP.76kp75qdMSq880WEQKvWyAHaEe?w=278&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme36.jpg" },
    category: "Internet"
  },
  {
    title: "When you unlock a rare game skin",
    image: { url: "https://th.bing.com/th/id/OIP.9FXth7mvBV8wuxmkItpFQAHaGQ?w=222&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme37.jpg" },
    category: "Gaming"
  },
  {
    title: "When someone eats your food from the fridge",
    image: { url: "https://th.bing.com/th/id/OIP.MPjkbT8_44tzdsr82RpwSQHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme38.jpg" },
    category: "Food"
  },
  {
    title: "Life hack: Nap first, adult later",
    image: { url: "https://th.bing.com/th/id/OIP.Mr2AxD54bUcQ6i2nzqOwAgAAAA?w=144&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme39.jpg" },
    category: "Life"
  },
  {
    title: "When the movie spoiler shows up on your feed",
    image: { url: "https://th.bing.com/th/id/OIP.yT3l0ibYj8ax5ItOj4CylgHaFy?w=233&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", filename: "meme40.jpg" },
    category: "Movies"
  }
];

module.exports = { data: memes };
