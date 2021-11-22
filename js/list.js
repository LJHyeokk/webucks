const items = [
  {
    img: "./images/coffee5.png",
    name: "바닐라 크림 콜드 브루",
  },
  {
    img: "./images/coffee6.png",
    name: "벨벳 다크 모카 나이트로",
  },
  {
    img: "./images/coffee7.png",
    name: "시그니처 더 블랙 콜드 브루",
  },
  {
    img: "./images/coffee8.png",
    name: "제주 비자림 콜드 브루",
  },
  {
    img: "./images/coffee9.png",
    name: "콜드 브루",
  },
  {
    img: "./images/coffee10.png",
    name: "콜드 브루 몰트",
  },
  {
    img: "./images/coffee11.png",
    name: "콜드 브루 오트 라떼",
  },
  {
    img: "./images/coffee12.png",
    name: "콜드 브루 플로트",
  },
  {
    img: "./images/coffee13.png",
    name: "프렌치 애플 타르트 나이트로",
  },
];

const items1 = [
  {
    img: "./images/coffee5.png",
    name: "아이스 카페 아메리카노",
  },
  {
    img: "./images/coffee6.png",
    name: "카페 아메리카노",
  },
  {
    img: "./images/coffee7.png",
    name: "아이스 카라멜 마키아또",
  },
  {
    img: "./images/coffee8.png",
    name: "카라멜 마키아또",
  },
  {
    img: "./images/coffee9.png",
    name: "아이스 카푸치노",
  },
  {
    img: "./images/coffee10.png",
    name: "카푸치노",
  },
  {
    img: "./images/coffee11.png",
    name: "라벤더 카페 브레베",
  },
  {
    img: "./images/coffee12.png",
    name: "럼 샷 코르타도",
  },
  {
    img: "./images/coffee3.png",
    name: "바닐라 빈 라떼",
  },
  {
    img: "./images/coffee2.png",
    name: "블론드 에스프레소 라떼",
  },
  {
    img: "./images/coffee1.png",
    name: "사케라또 비안코 오버 아이스",
  },
];
let origin = document.getElementsByClassName("상품들")[0].innerHTML; // 기존의 상품들 저장.
let origin1 = document.getElementsByClassName("상품들")[1].innerHTML; // 기존의 상품들 저장.
document.getElementsByClassName("more")[0].addEventListener("click", () => {
  let item = document.getElementsByClassName("상품들")[0];
  if (document.getElementsByClassName("more")[0].innerHTML === "더보기")
    for (let i = 0; i < items.length; i++) {
      item.innerHTML =
        item.innerHTML +
        `<div class='add'><img src=${items[i].img} /><h4>${items[i].name}</h4></div>`;
      document.getElementsByClassName("more")[0].innerHTML = "접기";
    }
  else {
    item.innerHTML = origin;
    document.getElementsByClassName("more")[0].innerHTML = "더보기";
  }
});

document.getElementsByClassName("more")[1].addEventListener("click", () => {
  let item = document.getElementsByClassName("상품들")[1];

  if (document.getElementsByClassName("more")[1].innerHTML === "더보기")
    // 버튼누르면 배열에서 값을 가져와서 보여줌.
    for (let i = 0; i < items1.length; i++) {
      item.innerHTML =
        item.innerHTML +
        `<div class='add'><img src=${items1[i].img} /><h4>${items1[i].name}</h4></div>`;
      document.getElementsByClassName("more")[1].innerHTML = "접기";
    }
  else {
    item.innerHTML = origin1;
    document.getElementsByClassName("more")[1].innerHTML = "더보기";
    console.log("asd");
  }
});
