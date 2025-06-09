const select = document.getElementById("badgeMode");

chrome.storage.sync.get("badgeMode", ({ badgeMode }) => {
  select.value = badgeMode || "last";
});

select.addEventListener("change", () => {
  chrome.storage.sync.set({ badgeMode: select.value });
});
