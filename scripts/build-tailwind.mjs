import { build } from "@tailwindcss/node";

await build({
  files: ["./src/globals.css"],
  output: "./dist/index.css",
  minify: true,
  content: ["./src/**/*.{ts,tsx}"],
});

console.log("✅ Tailwind CSS built successfully");
