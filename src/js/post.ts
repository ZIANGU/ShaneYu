import "../css/main.css";

// ===== 文章主要逻辑 =====
(function () {
  "use strict";

  var articleContent = document.querySelector(".prose");
  if (!articleContent) return;

  // ----- 目录生成 -----
  var tocNav = document.getElementById("sidebarTocNav") || document.getElementById("tocNav");
  if (tocNav) {
    var headings = articleContent.querySelectorAll("h2, h3, h4");
    if (headings.length === 0) {
      tocNav.innerHTML = '<div class="toc-empty">本文无目录</div>';
    } else {
      var sidebarToc = document.getElementById("sidebarToc");
      if (sidebarToc) {
        sidebarToc.style.display = "";
      }

      interface HeadingInfo {
        el: Element;
        id: string;
        level: number;
        text: string;
        index: number;
      }

      var headingList: HeadingInfo[] = [];
      headings.forEach(function (heading, index) {
        if (!heading.id) {
          heading.id =
            "heading-" +
            index +
            "-" +
            heading
              .textContent!.replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9\u4e00-\u9fa5-]/g, "")
              .slice(0, 30);
        }
        var level = parseInt(heading.tagName.substring(1), 10);
        headingList.push({
          el: heading,
          id: heading.id,
          level: level,
          text: heading.textContent || "",
          index: index,
        });
      });

      function findParentIndex(idx: number): number {
        var targetLevel = headingList[idx].level - 1;
        for (var i = idx - 1; i >= 0; i--) {
          if (headingList[i].level === targetLevel) return i;
        }
        return -1;
      }

      var tocLinks: { link: HTMLAnchorElement; item: HTMLElement; level: number }[] = [];
      var groupWrappers: { [key: number]: HTMLElement } = {};

      headingList.forEach(function (info, idx) {
        var item = document.createElement("div");
        item.className = "toc-item toc-level-" + info.level;
        item.dataset.index = String(idx);

        var link = document.createElement("a");
        link.href = "#" + info.id;
        link.textContent = info.text;
        link.className = "toc-link toc-h" + info.level;
        link.addEventListener("click", function (e) {
          e.preventDefault();
          var target = document.getElementById(info.id);
          if (target) {
            var headerHeight = 80;
            var targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPos, behavior: "smooth" });
          }
        });

        item.appendChild(link);
        tocLinks.push({ link: link, item: item, level: info.level });

        if (info.level === 2) {
          tocNav!.appendChild(item);
        } else {
          var parentIdx = findParentIndex(idx);
          if (parentIdx >= 0) {
            var container = groupWrappers[parentIdx];
            if (!container) {
              container = document.createElement("div");
              container.className = "toc-children";
              groupWrappers[parentIdx] = container;
              tocLinks[parentIdx].item.appendChild(container);
            }
            container.appendChild(item);
          } else {
            tocNav!.appendChild(item);
          }
        }
      });

      function setActive(idx: number): void {
        var expandSet = new Set<number>();
        var current = idx;
        while (current >= 0) {
          expandSet.add(current);
          var parent = findParentIndex(current);
          if (parent < 0) break;
          current = parent;
        }

        Object.keys(groupWrappers).forEach(function (key) {
          var parentIdx = parseInt(key, 10);
          var ctr = groupWrappers[parentIdx];
          if (expandSet.has(parentIdx)) {
            ctr.classList.add("expanded");
            tocLinks[parentIdx].item.classList.add("expanded");
          } else {
            ctr.classList.remove("expanded");
            tocLinks[parentIdx].item.classList.remove("expanded");
          }
        });

        tocLinks.forEach(function (entry, i) {
          entry.link.classList.toggle("active", i === idx);
        });
      }

      setActive(0);

      var observer = new IntersectionObserver(
        function (entries) {
          var topIdx = -1;
          var topY = Infinity;
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var idx2 = parseInt(entry.target.getAttribute("data-toc-idx") || "-1", 10);
              if (idx2 >= 0) {
                var rect = entry.boundingClientRect;
                if (rect.top < topY) {
                  topY = rect.top;
                  topIdx = idx2;
                }
              }
            }
          });
          if (topIdx >= 0) setActive(topIdx);
        },
        { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
      );

      headingList.forEach(function (info, idx) {
        info.el.setAttribute("data-toc-idx", String(idx));
        observer.observe(info.el);
      });
    }
  }

  // ----- 点赞功能 -----
  var upvoteBtn = document.getElementById("upvoteBtn") as HTMLElement | null;
  var upvoteCount = document.getElementById("upvoteCount") as HTMLElement | null;

  if (upvoteBtn && upvoteCount) {
    var postName = upvoteBtn.dataset.post || "";
    var storageKey = "ShaneYu-upvote-" + postName;

    if (localStorage.getItem(storageKey)) {
      upvoteBtn.classList.add("liked");
    }

    upvoteBtn!.addEventListener("click", async function () {
      if (upvoteBtn!.classList.contains("liked")) return;

      upvoteBtn!.classList.add("liked");
      var count = parseInt(upvoteCount!.textContent || "0", 10);
      upvoteCount!.textContent = String(count + 1);
      localStorage.setItem(storageKey, "1");

      try {
        var response = await fetch("/apis/api.halo.run/v1alpha1/trackers/upvote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            group: "content.halo.run",
            plural: "posts",
            name: postName,
          }),
        });

        if (!response.ok) {
          upvoteBtn!.classList.remove("liked");
          upvoteCount!.textContent = String(count);
          localStorage.removeItem(storageKey);
          showToast("点赞失败，请稍后重试");
        }
      } catch {
        upvoteBtn!.classList.remove("liked");
        upvoteCount!.textContent = String(count);
        localStorage.removeItem(storageKey);
        showToast("网络错误，请稍后重试");
      }
    });
  }

  // ----- 评论区滚动 -----
  var commentBtn = document.getElementById("commentBtn");
  if (commentBtn) {
    commentBtn.addEventListener("click", function () {
      var commentSection = document.querySelector(
        "halo-comment-widget, .halo-comment-widget, halo\\:comment, [data-comment]",
      ) as HTMLElement | null;
      if (commentSection) {
        var targetPos = commentSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      } else {
        var article = document.querySelector(".article-detail, .content-area");
        if (article) {
          var pos = (article as HTMLElement).getBoundingClientRect().bottom + window.scrollY - 80;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }
    });
  }

  // ----- 分享菜单 -----
  var shareBtn = document.getElementById("shareBtn");
  var shareMenu = document.getElementById("shareMenu");

  if (shareBtn && shareMenu) {
    shareBtn!.addEventListener("click", function (e) {
      e.stopPropagation();
      var isShowing = shareMenu!.classList.toggle("show");
      if (isShowing) {
        var rect = shareBtn!.getBoundingClientRect();
        shareMenu!.style.left = rect.right + 8 + "px";
        shareMenu!.style.top = rect.top + "px";
      }
    });

    document.addEventListener("click", function () {
      shareMenu!.classList.remove("show");
    });

    shareMenu!.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    var shareItems = shareMenu.querySelectorAll(".share-item");
    var shareUrl = window.location.href;
    var shareTitle = document.title;

    shareItems.forEach(function (item) {
      item.addEventListener("click", async function () {
        var type = (item as HTMLElement).dataset.share;
        var excerpt = shareMenu!.dataset.excerpt || "";
        if (!excerpt) {
          var descriptionEl = document.querySelector(".prose p");
          excerpt = descriptionEl ? descriptionEl.textContent || "" : "";
        }
        excerpt = excerpt.slice(0, 100);
        var shareContent = shareTitle + "\n" + excerpt + "\n" + shareUrl;
        if (type === "qzone") {
          window.open("https://qzone.qq.com/", "_blank");
        } else if (type === "weibo") {
          window.open("https://weibo.com/", "_blank");
        }
        var success = await copyToClipboard(shareContent);
        if (success) {
          if (type === "qzone") {
            showToast("已复制文章信息，请在QQ空间中粘贴分享");
          } else if (type === "weibo") {
            showToast("已复制文章信息，请在微博中粘贴分享");
          } else if (type === "wechat") {
            showToast("已复制文章信息，请在微信中粘贴分享");
          } else if (type === "copy") {
            showToast("已复制文章信息到剪贴板");
          }
        } else {
          showToast("复制失败，请手动复制链接");
        }
        shareMenu!.classList.remove("show");
      });
    });
  }

  // ----- 返回顶部（支持拖拽） -----
  var backtopBtn = document.getElementById("backtopBtn");
  if (backtopBtn) {
    var btn = backtopBtn;
    var isDragging = false;
    var dragStartX = 0;
    var dragStartY = 0;
    var btnStartRight = 0;
    var btnStartBottom = 0;
    var hasMoved = false;

    function updateBacktopState(): void {
      if (window.scrollY > 400) {
        btn.classList.add("show");
        btn.classList.remove("disabled");
        btn.removeAttribute("aria-disabled");
      } else {
        btn.classList.add("show", "disabled");
        btn.setAttribute("aria-disabled", "true");
      }
    }
    updateBacktopState();
    window.addEventListener("scroll", updateBacktopState, { passive: true });

    btn.addEventListener("mousedown", function (e) {
      isDragging = true;
      hasMoved = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      btnStartRight = parseInt(getComputedStyle(btn).right, 10) || 24;
      btnStartBottom = parseInt(getComputedStyle(btn).bottom, 10) || 32;
      btn.classList.add("dragging");
      e.preventDefault();
    });

    document.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      var dx = e.clientX - dragStartX;
      var dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;
      var newRight = btnStartRight - dx;
      var newBottom = btnStartBottom - dy;
      var maxRight = window.innerWidth - 60;
      var maxBottom = window.innerHeight - 60;
      newRight = Math.max(-10, Math.min(maxRight, newRight));
      newBottom = Math.max(-10, Math.min(maxBottom, newBottom));
      btn.style.right = newRight + "px";
      btn.style.bottom = newBottom + "px";
    });

    document.addEventListener("mouseup", function () {
      if (!isDragging) return;
      isDragging = false;
      btn.classList.remove("dragging");
    });

    btn.addEventListener("click", function () {
      if (hasMoved) return;
      if (btn.classList.contains("disabled")) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ----- 辅助函数 -----
  async function copyToClipboard(text: string): Promise<boolean> {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      console.warn("Clipboard API failed, falling back to execCommand:", err);
    }

    try {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      var successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      return successful;
    } catch (err) {
      console.error("execCommand copy failed:", err);
      return false;
    }
  }

  function showToast(message: string): void {
    var toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText =
      "position:fixed;bottom:30px;left:50%;transform:translateX(-50%);" +
      "padding:10px 20px;background:#1e293b;color:#fff;border-radius:8px;" +
      "font-size:14px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);" +
      "opacity:0;transition:opacity 0.3s;";
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = "1";
    }, 10);
    setTimeout(function () {
      toast.style.opacity = "0";
      setTimeout(function () {
        document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }

  // ----- 阅读统计 -----
  function fillReadingStats(): void {
    var wcEl = document.getElementById("postWordCount");
    var rtEl = document.getElementById("postReadTime");
    if (!wcEl || !rtEl || !articleContent) return;

    var text = (articleContent as HTMLElement).innerText || articleContent.textContent || "";
    var chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    var englishWords = (text.replace(/[\u4e00-\u9fa5]/g, " ").match(/[A-Za-z0-9]+/g) || []).length;
    var total = chineseChars + englishWords;
    if (total === 0) return;

    var minutes = Math.max(1, Math.round(chineseChars / 300 + englishWords / 200));

    var wcText = wcEl.querySelector(".word-count-text");
    var rtText = rtEl.querySelector(".read-time-text");
    if (wcText) wcText.textContent = total + " 字";
    if (rtText) rtText.textContent = "约 " + minutes + " 分钟";
    wcEl.removeAttribute("hidden");
    rtEl.removeAttribute("hidden");
  }
  fillReadingStats();

  // ----- 阅读进度 -----
  var readingProgress = document.getElementById("readingProgress");
  if (readingProgress) {
    function updateReadingProgress(): void {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrolled = window.scrollY;
      var percent =
        docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrolled / docHeight) * 100))) : 0;
      readingProgress!.style.width = percent + "%";
    }
    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress, { passive: true });
  }
})();

