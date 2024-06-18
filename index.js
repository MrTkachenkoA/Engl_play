document.addEventListener("DOMContentLoaded", () => {
  const activeElements = [];
  const wrapRes = document.querySelector(".wrap_res .text");
  let matchedPairs = 0;

  document.querySelectorAll(".wrap").forEach((div) => {
    div.addEventListener("click", function () {
      if (this.classList.contains("inactive")) {
        return;
      }

      if (this.classList.contains("active")) {
        this.classList.remove("active");
        const index = activeElements.indexOf(this);
        if (index > -1) {
          activeElements.splice(index, 1);
        }
      } else {
        if (activeElements.length < 2) {
          this.classList.add("active");
          activeElements.push(this);

          if (activeElements.length === 2) {
            const [first, second] = activeElements;

            if (first.id === second.id) {
              first.classList.remove("active");
              first.classList.add("inactive");
              second.classList.remove("active");
              second.classList.add("inactive");
              matchedPairs++;
              wrapRes.textContent = `${matchedPairs}/4`;
              activeElements.length = 0;
            } else {
              first.classList.add("error");
              second.classList.add("error");
              setTimeout(() => {
                first.classList.remove("active", "error");
                second.classList.remove("active", "error");
                activeElements.length = 0;
              }, 300);
            }
          }
        }
      }
    });
  });
});
