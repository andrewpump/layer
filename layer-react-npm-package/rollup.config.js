import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import json from '@rollup/plugin-json';
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

dotenv.config();
const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: 'auto'
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: 'auto'
      },
    ],
    plugins: [
      replace({
        "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
        "process.env.SDK_KEY": JSON.stringify(process.env.SDK_KEY),
      }),
      copy({
        targets: [
          { src: 'src/assets/images', dest: 'dist/esm/assets' },
        ]
      }),
      json(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declarationDir: "dist/types",
        declaration: true,
        rootDir: "src",
        exclude: ["**/*.test.ts"],
      }),
      postcss(),
    ],
    external: ['react', 'react-dom', 'axios'],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];