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

function toggleKnockout() {

    const rounds = document.querySelector(".knockout-rounds");

    if (rounds.style.display === "flex") {
        rounds.style.display = "none";
    } else {
        rounds.style.display = "flex";
    }

}

function showMatches(matchId) {

    const selectedMatch = document.getElementById(matchId);

    // لو الماتشات ظاهرة بالفعل، نخفيها
    if (selectedMatch.style.display === "block") {
        selectedMatch.style.display = "none";
        return;
    }

    // نخفي كل الماتشات
    document.querySelectorAll(".matches-content").forEach(function(match) {
        match.style.display = "none";
    });

    // نظهر الماتشات المطلوبة
    selectedMatch.style.display = "block";
}