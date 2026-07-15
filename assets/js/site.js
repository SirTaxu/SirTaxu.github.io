(function () {
  "use strict";

  const storageKey = "sirtaxu-language";
  const supported = new Set(["es", "en"]);

  function storedLanguage() {
    try {
      const value = localStorage.getItem(storageKey);
      return supported.has(value) ? value : null;
    } catch (_) {
      return null;
    }
  }

  function initialLanguage() {
    return storedLanguage() || (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
  }

  function localizedValue(element, prefix, language) {
    return element.getAttribute(`${prefix}-${language}`);
  }

  function applyLanguage(language, persist) {
    const next = supported.has(language) ? language : "es";
    document.documentElement.lang = next;

    document.querySelectorAll("[data-es][data-en]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${next}`);
    });

    document.querySelectorAll("[data-aria-es][data-aria-en]").forEach((element) => {
      element.setAttribute("aria-label", localizedValue(element, "data-aria", next));
    });

    document.querySelectorAll("[data-title-es][data-title-en]").forEach((element) => {
      if (element === document.body) return;
      element.setAttribute("title", localizedValue(element, "data-title", next));
    });

    document.querySelectorAll("[data-placeholder-es][data-placeholder-en]").forEach((element) => {
      element.setAttribute("placeholder", localizedValue(element, "data-placeholder", next));
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === next));
    });

    if (document.body?.dataset.titleEs) document.title = document.body.dataset[`title${next === "es" ? "Es" : "En"}`];
    const description = document.querySelector('meta[name="description"]');
    const bodyDescription = document.body?.dataset[`description${next === "es" ? "Es" : "En"}`];
    if (description && bodyDescription) description.setAttribute("content", bodyDescription);

    if (persist) {
      try { localStorage.setItem(storageKey, next); } catch (_) { /* Storage can be disabled. */ }
    }

    document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language: next } }));
    return next;
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  window.SiteLanguage = {
    get: () => document.documentElement.lang,
    set: (language) => applyLanguage(language, true)
  };

  applyLanguage(initialLanguage(), false);
})();
