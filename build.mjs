import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import { readFileSync, writeFileSync, watch } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(__dirname, "assets/css/input.css");
const outputPath = path.resolve(__dirname, "assets/css/out.css");

async function build() {
  const css = readFileSync(inputPath, "utf-8");
  const result = await postcss([tailwindcss()]).process(css, {
    from: inputPath,
  });
  writeFileSync(outputPath, result.css);
  console.log("Built Tailwind CSS");
}

const args = process.argv.slice(2);
if (args.includes("--watch")) {
  watch(inputPath, { recursive: false }, (eventType, filename) => {
    console.log(`File ${filename} changed, rebuilding...`);
    build().catch(console.error);
  });
  console.log("Watching for changes...");
} else {
  build();
}
