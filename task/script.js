document.addEventListener("click", function(e) {
  const isButton = e.target.classList.contains("dropdown-btn");
  
  
  document.querySelectorAll(".dropdown").forEach(drop => {
    if (!drop.contains(e.target)) drop.classList.remove("show");
  });

  
  if (isButton) {
    const nextDropdown = e.target.nextElementSibling;
    if (nextDropdown) nextDropdown.classList.toggle("show");
  }
});
