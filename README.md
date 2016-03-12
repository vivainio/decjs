# decjs

Expose node modules to browser

Problem:

- You want to use some modules from node ecosystem in browser
- You don't want to use browserify to build your own application (e.g. you want to do dumb concatenation,
or whatever)

Solution:

- You have a separate build step to generate cjs_generated.js, and add that to a script tag
- You access the node modules through global _cjs object, e.g.:

```javascript

var _ = window._cjs['lodash'];
_.each([1,2], v => console.log(v);

```

Usage:

- Check this project out from github
- npm install -g browserify
- Modify package.json to have your dependencies and run "npm i"
- Run "node generate.py"
- Include "out/cjs_generated.js" to your app

Note that this is a lame experiment I whipped together quickly. I don't even use it myself for anything.

# license

MIT
