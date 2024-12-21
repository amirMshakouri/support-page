// Optional for future interactive features
console.log("صفحه پشتیبانی بارگذاری شد.");
function changeImage(thumbnail) {
    document.querySelector(".main-image").src = thumbnail.src;
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  window.addEventListener("scroll", () => {
    const button = document.getElementById("back-to-top");
    button.style.display = window.scrollY > 300 ? "block" : "none";
  });
  