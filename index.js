const core = require("@actions/core");
const pomParser = require("pom-parser");

try {
  let opts = {
    filePath: __dirname + "/pom.xml", // The path to a pom file
  };
  pomParser.parse(opts, function(err, pomResponse) {
    if (err) {
      console.log("ERROR: " + err);
      process.exit(1);
    }
    console.log(pomResponse.pomObject.project.version)
  });

} catch (error) {
  console.error(error);

  core.setFailed(error.message);
}
