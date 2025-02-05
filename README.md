# APK Info Extractor

A Python tool to extract and display information from Android APK files using the androguard library.

## Quick Start

1. Clone the repository:

```bash
git clone <your-repo-url>
cd extract-apk
```

2. Create and activate virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
.\venv\Scripts\activate  # On Windows
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. You're ready to use the tool:

```bash
python3 apk-info.py path/to/your/app.apk
```

## Features

- Extract package name
- Get version information (name and code)
- Display SDK version requirements
- List all permissions
- Show application name

## Requirements

- Python 3.9 or higher
- androguard 3.3.5

## Setup Instructions

1. Ensure Python 3.9+ is installed:

```bash
python3 --version
```

2. Create and activate a Python virtual environment:

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
# or
.\venv\Scripts\activate  # On Windows
```

3. Install required package:

```bash
pip install -r requirements.txt
```

## Usage

1. Activate the virtual environment (if not already activated):

```bash
source venv/bin/activate  # On macOS/Linux
# or
.\venv\Scripts\activate  # On Windows
```

2. Run the script:

```bash
python3 apk-info.py path/to/your/app.apk
```

Example:

```bash
python3 apk-info.py app-release.apk
```

## Output

The script will display information in the following format:

```
APK Information:
--------------------------------------------------
Package Name: com.example.app
Version Name: 1.0.0
Version Code: 1
Min SDK Version: 21
Target SDK Version: 30
App Name: MyApp
Permissions:
- android.permission.INTERNET
- android.permission.READ_EXTERNAL_STORAGE
- ...
```

## Troubleshooting

1. If you see "No module named 'androguard'" error:

   - Make sure you've activated the virtual environment
   - Try reinstalling androguard: `pip install androguard==3.3.5`

2. If you get API level warnings:

   - These are informational messages and don't affect functionality
   - The tool will use the closest available API level

3. If the script hangs:
   - The script includes a 30-second timeout
   - For large APKs, you might need to increase the timeout in the code

## Script Explanation

The script uses androguard's APK class to parse and extract information from APK files. It includes:

- Error handling for invalid APK files
- Timeout protection (30 seconds)
- Detailed progress logging
- Structured output format

## License

This project is open-source and available under the MIT License.
