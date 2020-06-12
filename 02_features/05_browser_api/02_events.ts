// Events
const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function`);
};
