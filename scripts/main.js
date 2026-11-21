const STUDENT_PROFILE = {
  name: "Демченко Станіслав",
  group: "ІН 42/1",
  emoji: "⚡"
};

function generatePageId() {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const randomSuffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `LAB1-${timestamp}-${randomSuffix}`;
}

function getCssVariableValue(variableName) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

function renderBadge(elementId, pageId, ownerName) {
  const badgeElement = document.getElementById(elementId);
  if (!badgeElement) return false;
  badgeElement.textContent = `PageID: ${pageId}`;
  badgeElement.setAttribute("data-owner", ownerName);
  return true;
}

function renderAccentPreview(selector, colorValue) {
  const previewElement = document.querySelector(selector);
  if (!previewElement) return false;
  previewElement.textContent = colorValue || "—";
  return true;
}

function renderCurrentYear(elementId) {
  const yearElement = document.getElementById(elementId);
  if (!yearElement) return false;
  yearElement.textContent = String(new Date().getFullYear());
  return true;
}

function persistPageId(storageKey, pageId) {
  try {
    localStorage.setItem(storageKey, pageId);
    return true;
  } catch {
    return false;
  }
}

function logConsoleGreeting(profile, pageId) {
  console.log(
    `${profile.emoji} Вітаю! Це моя ЛР1. Студент(ка): ${profile.name}, група: ${profile.group}. Унікальний ID: ${pageId}`
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const pageId = generatePageId();
  const accentColor = getCssVariableValue("--accent");

  renderBadge("pageIdBadge", pageId, STUDENT_PROFILE.name);
  renderAccentPreview(".accent-preview", accentColor);
  renderCurrentYear("currentYear");
  persistPageId("lab1.pageId", pageId);
  logConsoleGreeting(STUDENT_PROFILE, pageId);
});