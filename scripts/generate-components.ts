import fs from "fs";
import path from "path";

const SRC_ROOT = path.resolve("src/design-system");
const PACKAGE_JSON_PATH = path.resolve("package.json");

/**
 * 각 컴포넌트 폴더에 index.ts 생성
 * 항상 덮어쓰기
 */
function generateIndexTs(dirPath: string) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  files.forEach((file) => {
    if (file.isDirectory()) {
      const componentDir = path.join(dirPath, file.name);
      const tsxFiles = fs
        .readdirSync(componentDir)
        .filter((f) => f.endsWith(".tsx"));

      if (tsxFiles.length) {
        const componentFile = tsxFiles[0];
        const componentName = path.basename(componentFile, ".tsx");
        const indexTsPath = path.join(componentDir, "index.ts");

        // 항상 덮어쓰기
        const content = `export { default } from "./${componentName}";\n`;
        fs.writeFileSync(indexTsPath, content, "utf8");
        console.log(`✅ Created/Updated index.ts in ${componentDir}`);
      }

      // 재귀 호출
      generateIndexTs(componentDir);
    }
  });
}

/**
 * package.json exports 업데이트
 * ESM + 타입 정의 지원
 */
function updatePackageExports() {
  const pkgJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf8"));
  const exportsMap: Record<string, any> = {
    ".": pkgJson.exports?.["."] || {},
    "./styles": "./dist/index.css",
  };

  function addExports(dirPath: string) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const componentDir = path.join(dirPath, file.name);
        const indexTs = path.join(componentDir, "index.ts");

        if (fs.existsSync(indexTs)) {
          const distPath = path
            .relative(SRC_ROOT, componentDir)
            .split(path.sep)
            .join("/");

          exportsMap[`./${distPath}`] = {
            import: `./dist/${distPath}/index.js`,
            require: `./dist/${distPath}/index.js`,
            types: `./dist/${distPath}/index.d.ts`,
          };
        }

        addExports(componentDir);
      }
    });
  }

  addExports(SRC_ROOT);

  pkgJson.exports = exportsMap;
  fs.writeFileSync(
    PACKAGE_JSON_PATH,
    JSON.stringify(pkgJson, null, 2),
    "utf8"
  );
  console.log("✅ package.json exports updated");
}

// 실행
generateIndexTs(SRC_ROOT);
updatePackageExports();
