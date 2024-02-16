function showLMS() {
    hideAllSections();
    document.getElementById("lmsSection").style.display = "block";
}

function showGameBasedLearning() {
    hideAllSections();
    document.getElementById("gameBasedLearningSection").style.display = "block";
}

function showERPSystem() {
    hideAllSections();
    document.getElementById("erpSystemSection").style.display = "block";
}

function hideAllSections() {
    document.getElementById("lmsSection").style.display = "none";
    document.getElementById("gameBasedLearningSection").style.display = "none";
    document.getElementById("erpSystemSection").style.display = "none";
}
