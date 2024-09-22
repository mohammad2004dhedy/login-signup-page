let container = document.querySelector("#container");
let overlayContainer = document.querySelector("#overlay-container");
let overlayBtn = document.querySelector("#overlayBtn");
overlayBtn.addEventListener("click", () => {
  container.classList.toggle("left-panel-active");
  overlayBtn.classList.remove("OverLayBtnScaled");
  window.requestAnimationFrame(() => {
    overlayBtn.classList.add("OverLayBtnScaled");
    // هاي عشان كل ما اكبس على الكبسة يشيل الكلاس ويرد يضيفه من الويندو نفسها
    // ولو ما عملت هيك فهو بشتغل مرا وحدة بس
  });
});
