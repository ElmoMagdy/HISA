const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function() {

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

});

function showTournament(tournament) {

    const content = document.getElementById("tournament-content");

    if (tournament === "worldcup") {

        content.innerHTML = `
            <div class="stage-buttons">
                <button onclick="showStage('groups')">
                    Group Stage
                </button>

                <button onclick="showStage('knockout')">
                    Knockout Stage
                </button>
            </div>
        `;

    }

    else if (tournament === "copa") {

        content.innerHTML = `
            <div class="stage-buttons">
                <button onclick="showStage('copa-knockout')">
                    Knockout Stage
                </button>
            </div>
        `;

    }

    else if (tournament === "champions") {

        content.innerHTML = `
            <div class="stage-buttons">
                <button onclick="showStage('champions-groups')">
                    Group Stage
                </button>

                <button onclick="showStage('champions-knockout')">
                    Knockout Stage
                </button>
            </div>
        `;

    }
}
function showTournament(tournament) {

    const selected = document.getElementById(tournament + "-options");

    // لو البوكسين ظاهرين، نخفيهم
    if (selected.style.display === "block") {
        selected.style.display = "none";
        return;
    }

    // إخفاء كل البطولات
    document.getElementById("champions-options").style.display = "none";
    document.getElementById("worldcup-options").style.display = "none";

    // إظهار البطولة المختارة
    selected.style.display = "block";
}