const { execSync } = require('child_process');
const fs = require('fs');

console.log("==========================================");
console.log("   HOSPITAL APP DEPLOYMENT HELPER");
console.log("==========================================");
console.log("\n[1/3] Verifying Tools...");
if (!fs.existsSync('node_modules/.bin/firebase')) {
    console.error("❌ Firebase tools not found. Please run: npm install");
    process.exit(1);
}
console.log("✅ Tools found.");

console.log("\n[2/3] Login Required");
console.log("We need you to log in to your Google Account.");
console.log("A browser window will open shortly.");
console.log("If it asks for permission, click 'Allow'.\n");

try {
    // Attempt login
    execSync('npx firebase login', { stdio: 'inherit' });

    console.log("\n✅ Login Successful!");
    console.log("\n[3/3] Deploying to Hosting...");

    execSync('npx firebase deploy --only hosting', { stdio: 'inherit' });

    console.log("\n==========================================");
    console.log("   🚀 DEPLOYMENT COMPLETE!");
    console.log("   Visit: https://hospital-management-syst-d3f62.web.app");
    console.log("==========================================");

} catch (error) {
    console.error("\n❌ Deployment stopped by user or error.");
    console.error("Tip: If login failed, try running: npx firebase login");
}
