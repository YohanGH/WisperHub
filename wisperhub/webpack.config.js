import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

export default {
  mode: mode,
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
      // Règle pour les fichiers CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
};
