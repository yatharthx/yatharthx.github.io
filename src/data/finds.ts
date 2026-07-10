export interface Find {
  url: string;
  title: string;
  author: string;
  description?: string;
}

export const finds: Find[] = [
  {
    url: "https://www.makingsoftware.com/",
    title: "Making Software",
    author: "Dan Hollick",
    description: "A reference manual for people who design and build software.",
  },
  {
    url: "https://www.printmag.com/typography/print-type-report-2026/",
    title: "Type Report 2026",
    author: "Meg Farmer for PrintMag",
    description: "The 2026 annual report on type design and typography.",
  },
  {
    url: "https://opentui.com",
    title: "OpenTUI",
    author: "Folks at Anomaly",
    description: "Terminal UI framework on a native Zig core",
  },
  {
    url: "https://sheets.works/data-viz/keyboard-sounds",
    title: "The Listening Museum",
    author: "sheets.works",
    description: "36 mechanical keyboards and switches from 40+ years, curated and sound-mapped",
  },
  {
    url: "https://ciechanow.ski/",
    title: "Interactive Articles",
    author: "Bartosz Ciechanowski",
    description: "Playful and interactive articles on how things work",
  },
  {
    url: "https://www.lostartoflogarithms.com/",
    title: "Lost Art of Logarithms",
    author: "Charles Petzold",
    description: "A web-book-in-progress on Logarithms",
  },
  {
    url: "https://tonsky.me/blog/tahoe-icons",
    title: "It's hard to justify Tahoe icons",
    author: "Nikita Prokopov",
  },
  {
    url: "https://thebookofshaders.com/",
    title: "The Book of Shaders",
    author: "Patricio and Jen",
    description: "A gentle step-by-step guide through the abstract and universal universe of Fragment Shaders",
  },
  {
    url: "https://oliverjeffers.com/",
    title: "Internet home of artist Oliver Jeffers",
    author: "Oliver Jeffers",
  },
  {
    url: "https://campedersen.com/code-is-clay",
    title: "Code is Clay",
    author: "Cameron Pedersen",
  },
];