// ===== 文章图片查看器 =====
function initImageViewer(): void {
  var prose = document.querySelector(".prose");
  if (!prose) return;

  var viewer = document.createElement("div");
  viewer.className = "image-viewer";
  viewer.innerHTML =
    '<div class="image-viewer-tip">滚轮缩放 · 拖动平移 · 双击复位 · 点击关闭</div>';
  var img = document.createElement("img");
  viewer.appendChild(img);
  document.body.appendChild(viewer);

  var scale = 1;
  var x = 0;
  var y = 0;
  var dragging = false;
  var startX = 0;
  var startY = 0;
  var startTX = 0;
  var startTY = 0;
  var moved = false;

  function applyTransform(): void {
    img.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
  }

  function open(src: string): void {
    img.src = src;
    scale = 1;
    x = 0;
    y = 0;
    applyTransform();
    viewer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close(): void {
    viewer.classList.remove("open");
    document.body.style.overflow = "";
  }

  prose.addEventListener("click", function (e) {
    var target = e.target as HTMLElement;
    if (target.tagName === "IMG") {
      e.preventDefault();
      open((target as HTMLImageElement).src);
    }
  });

  viewer.addEventListener("click", function () {
    if (moved) {
      moved = false;
      return;
    }
    close();
  });

  viewer.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      var delta = e.deltaY < 0 ? 0.15 : -0.15;
      scale = Math.min(5, Math.max(0.5, scale + delta));
      applyTransform();
    },
    { passive: false },
  );

  viewer.addEventListener("dblclick", function (e) {
    e.preventDefault();
    scale = 1;
    x = 0;
    y = 0;
    applyTransform();
  });

  viewer.addEventListener("mousedown", function (e) {
    dragging = true;
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
    startTX = x;
    startTY = y;
    e.preventDefault();
  });
  window.addEventListener("mousemove", function (e) {
    if (!dragging) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
    x = startTX + dx;
    y = startTY + dy;
    applyTransform();
  });
  window.addEventListener("mouseup", function () {
    dragging = false;
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && viewer.classList.contains("open")) close();
  });
}
initImageViewer();
