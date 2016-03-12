var exec = require('child_process').execSync
var fs = require('fs')
var process = require('process')

var package = fs.readFileSync("package.json")
var parsed = JSON.parse(package)

process.chdir('out');
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
exec('browserify -o cjs_generated.js cjs_gen_root.js')


