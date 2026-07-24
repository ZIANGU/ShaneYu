import "../css/main.css";

// ===== 关于页面逻辑 =====
(function () {
  "use strict";

  console.log("About page loaded");

  // 技术栈逗号分割处理
  function splitTechStacks() {
    const techElements = document.querySelectorAll(".project-tech");
    techElements.forEach((el) => {
      const text = el.textContent || "";
      if (text.includes(",")) {
        const tags = text
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag);
        const container = document.createElement("div");
        container.className = "project-tech-tags";
        tags.forEach((tag) => {
          const span = document.createElement("span");
          span.className = "project-tech-tag";
          span.textContent = tag;
          container.appendChild(span);
        });
        el.parentNode?.replaceChild(container, el);
      }
    });
  }

  // 页面加载完成后执行
  document.addEventListener("DOMContentLoaded", splitTechStacks);
})();
