chrome.storage.local.get("ipDetails", ({ ipDetails }) => {
  if (!ipDetails) return;
  const html = `
    <p><strong>IP:</strong> ${ipDetails.ip}</p>
    <p><strong>Country:</strong> ${ipDetails.country_name} (${ipDetails.country_code})</p>
    <p><strong>City:</strong> ${ipDetails.city}</p>
    <p><strong>ISP:</strong> ${ipDetails.org}</p>
  `;
  document.getElementById("info").innerHTML = html;
});
