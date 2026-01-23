const { execSync } = require("child_process");

try {
  execSync("npx --no-install lint-staged", { stdio: "inherit" });
} catch (error) {
  process.exit(1);
}
