import sys
from androguard.misc import AnalyzeAPK

def extract_apk_info(apk_path):
    """
    Extract information from an APK file
    
    Args:
        apk_path (str): Path to the APK file
        
    Returns:
        dict: Dictionary containing APK information
    """
    try:
        print(f"Analyzing APK: {apk_path}")
        # Parse APK using androguard
        a, d, dx = AnalyzeAPK(apk_path)
        print("Successfully parsed APK")
        
        # Extract basic information
        info = {}
        
        print("Extracting package name...")
        info['package_name'] = a.get_package()
        
        print("Extracting version info...")
        info['version_name'] = a.get_androidversion_name()
        info['version_code'] = a.get_androidversion_code()
        
        print("Extracting SDK versions...")
        info['min_sdk_version'] = a.get_min_sdk_version()
        info['target_sdk_version'] = a.get_target_sdk_version()
        
        print("Extracting app name...")
        info['app_name'] = a.get_app_name()
        
        print("Extracting permissions...")
        info['permissions'] = a.get_permissions()
        
        # Print information
        print("\nAPK Information:")
        print("-" * 50)
        print(f"Package Name: {info['package_name']}")
        print(f"Version Name: {info['version_name']}")
        print(f"Version Code: {info['version_code']}")
        print(f"Min SDK Version: {info['min_sdk_version']}")
        print(f"Target SDK Version: {info['target_sdk_version']}")
        print(f"App Name: {info['app_name']}")
        print("\nPermissions:")
        for permission in sorted(info['permissions']):
            print(f"- {permission}")
            
        return info
        
    except Exception as e:
        print(f"Error analyzing APK: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == '__main__':
    if len(sys.argv) > 1:
        apk_path = sys.argv[1]
        extract_apk_info(apk_path)
    else:
        print("Please provide path to APK file")