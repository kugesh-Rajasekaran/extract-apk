#!/usr/bin/env node

const fs = require('fs').promises;
const ApkReader = require('adbkit-apkreader');

/**
 * Extract information from an APK file
 * 
 * @param {string} apkPath - Path to the APK file
 * @returns {Promise<object|null>} Dictionary containing APK information
 */
async function extractApkInfo(apkPath) {
    try {
        console.log(`Analyzing APK: ${apkPath}`);
        
        // Parse APK using adbkit-apkreader
        const reader = await ApkReader.open(apkPath);
        const manifest = await reader.readManifest();
        console.log("Successfully parsed APK");
        
        // Extract basic information
        const info = {};
        
        console.log("Extracting package name...");
        info.package_name = manifest.package;
        
        console.log("Extracting version info...");
        info.version_name = manifest.versionName;
        info.version_code = manifest.versionCode?.toString();
        
        console.log("Extracting SDK versions...");
        info.min_sdk_version = manifest.usesSdk?.minSdkVersion?.toString();
        info.target_sdk_version = manifest.usesSdk?.targetSdkVersion?.toString();
        
        console.log("Extracting app name...");
        // Get the first application label as app name
        info.app_name = manifest.application.label;
        
        console.log("Extracting permissions...");
        info.permissions = manifest.usesPermissions?.map(p => p.name) || [];
        
        // Print information
        console.log("\nAPK Information:");
        console.log("-".repeat(50));
        console.log(`Package Name: ${info.package_name}`);
        console.log(`Version Name: ${info.version_name}`);
        console.log(`Version Code: ${info.version_code}`);
        console.log(`Min SDK Version: ${info.min_sdk_version}`);
        console.log(`Target SDK Version: ${info.target_sdk_version}`);
        console.log(`App Name: ${info.app_name}`);
        console.log("\nPermissions:");
        info.permissions.sort().forEach(permission => {
            console.log(`- ${permission}`);
        });
        
        return info;
        
    } catch (error) {
        console.error(`Error analyzing APK: ${error.message}`);
        console.error(error.stack);
        return null;
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length > 0) {
        const apkPath = args[0];
        extractApkInfo(apkPath).catch(error => {
            console.error("Failed to extract APK info:", error);
            process.exit(1);
        });
    } else {
        console.log("Please provide path to APK file");
        process.exit(1);
    }
}

module.exports = extractApkInfo;
