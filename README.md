# IP Badge Chrome Extension

## Description
This Chrome extension displays your IP address on the browser toolbar. The extension shows either the first or last part of your IP address as a badge and uses your country’s flag as the icon with softly rounded corners.

- Choose whether to display the first or last segment of your IP on the badge.
- The icon dynamically shows your country flag with slight border-radius.
- Click the icon to view detailed IP information.

---

## Features
- Shows IP address segment on the badge.
- Badge text can be toggled between first or last segment of IP.
- Country flag icon with softly rounded corners.
- IP and country info are stored locally.
- Automatically updates IP information on startup.

---

## Installation
1. Clone this repository or download the ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top-right corner).
4. Click "Load unpacked" and select the project folder.
5. The extension icon will appear on the toolbar.

---

## Usage
- Change the badge mode (first or last IP segment) via extension settings.
- Click the icon to view detailed IP and location information.

---

## Technologies
- JavaScript (ES6+)
- Chrome Extensions API
- Canvas API for dynamic icon creation
- IP APIs:
  - [ipify.org](https://ipify.org) for fetching IP address
  - [ipapi.co](https://ipapi.co) for IP details and country code

---

## Development
To contribute or customize the extension:

```bash
git clone https://github.com/yourusername/ip-badge-chrome-extension.git
cd ip-badge-chrome-extension
