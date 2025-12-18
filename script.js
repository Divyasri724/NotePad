const noteBox = document.getElementById("noteInput");
const storeBtn = document.getElementById("storeBtn");
const resetBtn = document.getElementById("resetBtn");
const showBtn = document.getElementById("showBtn");

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("user_notes");
    if (storedData) {
        noteBox.value = storedData;
    }
});

storeBtn.onclick = () => {
    localStorage.setItem("user_notes", noteBox.value);
    alert("Your note has been saved.");
};

resetBtn.onclick = () => {
    localStorage.removeItem("user_notes");
    noteBox.value = "";
    alert("All notes removed.");
};

showBtn.onclick = () => {
    const data = localStorage.getItem("user_notes");
    alert(data ? `Saved Notes:\n\n${data}` : "No saved notes available.");
};
