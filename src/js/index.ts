(function () {
  "use strict";

  const STORAGE_KEY = "ShaneYu-article-sort";
  const articleList = document.querySelector(".article-list") as HTMLElement | null;
  const filterTabs = document.querySelectorAll(".filter-tab");

  if (!articleList || filterTabs.length === 0) return;

  const listEl = articleList;

  type SortMode = "latest" | "hot" | "recommend";

  function sortArticles(mode: SortMode): void {
    const cards = Array.from(listEl.querySelectorAll(".article-card")) as HTMLElement[];

    const sorted = cards.sort((a, b) => {
      switch (mode) {
        case "latest": {
          const ta = a.dataset.time || "0";
          const tb = b.dataset.time || "0";
          return tb.localeCompare(ta);
        }
        case "hot": {
          const va = parseInt(a.dataset.visit || "0", 10);
          const vb = parseInt(b.dataset.visit || "0", 10);
          return vb - va;
        }
        case "recommend": {
          const ua = parseInt(a.dataset.upvote || "0", 10);
          const ub = parseInt(b.dataset.upvote || "0", 10);
          return ub - ua;
        }
        default:
          return 0;
      }
    });

    sorted.forEach((card) => listEl.appendChild(card));

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {}
  }

  function setActiveTab(mode: SortMode): void {
    filterTabs.forEach((tab) => {
      const tabMode = (tab as HTMLElement).dataset.sort;
      tab.classList.toggle("active", tabMode === mode);
    });
  }

  const saved = localStorage.getItem(STORAGE_KEY) as SortMode | null;
  if (saved && saved !== "latest") {
    setActiveTab(saved);
    sortArticles(saved);
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const mode = (tab as HTMLElement).dataset.sort as SortMode;
      setActiveTab(mode);
      sortArticles(mode);
    });
  });
})();
