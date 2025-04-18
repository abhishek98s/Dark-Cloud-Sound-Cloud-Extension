// Create a MutationObserver to monitor changes in the DOM
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Check if the darkstyle_css link is not present
    if (document.getElementById("darkstyle_css") == null) {
      var head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");

      link.id = "darkstyle_css";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = chrome.runtime.getURL("dark.css");
      link.media = "all";

      head.appendChild(link);
    }
  });
});

// Start observing the document for changes
observer.observe(document, {
  childList: true,
  subtree: true
});