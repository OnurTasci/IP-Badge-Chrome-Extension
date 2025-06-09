async function fetchIPInfo() {
  const ipRes = await fetch("https://api.ipify.org?format=json");
  const { ip } = await ipRes.json();

  const infoRes = await fetch(`https://ipapi.co/${ip}/json/`);
  const info = await infoRes.json();
  return { ip, info };
}

function setBadge(ip, mode = 'last') {
  const parts = ip.split(".");
  const text = mode === 'first' ? parts[0] : parts[3];
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color: "#000000" });
}

async function updateIconAndBadge() {
  const { ip, info } = await fetchIPInfo();

  const mode = (await chrome.storage.sync.get("badgeMode")).badgeMode || "last";
  setBadge(ip, mode);

  if (info && info.country_code) {
    const flagUrl = `https://flagcdn.com/w40/${info.country_code.toLowerCase()}.png`;
    const res = await fetch(flagUrl);
    const blob = await res.blob();
    const bitmap = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(19, 19);
    const ctx = canvas.getContext('2d');

    // Köşeleri hafif yuvarlatılmış dikdörtgen (2px radius)
    drawRoundedImage(ctx, bitmap, 0, 0, 19, 19, 2);

    const imageData = ctx.getImageData(0, 0, 19, 19);
    chrome.action.setIcon({ imageData });
  }

  chrome.storage.local.set({ ipDetails: { ip, ...info } });
}

// Helper function: hafif yuvarlatılmış köşeler
function drawRoundedImage(ctx, image, x, y, width, height, radius = 2) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(image, x, y, width, height);
}

chrome.runtime.onInstalled.addListener(updateIconAndBadge);
chrome.runtime.onStartup.addListener(updateIconAndBadge);
