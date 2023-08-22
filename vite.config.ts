/*
 * @Author: EvefyouFE
 * @Date: 2023-08-10 13:42:48
 * @FilePath: \react-evefyou-components\vite.config.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';
import cssnanoPlugin from "cssnano";
import postcssPresetEnv from 'postcss-preset-env';
import WindiCSS from 'vite-plugin-windicss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
// import { identity, join, pipe, split, useWith } from "ramda";

const pathResolve = (v: string) => path.resolve(__dirname, v)

const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const entries = {
  'index': pathResolve('components/index.ts'),
  'zh_CN': pathResolve('components/locale/zh-cn'),
  'en_US': pathResolve('components/locale/en-us'),
  'BasicButton': pathResolve('components/BasicButton'),
  'BasicPopButton': pathResolve('components/BasicPopButton'),
  'BasicDropdown': pathResolve('components/BasicDropdown'),
  'BasicForm': pathResolve('components/BasicForm'),
  'BasicHelp': pathResolve('components/BasicHelp'),
  'BasicIcon': pathResolve('components/BasicIcon'),
  'BasicMenu': pathResolve('components/BasicMenu'),
  'BasicModal': pathResolve('components/BasicModal'),
  'BasicScroll': pathResolve('components/BasicScroll'),
  'BasicTable': pathResolve('components/BasicTable'),
  'BasicTitle': pathResolve('components/BasicTitle'),
  'BasicBreadcrumb': pathResolve('components/BasicBreadcrumb'),
  'BasicFallback': pathResolve('components/BasicFallback'),
  'BasicNProgress': pathResolve('components/BasicNProgress'),
  'BasicResult': pathResolve('components/BasicResult'),
}
const otherEntryFile = Object.keys(entries).filter(e => e !== 'index')

export default defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: ['./components'],
        fileExtensions: ['tsx', 'ts']
      }
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      // rollupTypes: true,
      outDir: ['types'],
      beforeWriteFile: (filePath, content) => {
        //   console.log('beforeWriteFile', filePath)
        const entryDFile = otherEntryFile
          .map(e => e.concat('.d.ts'))
          .find(e => filePath.includes(e))
        //   entryDFile && console.log('beforeWriteFile entryDFile', entryDFile)
        // const newPath = pipe(
        //   split('/'),
        //   // eslint-disable-next-line react-hooks/rules-of-hooks
        //   useWith(
        //     (arr: string[]) => arr.map((e, idx) => idx === arr.length - 1 ? e.split('.d.ts')[0].concat('/index.d.ts') : e),
        //     [identity]
        //   ),
        //   join('/'),
        // )(filePath)
        // console.log('newPath', newPath)
        // return { filePath:entryDFile?newPath:filePath, content }
        // return {filePath,content: entryDFile? `import * ''`:''}
        return entryDFile ? false : { filePath, content }
        //   return { filePath, content }
      },
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: '.',
      },
      entry: entries,
      fileName: (format, entryName) => {
        return entryName === 'index'
          ? `${format}/index.js`
          : entryName.includes('_')
            ? `${format}/locale/${entryName}.js`
            : `${format}/[name]/index.js`
      },
      name: 'react-evefyou-components',
      formats: ["es", "cjs"],
      rollupOptions: {
        output: {
          chunkFileNames: (chunkInfo) => {
            // console.log('chunkInfo', chunkInfo)
            return otherEntryFile.reduce(
              (acc, cur) => !chunkInfo.isEntry && chunkInfo.moduleIds.findIndex(s => s.includes(cur)) !== -1
                ? `[format]/${cur}/other.js` : acc,
              '[format]/_common/[name].js'
            )
          },
          assetFileNames: '[ext]/[name].[ext]',
        },
        external: [...regexOfPackages, './components/_common/utils/generate.ts']
      }
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('components/_common/styles/variables/index.less')}";`,
          'primary-color': '#0960bd',
          'text-color': '#c9d1d9',
          'text-color-base': '#000000d9',
        }
      }
    },
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: 'default',
        }) as any,
        postcssPresetEnv({

        })
      ]
    }
  },
})
