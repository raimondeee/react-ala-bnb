const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

module.exports = function babelConfig (api) {
  api.cache(false);

  const presets = [
    '@babel/preset-react',
    ['@babel/preset-env', {
        exclude: [
          'transform-async-to-generator',
          'transform-template-literals',
          'transform-regenerator'
        ],
        targets: isTest ? { node: 'current' } : {
          chrome: 35,
          edge: 14,
          explorer: 9,
          firefox: 52,
          safari: 8,
        }
      }
    ]
  ];

  const plugins = [
    ['@babel/plugin-transform-template-literals', {
      loose: true
    }],
    '@babel/plugin-transform-property-mutators',
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-jscript',
    ['@babel/plugin-proposal-object-rest-spread', {
      useBuiltIns: true
    }],
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
    isProd && 'babel-plugin-transform-react-remove-prop-types',
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
