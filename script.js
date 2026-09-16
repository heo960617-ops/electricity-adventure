// ====================
// 이름 입력 화면 보여주기
// ====================

function showNameScreen() {

    document
        .getElementById("start-screen")
        .classList.add("hidden");

    document
        .getElementById("name-screen")
        .classList.remove("hidden");

}


// ====================
// 게임 시작
// ====================

function startAdventure() {

    const input =
        document.getElementById("name-input");

    const name =
        input.value.trim();


    // 이름을 입력하지 않았을 경우

    if (name === "") {

        alert("탐험가의 이름을 입력해주세요!");

        return;
    }


    // 이름 표시

    document
        .getElementById("player-name")
        .textContent =
        "🔎 탐험가 " + name;


    // 이름 입력 화면 숨기기

    document
        .getElementById("name-screen")
        .classList.add("hidden");


    // 게임 화면 보여주기

    document
        .getElementById("game-screen")
        .classList.remove("hidden");

}


// ====================
// 장소 클릭
// ====================

function openLocation(locationName) {

    const panel =
        document.getElementById("location-panel");

    const title =
        document.getElementById("location-title");

    const description =
        document.getElementById("location-description");


    title.textContent =
        "📍 " + locationName;


    if (locationName === "빛의 마을") {

        description.textContent =
            "빛의 마을입니다. 이곳에서 빛 축제를 준비하고 있습니다.";

    }

    else if (locationName === "전지 마을") {

        description.textContent =
            "전지 마을입니다. 전기를 공급하는 곳입니다.";

    }

    else if (locationName === "회로 마을") {

        description.textContent =
            "회로 마을입니다. 전기가 이동하는 길을 연구하는 곳입니다.";

    }


    panel.classList.remove("hidden");

}



// ====================
// 장소 설명창 닫기
// ====================

function closeLocation() {

    document
        .getElementById("location-panel")
        .classList.add("hidden");

}
