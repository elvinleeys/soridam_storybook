import { defineConfig } from "tsup";
import spawn from "cross-spawn";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "next",
    "react-circular-progressbar",
    "recharts",
  ],
  outDir: "dist",
  bundle: false,
  minify: false,
  target: "es2018",
  treeshake: true,
  onSuccess: async () => {
    console.log("🌱 Building Tailwind CSS...");

    const result = spawn.sync(
      "npx",
      [
        "tailwindcss",
        "-i",
        "./src/globals.css",
        "-o",
        "./dist/index.css",
        "--content",
        "./src/**/*.{ts,tsx}",
        "--minify",
      ],
      { stdio: "inherit" }
    );

    if (result.error) {
      throw result.error;
    }

    console.log("✅ Built Tailwind CSS into dist/index.css");
  },
});
