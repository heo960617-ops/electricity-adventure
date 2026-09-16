// ====================
// 게임 상태
// ====================

let energyCount = 0;


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


// ====================
// NPC 대화
// ====================

let dialogueIndex = 0;


const dialogues = [

    "안녕하세요, 탐험가님!",

    "큰일이 생겼어요...",

    "곧 전기의 숲에서 빛 축제가 열리는데,",

    "숲에 전기가 제대로 공급되지 않고 있어요.",

    "빛 축제를 무사히 열려면 전기의 비밀을 찾아야 합니다!",

    "탐험가님이 숲 곳곳을 돌아다니며 도와주세요!"

];


// ====================
// 대화 시작
// ====================

function startDialogue() {

    dialogueIndex = 0;


    document
        .getElementById("dialogue-text")
        .textContent =
        dialogues[dialogueIndex];


    document
        .getElementById("dialogue-panel")
        .classList.remove("hidden");

}


function nextDialogue() {

    dialogueIndex++;

    if (dialogueIndex >= dialogues.length) {

        document
            .getElementById("dialogue-panel")
            .classList.add("hidden");

        document
            .getElementById("mission-panel")
            .classList.remove("hidden");

        return;

    }

    document
        .getElementById("dialogue-text")
        .textContent =
        dialogues[dialogueIndex];

}



// ====================
// 과학 미션 정답 확인
// ====================

function checkAnswer(answer) {

    const result =
        document.getElementById("mission-result");

    if (answer === 2) {

        result.textContent =
            "🎉 정답입니다! 연결된 회로에서 전기가 흐를 수 있습니다.";

        result.style.color = "#8ff3ff";

    }

    else {

        result.textContent =
            "❌ 다시 생각해보세요! 전기가 흐를 수 있는 길이 연결되어 있어야 합니다.";

        result.style.color = "#ffaaaa";

    }

}
