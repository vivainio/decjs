var exec = require('child_process').execSync
var fs = require('fs')

var package = fs.readFileSync("package.json")
var parsed = JSON.parse(package)

var deps = parsed.dependencies

var res = ['window._cjs = {'];


for (var d in deps) {
    console.log(d)
    res.push("  'PKG': require('PKG'), ".replace(/PKG/g, d));
}

res.push('}')

console.log(res)

fs.writeFileSync("cjs_gen_root.js", res.join("\n"));


//console.log(json)
//exec('browserify -o decjs_gen.js index.js')


