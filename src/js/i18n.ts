// i18n 翻译表
const translations = {
  "zh-CN": {
    "nav.home": "首页",
    "nav.archives": "归档",
    "nav.categories": "分类",
    "nav.tags": "标签",
    "nav.about": "关于",
    "sidebar.search": "搜索文章...",
    "sidebar.categories": "分类",
    "sidebar.tags": "标签",
    "sidebar.archives": "归档",
    "sidebar.hot_posts": "热门文章",
    "sidebar.recent_comments": "最新文章",
    "sidebar.view_all": "查看全部",
    "sidebar.tag_cloud": "思想碎片",
    "post.read_more": "阅读更多",
    "post.published_at": "发布于",
    "post.category": "分类",
    "post.tags": "标签",
    "post.word_count": "字",
    "post.reading_time": "分钟阅读",
    "post.toc": "目录",
    "pagination.prev": "上一页",
    "pagination.next": "下一页",
    "pagination.total": "第 {0} 页，共 {1} 页",
    "footer.powered_by": "由 Halo 驱动",
    "footer.theme": "主题",
    "footer.copyright": "Copyright (c)",
    "footer.all_rights_reserved": "版权所有",
    "login.welcome": "欢迎回来",
    "login.subtitle": "请登录您的账户",
    "login.username": "用户名",
    "login.password": "密码",
    "login.remember": "记住我",
    "login.submit": "登 录",
    "login.no_account": "还没有账户？",
    "login.register": "立即注册",
    "login.or": "或",
    "login.error.invalid_credential": "用户名或密码错误",
    "login.error.rate_limit": "登录尝试次数过多，请稍后再试",
    "login.error.account_disabled": "账户已被禁用",
    "login.back_to_site": "← 返回站点",
    "password_reset.title": "找回密码",
    "password_reset.desc": "我们将向您的注册邮箱发送重置链接",
    "password_reset.back_to_login": "← 返回登录",
    "common.loading": "加载中...",
    "common.error": "错误",
    "common.success": "成功",
    "common.cancel": "取消",
    "common.confirm": "确认",
    "common.pinned": "置顶",
    "post.reading": "阅读",
    "post.comments": "评论",
    "post.prev": "上一篇",
    "post.next": "下一篇",
    "post.no_more": "没有了",
    "post.back_to_top": "回到顶部",
    "post.back": "返回上一页",
    "share.qzone": "QQ空间",
    "share.wechat": "微信",
    "share.weibo": "微博",
    "share.copy_link": "复制链接",
    "category.articles": "篇文章",
    "category.article_list": "文章列表",
    "category.empty": "该分类下暂无文章",
    "category.view_all": "查看全部",
    "tag.articles": "篇文章",
    "tag.article_list": "文章列表",
    "tag.empty": "该标签下暂无文章",
    "tag.view_all": "查看全部",
    "archives.title": "岁月痕迹",
    "archives.empty": "暂无岁月痕迹",
    "categories.title": "文字花园",
    "categories.desc": "漫步于主题之间，采撷每一朵思想的花",
    "categories.empty": "暂无分类",
    "categories.count_suffix": "个分类",
    "tags.title": "思想碎片",
    "tags.desc": "拾起散落的灵感碎片，拼凑出完整的思考图景",
    "tags.empty": "暂无标签",
    "archives.desc": "循着时光的足迹，重温每一篇文字",
    "search.title": "搜索",
    "search.desc": "在文字的世界中，寻找你心中的答案",
    "search.placeholder": "输入关键词搜索文章...",
    "search.btn": "搜索",
    "search.results_for": "搜索结果：",
    "search.results_count": "条结果",
    "search.no_results": "未找到相关文章",
    "search.no_results_hint": "试试更换关键词，或者浏览分类和标签",
    "search.initial": "输入关键词开始搜索",
    "index.latest_posts": "最新文章",
    "index.empty": "暂无文章，敬请期待",
    "moments.title": "瞬间",
    "moments.desc": "记录生活中的点滴灵感与碎碎念",
    "moments.count": "条瞬间",
    "moments.empty": "暂无瞬间",
  },
  "zh-TW": {
    "nav.home": "首頁",
    "nav.archives": "歸檔",
    "nav.categories": "分類",
    "nav.tags": "標籤",
    "nav.about": "關於",
    "sidebar.search": "搜索文章...",
    "sidebar.categories": "分類",
    "sidebar.tags": "標籤",
    "sidebar.archives": "歸檔",
    "sidebar.hot_posts": "熱門文章",
    "sidebar.recent_comments": "最新文章",
    "sidebar.view_all": "查看全部",
    "sidebar.tag_cloud": "思想碎片",
    "post.read_more": "閱讀更多",
    "post.published_at": "發布於",
    "post.category": "分類",
    "post.tags": "標籤",
    "post.word_count": "字",
    "post.reading_time": "分鐘閱讀",
    "post.toc": "目錄",
    "pagination.prev": "上一頁",
    "pagination.next": "下一頁",
    "pagination.total": "第 {0} 頁，共 {1} 頁",
    "footer.powered_by": "由 Halo 驅動",
    "footer.theme": "主題",
    "footer.copyright": "Copyright (c)",
    "footer.all_rights_reserved": "版權所有",
    "login.welcome": "歡迎回來",
    "login.subtitle": "請登錄您的帳戶",
    "login.username": "用戶名",
    "login.password": "密碼",
    "login.remember": "記住我",
    "login.submit": "登 錄",
    "login.no_account": "還沒有帳戶？",
    "login.register": "立即註冊",
    "login.or": "或",
    "login.error.invalid_credential": "用戶名或密碼錯誤",
    "login.error.rate_limit": "登錄嘗試次數過多，請稍後再試",
    "login.error.account_disabled": "賬戶已被禁用",
    "login.back_to_site": "← 返回站點",
    "password_reset.title": "找回密碼",
    "password_reset.desc": "我們將向您的注冊郵箱發送重置鏈接",
    "password_reset.back_to_login": "← 返回登錄",
    "common.loading": "加載中...",
    "common.error": "錯誤",
    "common.success": "成功",
    "common.cancel": "取消",
    "common.confirm": "確認",
    "common.pinned": "置頂",
    "post.reading": "閱讀",
    "post.comments": "評論",
    "post.prev": "上一篇",
    "post.next": "下一篇",
    "post.no_more": "沒有了",
    "post.back_to_top": "回到頂部",
    "post.back": "返回上一頁",
    "share.qzone": "QQ空間",
    "share.wechat": "微信",
    "share.weibo": "微博",
    "share.copy_link": "複製鏈接",
    "category.articles": "篇文章",
    "category.article_list": "文章列表",
    "category.empty": "該分類下暫無文章",
    "category.view_all": "查看全部",
    "tag.articles": "篇文章",
    "tag.article_list": "文章列表",
    "tag.empty": "該標籤下暫無文章",
    "tag.view_all": "查看全部",
    "archives.title": "歲月痕跡",
    "archives.empty": "暫無歲月痕跡",
    "categories.title": "文字花園",
    "categories.desc": "漫步於主題之間，採擷每一朵思想的花",
    "categories.empty": "暫無分類",
    "categories.count_suffix": "個分類",
    "tags.title": "思想碎片",
    "tags.desc": "拾起散落的靈感碎片，拼湊出完整的思考圖景",
    "tags.empty": "暫無標籤",
    "archives.desc": "循著時光的足跡，重溫每一篇文字",
    "search.title": "搜索",
    "search.desc": "在文字的世界中，尋找你心中的答案",
    "search.placeholder": "輸入關鍵詞搜索文章...",
    "search.btn": "搜索",
    "search.results_for": "搜索結果：",
    "search.results_count": "條結果",
    "search.no_results": "未找到相關文章",
    "search.no_results_hint": "試試更換關鍵詞，或者瀏覽分類和標籤",
    "search.initial": "輸入關鍵詞開始搜索",
    "index.latest_posts": "最新文章",
    "index.empty": "暫無文章，敬請期待",
    "moments.title": "瞬間",
    "moments.desc": "記錄生活中的點滴靈感與碎碎念",
    "moments.count": "條瞬間",
    "moments.empty": "暫無瞬間",
  },
  en: {
    "nav.home": "Home",
    "nav.archives": "Archives",
    "nav.categories": "Categories",
    "nav.tags": "Tags",
    "nav.about": "About",
    "sidebar.search": "Search articles...",
    "sidebar.categories": "Categories",
    "sidebar.tags": "Tags",
    "sidebar.archives": "Archives",
    "sidebar.hot_posts": "Hot Posts",
    "sidebar.recent_comments": "Latest Posts",
    "sidebar.view_all": "View all",
    "sidebar.tag_cloud": "Tag Cloud",
    "post.read_more": "Read More",
    "post.published_at": "Published on",
    "post.category": "Category",
    "post.tags": "Tags",
    "post.word_count": "words",
    "post.reading_time": "min read",
    "post.toc": "Table of Contents",
    "pagination.prev": "Previous",
    "pagination.next": "Next",
    "pagination.total": "Page {0} of {1}",
    "footer.powered_by": "Powered by Halo",
    "footer.theme": "Theme",
    "footer.copyright": "Copyright (c)",
    "footer.all_rights_reserved": "All rights reserved.",
    "login.welcome": "Welcome Back",
    "login.subtitle": "Please sign in to your account",
    "login.username": "Username",
    "login.password": "Password",
    "login.remember": "Remember me",
    "login.submit": "Sign In",
    "login.no_account": "Don't have an account?",
    "login.register": "Register now",
    "login.or": "or",
    "login.error.invalid_credential": "Invalid username or password",
    "login.error.rate_limit": "Too many login attempts, please try again later",
    "login.error.account_disabled": "Account has been disabled",
    "login.back_to_site": "← Back to site",
    "password_reset.title": "Reset Password",
    "password_reset.desc": "We will send a reset link to your registered email",
    "password_reset.back_to_login": "← Back to login",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.confirm": "Confirm",
    "common.pinned": "Pinned",
    "post.reading": "reads",
    "post.comments": "comments",
    "post.prev": "Previous",
    "post.next": "Next",
    "post.no_more": "No more",
    "post.back_to_top": "Back to top",
    "post.back": "Go back",
    "share.qzone": "QZone",
    "share.wechat": "WeChat",
    "share.weibo": "Weibo",
    "share.copy_link": "Copy link",
    "category.articles": "articles",
    "category.article_list": "Articles",
    "category.empty": "No articles in this category",
    "category.view_all": "View all",
    "tag.articles": "articles",
    "tag.article_list": "Articles",
    "tag.empty": "No articles with this tag",
    "tag.view_all": "View all",
    "archives.title": "Traces of Time",
    "archives.empty": "No articles",
    "categories.title": "Categories",
    "categories.desc": "Wander through themes and gather every flower of thought",
    "categories.empty": "No categories",
    "categories.count_suffix": "categories",
    "tags.title": "Tags",
    "tags.desc": "Collect scattered inspiration and piece together a complete picture of thought",
    "tags.empty": "No tags",
    "archives.desc": "Follow the footsteps of time and revisit every article",
    "search.title": "Search",
    "search.desc": "Search for answers in the world of words",
    "search.placeholder": "Enter keyword to search...",
    "search.btn": "Search",
    "search.results_for": "Results for:",
    "search.results_count": "results",
    "search.no_results": "No matching articles found",
    "search.no_results_hint": "Try different keywords, or browse categories and tags",
    "search.initial": "Enter a keyword to start searching",
    "index.latest_posts": "Latest Posts",
    "index.empty": "No posts yet, stay tuned",
    "moments.title": "Moments",
    "moments.desc": "Capturing life's little inspirations and thoughts",
    "moments.count": "moments",
    "moments.empty": "No moments yet",
  },
  es: {
    "nav.home": "Inicio",
    "nav.archives": "Archivos",
    "nav.categories": "Categorías",
    "nav.tags": "Etiquetas",
    "nav.about": "Acerca de",
    "sidebar.search": "Buscar artículos...",
    "sidebar.categories": "Categorías",
    "sidebar.tags": "Etiquetas",
    "sidebar.archives": "Archivos",
    "sidebar.hot_posts": "Artículos Populares",
    "sidebar.recent_comments": "Últimas Publicaciones",
    "sidebar.view_all": "Ver todo",
    "sidebar.tag_cloud": "Nube de Etiquetas",
    "post.read_more": "Leer Más",
    "post.published_at": "Publicado el",
    "post.category": "Categoría",
    "post.tags": "Etiquetas",
    "post.word_count": "palabras",
    "post.reading_time": "min lectura",
    "post.toc": "Tabla de Contenidos",
    "pagination.prev": "Anterior",
    "pagination.next": "Siguiente",
    "pagination.total": "Página {0} de {1}",
    "footer.powered_by": "Impulsado por Halo",
    "footer.theme": "Tema",
    "footer.copyright": "Copyright (c)",
    "footer.all_rights_reserved": "Todos los derechos reservados.",
    "login.welcome": "Bienvenido",
    "login.subtitle": "Por favor inicia sesión en tu cuenta",
    "login.username": "Nombre de usuario",
    "login.password": "Contraseña",
    "login.remember": "Recuérdame",
    "login.submit": "Iniciar Sesión",
    "login.no_account": "¿No tienes una cuenta?",
    "login.register": "Regístrate ahora",
    "login.or": "o",
    "login.error.invalid_credential": "Nombre de usuario o contraseña incorrectos",
    "login.error.rate_limit": "Demasiados intentos de inicio de sesión, inténtalo más tarde",
    "login.error.account_disabled": "La cuenta ha sido deshabilitada",
    "login.back_to_site": "← Volver al sitio",
    "password_reset.title": "Recuperar contraseña",
    "password_reset.desc": "Enviaremos un enlace de restablecimiento a tu correo registrado",
    "password_reset.back_to_login": "← Volver al inicio de sesión",
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.confirm": "Confirmar",
    "common.pinned": "Fijado",
    "post.reading": "lecturas",
    "post.comments": "comentarios",
    "post.prev": "Anterior",
    "post.next": "Siguiente",
    "post.no_more": "No hay más",
    "post.back_to_top": "Volver arriba",
    "post.back": "Volver atrás",
    "share.qzone": "QZone",
    "share.wechat": "WeChat",
    "share.weibo": "Weibo",
    "share.copy_link": "Copiar enlace",
    "category.articles": "artículos",
    "category.article_list": "Artículos",
    "category.empty": "No hay artículos en esta categoría",
    "category.view_all": "Ver todo",
    "tag.articles": "artículos",
    "tag.article_list": "Artículos",
    "tag.empty": "No hay artículos con esta etiqueta",
    "tag.view_all": "Ver todo",
    "archives.title": "Huellas del tiempo",
    "archives.empty": "No hay artículos",
    "categories.title": "Categorías",
    "categories.desc": "Recorre los temas y recoge cada flor de pensamiento",
    "categories.empty": "No hay categorías",
    "categories.count_suffix": "categorías",
    "tags.title": "Etiquetas",
    "tags.desc":
      "Recoge fragmentos de inspiración dispersos y construye una imagen completa del pensamiento",
    "tags.empty": "No hay etiquetas",
    "archives.desc": "Sigue las huellas del tiempo y revisita cada artículo",
    "search.title": "Buscar",
    "search.desc": "Busca respuestas en el mundo de las palabras",
    "search.placeholder": "Ingresa una palabra clave para buscar...",
    "search.btn": "Buscar",
    "search.results_for": "Resultados para:",
    "search.results_count": "resultados",
    "search.no_results": "No se encontraron artículos",
    "search.no_results_hint": "Intenta con otras palabras clave, o explora categorías y etiquetas",
    "search.initial": "Ingresa una palabra clave para comenzar",
    "index.latest_posts": "Últimas Publicaciones",
    "index.empty": "Aún no hay publicaciones, mantente atento",
    "moments.title": "Momentos",
    "moments.desc": "Capturando las pequeñas inspiraciones y pensamientos de la vida",
    "moments.count": "momentos",
    "moments.empty": "Aún no hay momentos",
  },
};

