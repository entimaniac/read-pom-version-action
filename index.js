const core = require("@actions/core");
const pomParser = require("pom-parser");

try {
  let opts = {
    filePath: process.env.GITHUB_WORKSPACE + "/pom.xml",
  };
  pomParser.parse(opts, function (error, pomResponse) {
    console.log("parsing pom.xml from project root");

    if (error) {
      console.log("an error occurred");
      core.setFailed(error.message);
      process.exit(1);
    }

    console.log("Successfully parsed pom.xml ");
    core.setOutput("version", pomResponse.pomObject.project.version);
    console.log("project version is: ", pomResponse.pomObject.project.version);
  });
} catch (error) {
  core.setFailed(error.message);
}
