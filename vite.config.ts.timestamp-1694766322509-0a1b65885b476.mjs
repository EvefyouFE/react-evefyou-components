// vite.config.ts
import { defineConfig } from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.1_less@4.1.3/node_modules/vite/dist/node/index.js";
import react from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dts from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/vite-plugin-dts@3.5.1_@types+node@20.5.1_typescript@5.1.6_vite@4.4.5/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.1.6_vite@4.4.5/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "react-evefyou-components",
  version: "1.0.46",
  description: "",
  type: "module",
  main: "./cjs/index.js",
  module: "./es/index.js",
  types: "./es/index.d.ts",
  exports: {
    ".": {
      import: "./es/index.js",
      require: "./cjs/index.js"
    },
    "./windicss": {
      import: "./css/windi.css",
      require: "./css/windi.css"
    },
    "./locales/zh_CN": {
      import: "./es/locales/zh_CN/index.js",
      require: "./cjs/locales/zh_CN/index.js",
      types: "./es/locales/zh_CN/index.d.ts"
    },
    "./locales/en_US": {
      import: "./es/locales/en_US/index.js",
      require: "./cjs/locales/en_US/index.js",
      types: "./es/locales/en_US/index.d.ts"
    },
    "./BasicButton": {
      import: "./es/BasicButton/index.js",
      require: "./cjs/BasicButton/index.js"
    },
    "./BasicDropdown": {
      import: "./es/BasicDropdown/index.js",
      require: "./cjs/BasicDropdown/index.js"
    },
    "./BasicForm": {
      import: "./es/BasicForm/index.js",
      require: "./cjs/BasicForm/index.js"
    },
    "./BasicHelp": {
      import: "./es/BasicHelp/index.js",
      require: "./cjs/BasicHelp/index.js"
    },
    "./BasicIcon": {
      import: "./es/BasicIcon/index.js",
      require: "./cjs/BasicIcon/index.js"
    },
    "./BasicMenu": {
      import: "./es/BasicMenu/index.js",
      require: "./cjs/BasicMenu/index.js"
    },
    "./BasicModal": {
      import: "./es/BasicModal/index.js",
      require: "./cjs/BasicModal/index.js"
    },
    "./BasicPopButton": {
      import: "./es/BasicPopButton/index.js",
      require: "./cjs/BasicPopButton/index.js"
    },
    "./BasicScroll": {
      import: "./es/BasicScroll/index.js",
      require: "./cjs/BasicScroll/index.js"
    },
    "./BasicTable": {
      import: "./es/BasicTable/index.js",
      require: "./cjs/BasicTable/index.js"
    },
    "./BasicTitle": {
      import: "./es/BasicTitle/index.js",
      require: "./cjs/BasicTitle/index.js"
    },
    "./BasicBreadcrumb": {
      import: "./es/BasicBreadcrumb/index.js",
      require: "./cjs/BasicBreadcrumb/index.js"
    },
    "./BasicFallback": {
      import: "./es/BasicFallback/index.js",
      require: "./cjs/BasicFallback/index.js"
    },
    "./BasicNProgress": {
      import: "./es/BasicNProgress/index.js",
      require: "./cjs/BasicNProgress/index.js"
    },
    "./BasicResult": {
      import: "./es/BasicResult/index.js",
      require: "./cjs/BasicResult/index.js"
    },
    "./BasicTabs": {
      import: "./es/BasicTabs/index.js",
      require: "./cjs/BasicTabs/index.js"
    },
    "./BasicList": {
      import: "./es/BasicList/index.js",
      require: "./cjs/BasicList/index.js"
    },
    "./MessageHelper": {
      import: "./es/MessageHelper/index.js",
      require: "./cjs/MessageHelper/index.js"
    }
  },
  files: [
    "es",
    "cjs",
    "css"
  ],
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    "build:tsc": "tsup",
    clean: "rimraf node_modules",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:build": "rimraf es && rimraf cjs && rimraf css && rimraf dist && rimraf locale",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/EvefyouFE/react-evefyou-components.git"
  },
  keywords: [
    "react",
    "components",
    "evefyou"
  ],
  author: "EvefyouFE",
  license: "MIT",
  bugs: {
    url: "https://github.com/EvefyouFE/react-evefyou-components/issues"
  },
  homepage: "https://github.com/EvefyouFE/react-evefyou-components#readme",
  peerDependencies: {
    "@ant-design/icons": ">=5.0.1",
    "@dnd-kit/core": ">=6.0.8",
    "@dnd-kit/modifiers": ">=6.0.1",
    "@dnd-kit/sortable": ">=7.0.2",
    "@dnd-kit/utilities": ">=3.2.1",
    "@iconify/react": ">=4.1.1",
    ahooks: ">=3.7.6",
    antd: ">=5.6.3",
    classnames: ">=2.3.2",
    moment: ">=2.29.4",
    nprogress: ">=0.2.0",
    ramda: ">=0.29.0",
    react: ">=18.2.0",
    "react-dom": ">=18.2.0",
    "react-draggable": ">=4.4.5",
    "react-evefyou-common": ">=1.0.17",
    "react-evefyou-hooks": ">=1.0.28",
    "react-evefyou-router": ">=1.0.15",
    "react-intl": ">=6.4.4",
    "react-router": ">=6.10.0",
    "react-router-dom": ">=6.10.0",
    uuid: ">=9.0.0"
  },
  devDependencies: {
    "@ant-design/colors": "^7.0.0",
    "@types/node": "^20.5.1",
    "@types/nprogress": "^0.2.0",
    "@types/ramda": "^0.29.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@types/uuid": "^9.0.1",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    cssnano: "^6.0.1",
    "esbuild-plugin-less": "^1.2.4",
    eslint: "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    less: "^4.1.3",
    postcss: "^8.4.23",
    "postcss-cli": "^10.1.0",
    "postcss-html": "^1.5.0",
    "postcss-less": "^6.0.0",
    "postcss-preset-env": "^8.3.2",
    rimraf: "^5.0.1",
    tslib: "^2.6.1",
    tsup: "^7.2.0",
    typescript: "^5.1.6",
    vite: "^4.4.5",
    "vite-plugin-dts": "^3.5.1",
    "vite-plugin-lib-inject-css": "^1.2.1",
    "vite-plugin-windicss": "^1.9.0",
    "vite-tsconfig-paths": "^4.2.0",
    windicss: "^3.5.6"
  }
};