// 获取当前语言
function getCurrentLang() {
  const urlParams = new URLSearchParams(window.location.search);
  // 优先级：URL 参数 > localStorage > html lang 属性 > 默认值
  const urlLang = urlParams.get("language");
  if (urlLang && translations[urlLang as keyof typeof translations]) {
    try {
      localStorage.setItem("ShaneYu-lang", urlLang);
    } catch {
      // ignore
    }
    return urlLang;
  }
  try {
    const storedLang = localStorage.getItem("ShaneYu-lang");
    if (storedLang && translations[storedLang as keyof typeof translations]) {
      return storedLang;
    }
  } catch {
    // ignore
  }
  return document.documentElement.lang || "zh-CN";
}

// 翻译函数
function t(key: string, ...args: (string | number)[]): string {
  const lang = getCurrentLang();
  const langTranslations = translations[lang as keyof typeof translations] || translations["zh-CN"];
  let text = langTranslations[key as keyof typeof langTranslations] || key;

  // 处理参数替换 {0}, {1}, etc.
  args.forEach((arg, index) => {
    text = text.replace(new RegExp(`\\{${index}\\}`, "g"), String(arg));
  });

  return text;
}

// 应用翻译到页面
function applyTranslations() {
  const lang = getCurrentLang();

  // 保存到 localStorage
  try {
    localStorage.setItem("ShaneYu-lang", lang);
  } catch {
    // ignore
  }

  // 更新所有带有 data-i18n 属性的元素
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = t(key);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      (el as HTMLInputElement).placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // 处理 data-i18n-suffix 属性（数字 + 翻译后缀）
  document.querySelectorAll("[data-i18n-suffix]").forEach((el) => {
    const suffixKey = el.getAttribute("data-i18n-suffix");
    if (!suffixKey) return;
    const number = el.textContent?.trim() || "0";
    const suffix = t(suffixKey);
    el.textContent = number + " " + suffix;
  });

  // 处理 data-i18n-title 属性（title 属性翻译）
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (!key) return;
    el.setAttribute("title", t(key));
  });

  // 处理 data-i18n-placeholder 属性（placeholder 属性翻译）
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    (el as HTMLInputElement).placeholder = t(key);
  });

  // 更新 html lang 属性
  document.documentElement.lang = lang;

  // 为页面内所有内部链接追加 language 参数
  const currentHost = window.location.host;
  document.querySelectorAll("a[href]").forEach((el) => {
    const anchor = el as HTMLAnchorElement;
    const href = anchor.getAttribute("href");
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("javascript:") ||
      href.startsWith("mailto:")
    )
      return;
    // 只处理同域链接
    if (href.startsWith("http") && !href.includes(currentHost)) return;
    const url = new URL(anchor.href);
    if (!url.searchParams.has("language")) {
      url.searchParams.set("language", lang);
      anchor.href = url.toString();
    }
  });
}

// 页面加载时应用翻译
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyTranslations);
} else {
  applyTranslations();
}
