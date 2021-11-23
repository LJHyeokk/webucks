// 콜드브루 아이템들
const 콜드브루 = [
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
// 에스프레소 아이템들
const 에스프레소 = [
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

const 콜드브루기본값 = document.getElementsByClassName("상품들")[0].innerHTML; // 기존의 상품들 저장.
const 에스프레소기본값 = document.getElementsByClassName("상품들")[1].innerHTML; // 기존의 상품들 저장.
const 콜드브루더보기버튼 = document.getElementsByClassName("more")[0];
const 에스프레소더보기버튼 = document.getElementsByClassName("more")[1];

콜드브루더보기버튼.addEventListener("click", () => {
  let 상품이보여지는공간 = document.getElementsByClassName("상품들")[0];
  if (콜드브루더보기버튼.innerHTML === "더보기")
    for (let i = 0; i < 콜드브루.length; i++) {
      상품이보여지는공간.innerHTML =
        상품이보여지는공간.innerHTML +
        `<div class='add'><img src=${콜드브루[i].img} /><h4>${콜드브루[i].name}</h4></div>`;
      콜드브루더보기버튼.innerHTML = "접기";
    }
  else {
    상품이보여지는공간.innerHTML = 콜드브루기본값;
    콜드브루더보기버튼.innerHTML = "더보기";
  }
});

에스프레소더보기버튼.addEventListener("click", () => {
  let 상품이보여지는공간 = document.getElementsByClassName("상품들")[1];

  if (에스프레소더보기버튼.innerHTML === "더보기")
    // 버튼누르면 배열에서 값을 가져와서 보여줌.
    for (let i = 0; i < 에스프레소.length; i++) {
      상품이보여지는공간.innerHTML =
        상품이보여지는공간.innerHTML +
        `<div class='add'><img src=${에스프레소[i].img} /><h4>${에스프레소[i].name}</h4></div>`;
      에스프레소더보기버튼.innerHTML = "접기";
    }
  else {
    상품이보여지는공간.innerHTML = 에스프레소기본값;
    에스프레소더보기버튼.innerHTML = "더보기";
    console.log("asd");
  }
});
