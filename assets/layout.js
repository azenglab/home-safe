/* ============================================================
   全家平安守护中心 · 共享页面骨架
   所有页面的顶部导航与页脚由此文件统一渲染。
   用法：页面中放占位符 <div id="site-header"></div> 与 <div id="site-footer"></div>，
   并在任意位置引入：<script src="assets/layout.js" data-page="home"></script>
   可选属性：data-footer="off" 不渲染页脚。
   新增页面步骤：复制现有页面 → 保留占位符 → 修改 data-page → 在 NAV 中登记。
   ============================================================ */
(function () {
  var s = document.currentScript;
  var page = s ? (s.getAttribute('data-page') || '') : '';
  var noFooter = s && s.getAttribute('data-footer') === 'off';

  /* 站点导航登记表：新增页面只需在此追加一行 */
  var NAV = [
    { id: 'home',  href: 'index.html',         label: '家庭应急求助' },
    { id: 'trip',  href: 'family-trip.html',   label: '平安出行清单' },
    { id: 'kids',  href: 'student-safety.html', label: '学生安全知识' },
    { id: 'tools', href: 'tools.html',         label: '平安工具箱' }
  ];

  var HEADER_HTML =
    '<header class="site-header"><div class="site-shell bar">' +
      '<a class="site-brand" href="index.html">' +
        '<span class="site-logo"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide lucide-siren"><path d="M7 18v-6a5 5 0 1 1 10 0v6"></path><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M12 2v1"></path><path d="m4.929 4.929.707.707"></path><path d="M12 12v6"></path></svg></span>' +
        // '<span class="site-brand-text">' +
        //   '<span class="site-name">全家平安守护中心</span>' +
        //   '<span class="site-sub">家庭应急 · 出行检查 · 儿童安全</span>' +
        // '</span>' +
      '</a>' +
      '<nav class="site-nav">' +
        NAV.map(function (n) {
          return '<a href="' + n.href + '"' + (n.id === page ? ' class="active"' : '') + '>' + n.label + '</a>';
        }).join('') +
      '</nav>' +
    '</div></header>';

  // var FOOTER_HTML =
  //   '<footer class="site-footer"><div class="inner">' +
  //     '<span>🏡 全家平安守护中心 · 建议添加至手机主屏幕 · 本地存储，不上传服务器</span>' +
  //     '<span class="emg-group">' +
  //       '<a class="emg-chip rose" href="tel:12122">高速 12122</a>' +
  //       '<a class="emg-chip sky" href="tel:110">报警 110</a>' +
  //       '<a class="emg-chip orange" href="tel:119">火警 119</a>' +
  //       '<a class="emg-chip emerald" href="tel:120">急救 120</a>' +
  //     '</span>' +
  //   '</div></footer>';

  function mount() {
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h) h.outerHTML = HEADER_HTML;
    // FOOTER_HTML 已注释停用：直接移除页脚占位符
    if (f) f.outerHTML = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
