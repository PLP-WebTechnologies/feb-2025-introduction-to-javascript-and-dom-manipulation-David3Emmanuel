// Wait for the document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Update the date and time when the page loads
  updateDateTime();

  // Set interval to update the date and time every second
  setInterval(updateDateTime, 1000);

  // Text content manipulation
  const changeTextBtn = document.getElementById("change-text-btn");
  const dynamicText = document.getElementById("dynamic-text");
  const textOptions = [
    "JavaScript makes web pages dynamic and interactive!",
    "DOM manipulation allows you to modify HTML elements on the fly.",
    "Event listeners respond to user interactions.",
    "JavaScript was created in 10 days by Brendan Eich.",
    "JavaScript is one of the most popular programming languages.",
  ];
  let textIndex = 0;

  changeTextBtn.addEventListener("click", function () {
    textIndex = (textIndex + 1) % textOptions.length;
    dynamicText.textContent = textOptions[textIndex];
  });

  // CSS Style manipulation
  const changeColorBtn = document.getElementById("change-color-btn");
  const toggleHighlightBtn = document.getElementById("toggle-highlight-btn");
  const toggleThemeBtn = document.getElementById("toggle-theme-btn");
  const styleDemo = document.getElementById("style-demo");
  const body = document.body;
  const colors = ["#FF6347", "#4682B4", "#32CD32", "#FF8C00", "#9370DB"];
  let colorIndex = 0;

  // Change text color
  changeColorBtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    styleDemo.style.color = colors[colorIndex];
  });

  // Toggle highlight class
  toggleHighlightBtn.addEventListener("click", function () {
    styleDemo.classList.toggle("highlight");
  });

  // Toggle dark/light mode
  toggleThemeBtn.addEventListener("click", function () {
    body.style.backgroundColor =
      body.style.backgroundColor === "rgb(51, 51, 51)" ? "#ffffff" : "#333333";
    body.style.color =
      body.style.color === "rgb(255, 255, 255)" ? "#000000" : "#ffffff";
  });

  // DOM Element addition/removal
  const addItemBtn = document.getElementById("add-item-btn");
  const removeItemBtn = document.getElementById("remove-item-btn");
  const dynamicList = document.getElementById("dynamic-list");
  let itemCounter = 1;

  // Add new item to the list
  addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemCounter}`;
    itemCounter++;
    dynamicList.appendChild(newItem);
  });

  // Remove the last item from the list
  removeItemBtn.addEventListener("click", function () {
    if (dynamicList.children.length > 0) {
      dynamicList.removeChild(dynamicList.lastElementChild);
    }
  });

  // Helper function to update date and time
  function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = `Current date and time: ${now.toLocaleString()}`;
  }
});
