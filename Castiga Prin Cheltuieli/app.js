function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }
  
  function showSection(event, sectionId) {
    event.preventDefault();
    let sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active");
    }
    let section = document.getElementById(sectionId);
    section.classList.add("active");
    let dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.remove("show");
  }
  