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
