// 搜索页面逻辑
(function () {
  const PAGE_SIZE = 10;
  let currentPage = 0;
  let currentKeyword = "";
  let totalPages = 0;

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  const searchResults = document.getElementById("searchResults");
  const searchLoading = document.getElementById("searchLoading");
  const searchEmpty = document.getElementById("searchEmpty");
  const searchInitial = document.getElementById("searchInitial");
  const searchMeta = document.getElementById("searchMeta");
  const searchKeyword = document.getElementById("searchKeyword");
  const searchCount = document.getElementById("searchCount");
  const searchPagination = document.getElementById("searchPagination");
  const prevPage = document.getElementById("prevPage") as HTMLButtonElement;
  const nextPage = document.getElementById("nextPage") as HTMLButtonElement;
  const paginationInfo = document.getElementById("paginationInfo");

  if (!searchForm || !searchInput || !searchResults) return;

  const resultsEl = searchResults!;

  // 从 URL 读取关键词
  const urlParams = new URLSearchParams(window.location.search);
  const urlKeyword = urlParams.get("keyword") || "";
  if (urlKeyword) {
    searchInput.value = urlKeyword;
    doSearch(urlKeyword, 0);
  }

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const keyword = searchInput.value.trim();
    if (keyword) {
      const url = new URL(window.location.href);
      url.searchParams.set("keyword", keyword);
      window.history.pushState({}, "", url.toString());
      doSearch(keyword, 0);
    }
  });

  prevPage?.addEventListener("click", function () {
    if (currentPage > 0) doSearch(currentKeyword, currentPage - 1);
  });

  nextPage?.addEventListener("click", function () {
    if (currentPage < totalPages - 1) doSearch(currentKeyword, currentPage + 1);
  });

  function doSearch(keyword: string, page: number) {
    currentKeyword = keyword;
    currentPage = page;
    if (searchInitial) searchInitial.style.display = "none";
    if (searchEmpty) searchEmpty.style.display = "none";
    resultsEl.innerHTML = "";
    if (searchPagination) searchPagination.style.display = "none";
    if (searchMeta) searchMeta.style.display = "none";
    if (searchLoading) searchLoading.style.display = "flex";

    const apiUrl =
      "/apis/api.content.halo.run/v1alpha1/posts?keyword=" +
      encodeURIComponent(keyword) +
      "&page=" +
      page +
      "&size=" +
      PAGE_SIZE +
      "&sort=spec.publishTime,desc";

    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (searchLoading) searchLoading.style.display = "none";
        const items = data.items || [];
        const total = data.total || 0;
        totalPages = Math.ceil(total / PAGE_SIZE);

        if (items.length === 0) {
          if (searchEmpty) searchEmpty.style.display = "flex";
          if (searchMeta) searchMeta.style.display = "block";
          if (searchKeyword) searchKeyword.textContent = keyword;
          if (searchCount) searchCount.textContent = "0";
          return;
        }

        if (searchMeta) searchMeta.style.display = "block";
        if (searchKeyword) searchKeyword.textContent = keyword;
        if (searchCount) searchCount.textContent = String(total);

        items.forEach(function (post: Record<string, unknown>) {
          const spec = (post.spec || {}) as Record<string, unknown>;
          const status = (post.status || {}) as Record<string, unknown>;
          const categories = (post.categories || []) as Array<{
            spec?: { displayName?: string };
            name?: string;
          }>;
          const cover = (spec.cover as string) || "";
          const title = (spec.title as string) || "";
          const slug = (spec.slug as string) || "";
          const publishTime = (spec.publishTime as string) || "";
          const excerpt = (status.excerpt as string) || (spec.excerpt as string) || "";

          let dateStr = "";
          if (publishTime) {
            const d = new Date(publishTime);
            dateStr =
              d.getFullYear() +
              "-" +
              String(d.getMonth() + 1).padStart(2, "0") +
              "-" +
              String(d.getDate()).padStart(2, "0");
          }

          const article = document.createElement("a");
          article.className = "search-result-item";
          article.href = "/archives/" + slug;

          const defaultCover = "/themes/theme-ShaneYu/assets/images/default_post.png";
          const thumbSrc = cover || defaultCover;
          const thumbHtml =
            '<div class="result-thumb"><img src="' +
            thumbSrc +
            '" alt="' +
            title +
            '" loading="lazy" /></div>';

          let categoriesHtml = "";
          categories.forEach(function (cat) {
            categoriesHtml +=
              '<span class="result-category">' +
              (cat.spec?.displayName || cat.name || "") +
              "</span>";
          });

          article.innerHTML =
            thumbHtml +
            '<div class="result-body">' +
            '<h3 class="result-title">' +
            title +
            "</h3>" +
            (excerpt ? '<p class="result-excerpt">' + excerpt + "</p>" : "") +
            '<div class="result-meta">' +
            (dateStr ? '<span class="result-date">' + dateStr + "</span>" : "") +
            categoriesHtml +
            "</div>" +
            "</div>";

          resultsEl.appendChild(article);
        });

        // 分页
        if (totalPages > 1) {
          if (searchPagination) searchPagination.style.display = "flex";
          if (prevPage) prevPage.disabled = currentPage === 0;
          if (nextPage) nextPage.disabled = currentPage >= totalPages - 1;
          if (paginationInfo) paginationInfo.textContent = currentPage + 1 + " / " + totalPages;
        }
      })
      .catch(function () {
        if (searchLoading) searchLoading.style.display = "none";
        if (searchEmpty) searchEmpty.style.display = "flex";
      });
  }
})();
