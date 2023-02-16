// Load this configuration that provide all the base for working with conventional commits
const config = require('semantic-release-preconfigured-conventional-commits')

// Only release on branch main
const releaseBranches = ["main"]

config.branches = releaseBranches

config.plugins.push(
    "@semantic-release/github",
    ["@semantic-release/git", {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release)!: [skip ci] ${nextRelease.version} released"
    }]
)

// JS Semantic Release configuration must export the JS configuration object
module.exports = config
