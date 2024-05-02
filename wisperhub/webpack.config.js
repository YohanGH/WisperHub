import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Loader pour JavaScript et JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.module\.css$/, // Regex pour les fichiers CSS modules
        use: [
          "style-loader", // Injecte le CSS dans le DOM via une balise <style>
          {
            loader: "css-loader", // Interprète `@import` et `url()` comme des `import/require()` et résout les chemins
            options: {
              modules: true, // Active le mode CSS modules
            },
          },
          "postcss-loader", // Utilisez ce loader si vous avez installé PostCSS
        ],
      },
      {
        test: /\.css$/, // Regex pour les fichiers CSS normaux (non-modules)
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"], // Permet d'importer des fichiers sans spécifier leur extension
  },
};
