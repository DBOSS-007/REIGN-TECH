
  // Mobile nav toggle
  document.getElementById("menuToggle").onclick = () => {
    document.getElementById("navLinks").classList.toggle("show");
  };

  // Video preview modal
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".preview-btn").forEach(btn => {
    btn.onclick = () => {
      modal.style.display = "flex";
      videoFrame.src = btn.dataset.video;
    };
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
    videoFrame.src = "";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  };
