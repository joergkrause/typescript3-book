function renderWidget() {
  const container = document.getElementById("widget");
  if (container !== null) {
    import("./widget").then(w => {
      w.widget.render(container);
    });
  }
}

let s: Record<string, string>;


renderWidget();