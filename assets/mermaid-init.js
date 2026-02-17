(function () {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default'
  });

  document.querySelectorAll('code.language-mermaid').forEach(function (el) {
    var pre = el.closest('pre');
    if (!pre) return;
    var div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = el.textContent.trim();
    pre.replaceWith(div);
  });

  mermaid.run();
})();
