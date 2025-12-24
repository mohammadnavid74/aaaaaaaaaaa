function convertDigitsToPersianInDOM() {
  const persianMap = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    node.nodeValue =
      node.nodeValue?.replace(/\d/g, (d) => persianMap[+d]) || "";
  }
}

export default convertDigitsToPersianInDOM;
