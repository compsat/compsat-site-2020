const withImages = require('next-images')

module.exports = withImages({
  webpack(cfg, options) {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      },
      {
        test: /\.(jpg|png|jpe?g)$/,
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(jpg|png|jpe?g)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    //  {
    //    test: /\.svg$/,
    //    issuer: {
    //      test: /\.(js|ts)x?$/,
    //    },
    //    use: ["@svgr/webpack"],
    //  }
    );
    return cfg;
  },
});
