// Populate the language dropdown
function mirrorTextInput(value) {
    document.getElementById('mirrorText').innerText = value;
    document.getElementById('mirrorText').style.color = '#006400'; // Deep green color
}
const languageSelect = document.getElementById("languageSelect");

const languages = [
    { code: "en-US", name: "English (US)" },
    { code: "es-ES", name: "Spanish (Spain)" },
    { code: "te-IN", name: "Telugu" },
    { code: "hi-IN", name: "Hindi" },
    { code: "mr-IN", name: "Marathi" },
    { code: "gu-IN", name: "Gujarati" },
    { code: "ta-IN", name: "Tamil" },
    { code: "bn-IN", name: "Bangla" },
    { code: "ur-PK", name: "Urdu" },
    { code: "af-ZA", name: "Africaans" },
    { code: "ar-SA", name: "Arabic" },
    { code: "de-DE", name: "German" },
    { code: "ja-JP", name: "Japanese" },
    { code: "ga-IE", name: "Irish" },
    { code: "it-IT", name: "Italian" },
    { code: "zh-CN", name: "Chinese" },
    { code: "yue-Hant-HK", name: "Hong Kong" },
    { code: "zh-TW", name: "Taiwan" },
    { code: "el-GR", name: "Greek" },
    { code: "fr-FR", name: "French" },
    { code: "ko-KR", name: "Korean" },
    { code: "kn-IN", name: "Kannada" },
    { code: "ml-IN", name: "Malayalam" },
    { code: "pa-IN", name: "Punjabi" },
    // Add more languages...
];

languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.text = lang.name;
    languageSelect.appendChild(option);
});

// Function to speak the entered text
function speakText() {
    const textInput = document.getElementById("textInput").value;
    const languageSelect = document.getElementById("languageSelect").value;
    
    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.lang = languageSelect;
    
    speechSynthesis.speak(utterance);
}
function toggleAbout() {
    var aboutContent = document.getElementById("aboutContent");
    if (aboutContent.style.display === "block") {
        aboutContent.style.display = "none";
    } else {
        aboutContent.style.display = "block";
    }
}