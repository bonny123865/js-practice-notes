console.log("開始註冊...");

// 註冊一個 5 秒後才執行的任務
const id = setTimeout(() => {
  console.log("執行中");
}, 5000);

// 此時 id 已經被賦予了一個整數（例如 1）
console.log("註冊成功，獲取的 Timer ID 為：", id);

// 若要在 5 秒內取消該計畫，只需將該 id 變數傳入
clearTimeout(id);

console.log("已執行 clearTimeout，計畫已取消。");
