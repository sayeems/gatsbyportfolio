// exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
//   if (stage === "build-javascript") {
//     const baseConfig = getConfig()
//     const config = {
//       ...baseConfig,
//       ...{
//         output: {
//           // we need `path`, `filename` and `chunkFilename ` from original config
//           // see https://github.com/gatsbyjs/gatsby/blob/f06f6c37698ccdd91b0f550fa30ab55f1d47cae9/packages/gatsby/src/utils/webpack.config.js#L129-L136
//           ...baseConfig.output,
//           publicPath: "/wp-content/uploads/",
//         },
//       },
//     }
//     actions.replaceWebpackConfig(config)
//   }
// }
