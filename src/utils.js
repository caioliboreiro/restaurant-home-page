function wipeOut() {
  function removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  const content = document.querySelector("#content");
  content.style.position = "static";
  content.style.backgroundImage = "";

  removeAllChildren(content);
}

export default wipeOut;
