# APK Info Extractor

A tool to extract and display information from Android APK files, available in both Python and Node.js implementations.

## Features

- Extract package name
- Get version information (name and code)
- Display SDK version requirements
- List all permissions
- Show application name

## Python Implementation

### Requirements

- Python 3.9 or higher
- androguard 3.3.5

### Setup Instructions

1. Create and activate virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
.\venv\Scripts\activate  # On Windows
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

### Usage

```bash
python3 apk-info.py path/to/your/app.apk
```

## Node.js Implementation

### Requirements

- Node.js 14 or higher
- adbkit-apkreader

### Setup Instructions

1. Install dependencies:

```bash
npm install
```

### Usage

```bash
node apk-info.js path/to/your/app.apk
```

## Output Format

Both implementations provide identical output in the following format:

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

### Python Implementation

1. If you see "No module named 'androguard'" error:

   - Make sure you've activated the virtual environment
   - Try reinstalling androguard: `pip install androguard==3.3.5`

2. If you get API level warnings:
   - These are informational messages and don't affect functionality
   - The tool will use the closest available API level

### Node.js Implementation

1. If you see module not found errors:

   - Make sure you've run `npm install`
   - Try removing node_modules and package-lock.json and run `npm install` again

2. If you get file access errors:
   - Ensure the APK file path is correct and accessible
   - Check if you have read permissions for the APK file

## Implementation Details

### Python Version

The Python implementation uses androguard's APK class to parse and extract information from APK files. It includes:

- Error handling for invalid APK files
- Detailed progress logging
- Structured output format

### Node.js Version

The Node.js implementation uses adbkit-apkreader to parse and extract information from APK files. It includes:

- Async/await based implementation
- Error handling for invalid APK files
- Detailed progress logging
- Structured output format matching the Python version

## License

This project is open-source and available under the MIT License.
