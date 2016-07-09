safari.self.addEventListener("message", handleCommandMessage, false);
function handleCommandMessage(msg) {
    if (msg.name === "getUserSelection") {
        var queryTerm = window.getSelection() + "";
        // console.log("Searching Urban Dictionary for: `" + queryTerm + "`");
        safari.self.tab.dispatchMessage("userSelectedText", queryTerm);
    }
}
