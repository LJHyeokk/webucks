let login = false;
document.getElementById("id").addEventListener("input", (e) => {
  if (document.getElementById("id").value.includes("@")) {
    login = true;
  } else {
    login = false;
    document.getElementById("toList").style.backgroundColor = "#b4d2e8";
  }
});

document.getElementById("pw").addEventListener("input", (e) => {
  if (document.getElementById("pw").value.length > 7 && login === true) {
    document.getElementById("toList").style.backgroundColor = "#79BAF2";
  } else document.getElementById("toList").style.backgroundColor = "#b4d2e8";
});

document.getElementById("toList").addEventListener("click", () => {
  if (
    document.getElementById("id").value.includes("@") &&
    document.getElementById("pw").value.length > 7 &&
    login === true
  ) {
    console.log("ad");
    location.href = "./list.html";
  }
});