// vite.config.ts
import cssnanoPlugin from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/cssnano@6.0.1_postcss@8.4.23/node_modules/cssnano/src/index.js";
import postcssPresetEnv from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/postcss-preset-env@8.3.2_postcss@8.4.23/node_modules/postcss-preset-env/dist/index.mjs";
import WindiCSS from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/vite-plugin-windicss@1.9.0_vite@4.4.5/node_modules/vite-plugin-windicss/dist/index.mjs";
import { libInjectCss } from "file:///C:/projects/frontend/evefyou/react-evefyou-components/node_modules/.pnpm/vite-plugin-lib-inject-css@1.2.1_vite@4.4.5/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import fs from "fs";
var __vite_injected_original_dirname = "C:\\projects\\frontend\\evefyou\\react-evefyou-components";
var pathResolve = (v) => path.resolve(__vite_injected_original_dirname, v);
var libName = "components";
var libFullName = `react-evefyou-${libName}`;
var externalPackages = [...Object.keys(package_default.peerDependencies)];
var regexOfPackages = externalPackages.map((packageName) => new RegExp(`^${packageName}(\\/.*)?`));
var components = Object.keys(package_default.exports).filter((e) => e !== "." && !e.includes("locales") && !e.includes("css")).map((e) => e.split("./")[1]);
var locales = Object.keys(package_default.exports).filter((e) => e.includes("locales")).map((e) => e.split("./")[1]);
var entries = Object.keys(package_default.exports).filter((e) => !e.includes("css")).reduce((acc, cur) => {
  const isIndex = cur === ".";
  cur = cur.split("./")[1];
  const key = isIndex ? "index" : cur;
  const val = isIndex ? pathResolve(`${libName}/index.ts`) : pathResolve(`${libName}/${cur}/index.ts`);
  acc[key] = val;
  return acc;
}, {});
var formats = ["es", "cjs"];
console.log("entries", entries);
function moveFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error("\u79FB\u52A8\u6587\u4EF6\u5931\u8D25:", err);
    } else {
      console.log("\u6587\u4EF6\u5DF2\u6210\u529F\u79FB\u52A8\u5230\u65B0\u4F4D\u7F6E");
    }
  });
}
var vite_config_default = defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: [`./${libName}`],
        fileExtensions: ["tsx", "ts"]
      }
    }),
    tsconfigPaths(),
    dts({
      outDir: formats,
      rollupTypes: true,
      afterBuild() {
        console.log("start...", (/* @__PURE__ */ new Date()).getTime());
        setTimeout(() => {
          formats.forEach((f) => {
            components.forEach((comp) => {
              const oldPath = pathResolve(`./${f}/${comp}.d.ts`);
              const newPath = pathResolve(`./${f}/${comp}/index.d.ts`);
              moveFile(oldPath, newPath);
            });
            locales.forEach((l) => {
              fs.rm(pathResolve(`${f}/${l}.d.ts`), (err) => {
                console.error("\u5220\u9664\u6587\u4EF6\u5931\u8D25:", err);
              });
              const ol = l.split("locales/")[1];
              const oldPath = pathResolve(`./${f}/${ol}.d.ts`);
              const newPath = pathResolve(`./${f}/${l}/index.d.ts`);
              console.log(oldPath, newPath);
              moveFile(oldPath, newPath);
            });
          });
        }, 1e4);
      }
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        sourcemap: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: "."
      },
      entry: entries,
      name: libFullName,
      formats,
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          // manualChunks: (id) => components.find(e => id.includes(e))?.concat('/index'),
          chunkFileNames: "[format]/[name].js",
          assetFileNames: "[ext]/[name].[ext]",
          entryFileNames: (chunkInfo) => chunkInfo.name === "index" ? "[format]/[name].js" : "[format]/[name]/index.js"
        },
        external: regexOfPackages
      }
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${pathResolve(`${libName}/styles/variables/index.less`)}";`,
          "primary-color": "#0960bd",
          "text-color": "#c9d1d9",
          "text-color-base": "#000000d9"
        }
      }
    },
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: "default"
        }),
        postcssPresetEnv({})
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcZnJvbnRlbmRcXFxcZXZlZnlvdVxcXFxyZWFjdC1ldmVmeW91LWNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXGZyb250ZW5kXFxcXGV2ZWZ5b3VcXFxccmVhY3QtZXZlZnlvdS1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9wcm9qZWN0cy9mcm9udGVuZC9ldmVmeW91L3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiOy8qXG4gKiBAQXV0aG9yOiBFdmVmeW91RkVcbiAqIEBEYXRlOiAyMDIzLTA4LTEwIDEzOjQyOjQ4XG4gKiBARmlsZVBhdGg6IFxccmVhY3QtZXZlZnlvdS1jb21wb25lbnRzXFx2aXRlLmNvbmZpZy50c1xuICogQERlc2NyaXB0aW9uOiBcbiAqIEV2ZXJ5b25lIGlzIGNvbWluZyB0byB0aGUgd29ybGQgaSBsaXZlIGluLCBhcyBpIGFtIGdvaW5nIHRvIHRoZSB3b3JsZCBsaXZlcyBmb3IgeW91LiBcdTRFQkFcdTRFQkFcdTc2ODZcdTVGODBcdTYyMTFcdTRFMTZcdTc1NENcdUZGMENcdTYyMTFcdTRFM0FcdTRFMTZcdTc1NENcdTRFMkRcdTRFQkFcdTRFQkFcdTMwMDJcbiAqIENvcHlyaWdodCAoYykgMjAyMyBieSBFdmVmeW91RkUvZXZlZiwgQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCBjc3NuYW5vUGx1Z2luIGZyb20gXCJjc3NuYW5vXCI7XG5pbXBvcnQgcG9zdGNzc1ByZXNldEVudiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnO1xuaW1wb3J0IFdpbmRpQ1NTIGZyb20gJ3ZpdGUtcGx1Z2luLXdpbmRpY3NzJztcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IHBhdGhSZXNvbHZlID0gKHY6IHN0cmluZykgPT4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdilcblxuY29uc3QgbGliTmFtZSA9ICdjb21wb25lbnRzJ1xuY29uc3QgbGliRnVsbE5hbWUgPSBgcmVhY3QtZXZlZnlvdS0ke2xpYk5hbWV9YFxuXG5jb25zdCBleHRlcm5hbFBhY2thZ2VzID0gWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKV1cbmNvbnN0IHJlZ2V4T2ZQYWNrYWdlcyA9IGV4dGVybmFsUGFja2FnZXNcbiAgLm1hcChwYWNrYWdlTmFtZSA9PiBuZXcgUmVnRXhwKGBeJHtwYWNrYWdlTmFtZX0oXFxcXC8uKik/YCkpO1xuXG5jb25zdCBjb21wb25lbnRzID0gT2JqZWN0LmtleXMocGtnLmV4cG9ydHMpXG4gIC5maWx0ZXIoZSA9PiBlICE9PSAnLicgJiYgIWUuaW5jbHVkZXMoJ2xvY2FsZXMnKSAmJiAhZS5pbmNsdWRlcygnY3NzJykpXG4gIC5tYXAoZSA9PiBlLnNwbGl0KCcuLycpWzFdKVxuLy8gY29uc29sZS5sb2coJ2NvbXBvbmVudHMnLCBjb21wb25lbnRzKVxuY29uc3QgbG9jYWxlcyA9IE9iamVjdC5rZXlzKHBrZy5leHBvcnRzKVxuICAuZmlsdGVyKGUgPT4gZS5pbmNsdWRlcygnbG9jYWxlcycpKVxuICAubWFwKGUgPT4gZS5zcGxpdCgnLi8nKVsxXSlcblxuY29uc3QgZW50cmllcyA9IE9iamVjdC5rZXlzKHBrZy5leHBvcnRzKS5maWx0ZXIoZSA9PiAhZS5pbmNsdWRlcygnY3NzJykpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgY29uc3QgaXNJbmRleCA9IGN1ciA9PT0gJy4nXG4gIGN1ciA9IGN1ci5zcGxpdCgnLi8nKVsxXVxuICBjb25zdCBrZXkgPSBpc0luZGV4ID8gJ2luZGV4JyA6IGN1clxuICBjb25zdCB2YWwgPSBpc0luZGV4ID8gcGF0aFJlc29sdmUoYCR7bGliTmFtZX0vaW5kZXgudHNgKSA6IHBhdGhSZXNvbHZlKGAke2xpYk5hbWV9LyR7Y3VyfS9pbmRleC50c2ApXG4gIGFjY1trZXldID0gdmFsXG4gIHJldHVybiBhY2Ncbn0sIHt9KVxuXG5jb25zdCBmb3JtYXRzID0gWydlcycsICdjanMnXVxuY29uc29sZS5sb2coJ2VudHJpZXMnLCBlbnRyaWVzKVxuXG5mdW5jdGlvbiBtb3ZlRmlsZShvbGRQYXRoLCBuZXdQYXRoKSB7XG4gIGZzLnJlbmFtZShvbGRQYXRoLCBuZXdQYXRoLCAoZXJyKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignXHU3OUZCXHU1MkE4XHU2NTg3XHU0RUY2XHU1OTMxXHU4RDI1OicsIGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdcdTY1ODdcdTRFRjZcdTVERjJcdTYyMTBcdTUyOUZcdTc5RkJcdTUyQThcdTUyMzBcdTY1QjBcdTRGNERcdTdGNkUnKTtcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgV2luZGlDU1Moe1xuICAgICAgc2Nhbjoge1xuICAgICAgICBkaXJzOiBbYC4vJHtsaWJOYW1lfWBdLFxuICAgICAgICBmaWxlRXh0ZW5zaW9uczogWyd0c3gnLCAndHMnXVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgb3V0RGlyOiBmb3JtYXRzLFxuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICBhZnRlckJ1aWxkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQuLi4nLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZm9ybWF0cy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvbGRQYXRoID0gcGF0aFJlc29sdmUoYC4vJHtmfS8ke2NvbXB9LmQudHNgKVxuICAgICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aFJlc29sdmUoYC4vJHtmfS8ke2NvbXB9L2luZGV4LmQudHNgKVxuICAgICAgICAgICAgICBtb3ZlRmlsZShvbGRQYXRoLCBuZXdQYXRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxvY2FsZXMuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICAgICAgZnMucm0ocGF0aFJlc29sdmUoYCR7Zn0vJHtsfS5kLnRzYCksIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTUyMjBcdTk2NjRcdTY1ODdcdTRFRjZcdTU5MzFcdThEMjU6JywgZXJyKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3Qgb2wgPSBsLnNwbGl0KCdsb2NhbGVzLycpWzFdXG4gICAgICAgICAgICAgIGNvbnN0IG9sZFBhdGggPSBwYXRoUmVzb2x2ZShgLi8ke2Z9LyR7b2x9LmQudHNgKVxuICAgICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aFJlc29sdmUoYC4vJHtmfS8ke2x9L2luZGV4LmQudHNgKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQYXRoLCBuZXdQYXRoKVxuICAgICAgICAgICAgICBtb3ZlRmlsZShvbGRQYXRoLCBuZXdQYXRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGxpYkluamVjdENzcyh7XG4gICAgICBidWlsZDoge1xuICAgICAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgICAgIG91dERpcjogJy4nLFxuICAgICAgfSxcbiAgICAgIGVudHJ5OiBlbnRyaWVzLFxuICAgICAgbmFtZTogbGliRnVsbE5hbWUsXG4gICAgICBmb3JtYXRzOiBmb3JtYXRzIGFzIGFueSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgbWluaWZ5SW50ZXJuYWxFeHBvcnRzOiBmYWxzZSxcbiAgICAgICAgICAvLyBtYW51YWxDaHVua3M6IChpZCkgPT4gY29tcG9uZW50cy5maW5kKGUgPT4gaWQuaW5jbHVkZXMoZSkpPy5jb25jYXQoJy9pbmRleCcpLFxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW2Zvcm1hdF0vW25hbWVdLmpzJyxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS5bZXh0XScsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IChjaHVua0luZm8pID0+IGNodW5rSW5mby5uYW1lID09PSAnaW5kZXgnXG4gICAgICAgICAgICA/ICdbZm9ybWF0XS9bbmFtZV0uanMnIDogJ1tmb3JtYXRdL1tuYW1lXS9pbmRleC5qcydcbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZXJuYWw6IHJlZ2V4T2ZQYWNrYWdlc1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnXG4gICAgfSxcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1vZGlmeVZhcnM6IHtcbiAgICAgICAgICBoYWNrOiBgdHJ1ZTsgQGltcG9ydCAocmVmZXJlbmNlKSBcIiR7cGF0aFJlc29sdmUoYCR7bGliTmFtZX0vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5sZXNzYCl9XCI7YCxcbiAgICAgICAgICAncHJpbWFyeS1jb2xvcic6ICcjMDk2MGJkJyxcbiAgICAgICAgICAndGV4dC1jb2xvcic6ICcjYzlkMWQ5JyxcbiAgICAgICAgICAndGV4dC1jb2xvci1iYXNlJzogJyMwMDAwMDBkOScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgY3NzbmFub1BsdWdpbih7XG4gICAgICAgICAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gICAgICAgIH0pIGFzIGFueSxcbiAgICAgICAgcG9zdGNzc1ByZXNldEVudih7XG5cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwicmVhY3QtZXZlZnlvdS1jb21wb25lbnRzXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC40NlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcIm1haW5cIjogXCIuL2Nqcy9pbmRleC5qc1wiLFxuICBcIm1vZHVsZVwiOiBcIi4vZXMvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZXMvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi93aW5kaWNzc1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vY3NzL3dpbmRpLmNzc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9jc3Mvd2luZGkuY3NzXCJcbiAgICB9LFxuICAgIFwiLi9sb2NhbGVzL3poX0NOXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9sb2NhbGVzL3poX0NOL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9sb2NhbGVzL3poX0NOL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9lcy9sb2NhbGVzL3poX0NOL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xvY2FsZXMvZW5fVVNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xvY2FsZXMvZW5fVVMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xvY2FsZXMvZW5fVVMvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2VzL2xvY2FsZXMvZW5fVVMvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNCdXR0b25cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL0Jhc2ljQnV0dG9uL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9CYXNpY0J1dHRvbi9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNEcm9wZG93blwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvQmFzaWNEcm9wZG93bi9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvQmFzaWNEcm9wZG93bi9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNGb3JtXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY0Zvcm0vaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljRm9ybS9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNIZWxwXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY0hlbHAvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljSGVscC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNJY29uXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY0ljb24vaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljSWNvbi9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNNZW51XCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY01lbnUvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljTWVudS9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNNb2RhbFwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvQmFzaWNNb2RhbC9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvQmFzaWNNb2RhbC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNQb3BCdXR0b25cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL0Jhc2ljUG9wQnV0dG9uL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9CYXNpY1BvcEJ1dHRvbi9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNTY3JvbGxcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL0Jhc2ljU2Nyb2xsL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9CYXNpY1Njcm9sbC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNUYWJsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvQmFzaWNUYWJsZS9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvQmFzaWNUYWJsZS9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNUaXRsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvQmFzaWNUaXRsZS9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvQmFzaWNUaXRsZS9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNCcmVhZGNydW1iXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY0JyZWFkY3J1bWIvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljQnJlYWRjcnVtYi9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNGYWxsYmFja1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvQmFzaWNGYWxsYmFjay9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvQmFzaWNGYWxsYmFjay9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNOUHJvZ3Jlc3NcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL0Jhc2ljTlByb2dyZXNzL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9CYXNpY05Qcm9ncmVzcy9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNSZXN1bHRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL0Jhc2ljUmVzdWx0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9CYXNpY1Jlc3VsdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNUYWJzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY1RhYnMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljVGFicy9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vQmFzaWNMaXN0XCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9CYXNpY0xpc3QvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL0Jhc2ljTGlzdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vTWVzc2FnZUhlbHBlclwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvTWVzc2FnZUhlbHBlci9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvTWVzc2FnZUhlbHBlci9pbmRleC5qc1wiXG4gICAgfVxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcImVzXCIsXG4gICAgXCJjanNcIixcbiAgICBcImNzc1wiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZDp0c2NcIjogXCJ0c3VwXCIsXG4gICAgXCJjbGVhblwiOiBcInJpbXJhZiBub2RlX21vZHVsZXNcIixcbiAgICBcImNsZWFuOmNhY2hlXCI6IFwicmltcmFmIG5vZGVfbW9kdWxlcy8uY2FjaGUvICYmIHJpbXJhZiBub2RlX21vZHVsZXMvLnZpdGVcIixcbiAgICBcImNsZWFuOmJ1aWxkXCI6IFwicmltcmFmIGVzICYmIHJpbXJhZiBjanMgJiYgcmltcmFmIGNzcyAmJiByaW1yYWYgZGlzdCAmJiByaW1yYWYgbG9jYWxlXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0V2ZWZ5b3VGRS9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJyZWFjdFwiLFxuICAgIFwiY29tcG9uZW50c1wiLFxuICAgIFwiZXZlZnlvdVwiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiRXZlZnlvdUZFXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0V2ZWZ5b3VGRS9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FdmVmeW91RkUvcmVhY3QtZXZlZnlvdS1jb21wb25lbnRzI3JlYWRtZVwiLFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudC1kZXNpZ24vaWNvbnNcIjogXCI+PTUuMC4xXCIsXG4gICAgXCJAZG5kLWtpdC9jb3JlXCI6IFwiPj02LjAuOFwiLFxuICAgIFwiQGRuZC1raXQvbW9kaWZpZXJzXCI6IFwiPj02LjAuMVwiLFxuICAgIFwiQGRuZC1raXQvc29ydGFibGVcIjogXCI+PTcuMC4yXCIsXG4gICAgXCJAZG5kLWtpdC91dGlsaXRpZXNcIjogXCI+PTMuMi4xXCIsXG4gICAgXCJAaWNvbmlmeS9yZWFjdFwiOiBcIj49NC4xLjFcIixcbiAgICBcImFob29rc1wiOiBcIj49My43LjZcIixcbiAgICBcImFudGRcIjogXCI+PTUuNi4zXCIsXG4gICAgXCJjbGFzc25hbWVzXCI6IFwiPj0yLjMuMlwiLFxuICAgIFwibW9tZW50XCI6IFwiPj0yLjI5LjRcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIj49MC4yLjBcIixcbiAgICBcInJhbWRhXCI6IFwiPj0wLjI5LjBcIixcbiAgICBcInJlYWN0XCI6IFwiPj0xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIj49MTguMi4wXCIsXG4gICAgXCJyZWFjdC1kcmFnZ2FibGVcIjogXCI+PTQuNC41XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWNvbW1vblwiOiBcIj49MS4wLjE3XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWhvb2tzXCI6IFwiPj0xLjAuMjhcIixcbiAgICBcInJlYWN0LWV2ZWZ5b3Utcm91dGVyXCI6IFwiPj0xLjAuMTVcIixcbiAgICBcInJlYWN0LWludGxcIjogXCI+PTYuNC40XCIsXG4gICAgXCJyZWFjdC1yb3V0ZXJcIjogXCI+PTYuMTAuMFwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIj49Ni4xMC4wXCIsXG4gICAgXCJ1dWlkXCI6IFwiPj05LjAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnQtZGVzaWduL2NvbG9yc1wiOiBcIl43LjAuMFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuNS4xXCIsXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4wXCIsXG4gICAgXCJAdHlwZXMvcmFtZGFcIjogXCJeMC4yOS4wXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4xNVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjdcIixcbiAgICBcIkB0eXBlcy91dWlkXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4wLjNcIixcbiAgICBcImNzc25hbm9cIjogXCJeNi4wLjFcIixcbiAgICBcImVzYnVpbGQtcGx1Z2luLWxlc3NcIjogXCJeMS4yLjRcIixcbiAgICBcImVzbGludFwiOiBcIl44LjQ1LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuM1wiLFxuICAgIFwibGVzc1wiOiBcIl40LjEuM1wiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMjNcIixcbiAgICBcInBvc3Rjc3MtY2xpXCI6IFwiXjEwLjEuMFwiLFxuICAgIFwicG9zdGNzcy1odG1sXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJwb3N0Y3NzLWxlc3NcIjogXCJeNi4wLjBcIixcbiAgICBcInBvc3Rjc3MtcHJlc2V0LWVudlwiOiBcIl44LjMuMlwiLFxuICAgIFwicmltcmFmXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJ0c2xpYlwiOiBcIl4yLjYuMVwiLFxuICAgIFwidHN1cFwiOiBcIl43LjIuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjEuNlwiLFxuICAgIFwidml0ZVwiOiBcIl40LjQuNVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNS4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiOiBcIl4xLjIuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4td2luZGljc3NcIjogXCJeMS45LjBcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjBcIixcbiAgICBcIndpbmRpY3NzXCI6IFwiXjMuNS42XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVFBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1COzs7QUNaMUI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFFBQVU7QUFBQSxFQUNWLE9BQVM7QUFBQSxFQUNULFNBQVc7QUFBQSxJQUNULEtBQUs7QUFBQSxNQUNILFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJ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
