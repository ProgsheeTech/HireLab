// next.config.mjs
export default {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          and: [/\.(js|ts)x?$/],
        },
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  