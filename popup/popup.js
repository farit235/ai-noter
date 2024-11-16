let count = 0;
let counterDisplay = document.getElementById("counterDisplay");
let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");

// Получение значения счетчика из хранилища и отображение его
chrome.storage.sync.get("count", function (result) {
  count = result.count || 0;
  counterDisplay.textContent = count;
});

// Обработчик для увеличения счетчика
incrementButton.addEventListener("click", function() {
  count++;
  counterDisplay.textContent = count;
  chrome.storage.sync.set({ "count": count });
});

// Обработчик для уменьшения счетчика
decrementButton.addEventListener("click", function() {
  count--;
  counterDisplay.textContent = count;
  chrome.storage.sync.set({ "count": count });
});
