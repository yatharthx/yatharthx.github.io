export interface Blog {
  name: string;
  url: string;
}

export const techBlogs: Blog[] = [
  { name: "Dan Luu", url: "https://danluu.com/" },
  { name: "Alex Kladov", url: "https://matklad.github.io/" },
  { name: "Sean Goedecke", url: "https://www.seangoedecke.com/" },
  { name: "Rauno Freiberg", url: "https://rauno.me/craft" },
  { name: "Steve Klabnik", url: "https://steveklabnik.com/writing/" },
  { name: "Jake Archibald", url: "https://jakearchibald.com/" },
  { name: "Brendan Gregg", url: "https://www.brendangregg.com/blog/index.html" },
  { name: "Salvatore Sanfilippo", url: "https://antirez.com/latest/0" },
  { name: "Phil Eaton", url: "https://notes.eatonphil.com/" },
  { name: "Marc Brooker", url: "https://brooker.co.za/blog/" },
  { name: "Filippo Valsorda", url: "https://words.filippo.io/" },
  { name: "Russ Cox", url: "https://research.swtch.com/" },
  { name: "Nelson Elhage", url: "https://blog.nelhage.com/" },
  { name: "Will Larson", url: "https://lethain.com/" },
  { name: "Brian Cantrill", url: "https://bcantrill.dtrace.org/" },
  { name: "Martin Kleppmann", url: "https://martin.kleppmann.com/archive.html" },
  { name: "Xe Iaso", url: "https://xeiaso.net/blog/" },
  { name: "Daniel Lemire", url: "https://lemire.me/blog/" },
  { name: "Joel Spolsky", url: "https://www.joelonsoftware.com/" },
  { name: "Cam Pederson", url: "https://campedersen.com/" },
];

export const otherBlogs: Blog[] = [
  { name: "Andy Matuschak", url: "https://andymatuschak.org/" },
  { name: "Print Magazine", url: "https://www.printmag.com/" },
  { name: "Patrick McKenzie", url: "https://www.bitsaboutmoney.com/" },
  { name: "Thorsten Ball", url: "https://registerspill.thorstenball.com/" },
  { name: "Kevin Kelly", url: "https://substack.com/@kevinkelly" },
  { name: "Henrik Karlsson", url: "https://www.henrikkarlsson.xyz/" },
  { name: "Anu", url: "https://www.workingtheorys.com/" },
  { name: "Brian Potter", url: "https://www.construction-physics.com/" },
  { name: "Venkatesh Rao", url: "https://ribbonfarm.com/" },
];

export const allBlogs: Blog[] = [...techBlogs, ...otherBlogs];
