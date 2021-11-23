const id = document.getElementById("id");
const pw = document.getElementById("pw");
const button = document.getElementById("toList");

// id이벤트
id.addEventListener("input", (e) => {
  if (id.value.includes("@") && pw.value.length > 7) {
    button.style.backgroundColor = "#79BAF2";
  } else {
    button.style.backgroundColor = "#b4d2e8";
  }
});

// pw이벤트
pw.addEventListener("input", (e) => {
  if (id.value.includes("@") && pw.value.length > 7) {
    button.style.backgroundColor = "#79BAF2";
  } else button.style.backgroundColor = "#b4d2e8";
});

// 클릭시 이벤트
button.addEventListener("click", () => {
  if (id.value.includes("@") && pw.value.length > 7) {
    sessionStorage.clear();
    sessionStorage.setItem("id", id.value);
    location.href = "./list.html";
  }
});
