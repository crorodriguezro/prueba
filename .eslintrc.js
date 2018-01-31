/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// ESLint configuration
module.exports = {
  extends: [
    'standard',
    'plugin:testcafe/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  'env': {
    'jest': true,
    'browser': 1
  },
  'plugins': [
    'testcafe'
  ]
}
