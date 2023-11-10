document.addEventListener("DOMContentLoaded", function() {
    const tabs = Array.from(document.querySelectorAll(".tab"));
    const details = Array.from(document.querySelectorAll(".details"));
    const prevPageButton = document.querySelector(".prev-page");
    const nextPageButton = document.querySelector(".next-page");
    const currentPageSpan = document.querySelector(".current-page");
  
    let currentTab = 0;
    let currentPage = 1;
    const totalTabs = tabs.length;
  
    function showDetails(tabIndex, page) {
      tabs.forEach(tab => tab.classList.remove("active"));
      tabs[tabIndex].classList.add("active");
  
      details.forEach(detail => detail.classList.remove("active"));
      details[tabIndex].classList.add("active");
  
      const dataPages = details[tabIndex].querySelectorAll(".data-page");
      const totalDataPages = dataPages.length;
  
      dataPages.forEach(dataPage => dataPage.classList.remove("active"));
  
      if (page < 1) {
        currentPage = 1;
      } else if (page > totalDataPages) {
        currentPage = totalDataPages;
      } else {
        currentPage = page;
      }
  
      dataPages[currentPage - 1].classList.add("active");
  
      currentTab = tabIndex;
      currentPageSpan.textContent = currentPage;
    }
  
    function showPreviousPage() {
      showDetails(currentTab, currentPage - 1);
    }
  
    function showNextPage() {
      showDetails(currentTab, currentPage + 1);
    }
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function() {
        showDetails(index, 1);
      });
    });
  
    prevPageButton.addEventListener("click", showPreviousPage);
    nextPageButton.addEventListener("click", showNextPage);
  
    // Show the initial details (Tab 1, Page 1)
    showDetails(0, 1);
  });
  