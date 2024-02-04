// Getting server URL from local storage
function getServerURL() {
    // If no server URL in local storage, prompt the user to enter it
    var serverURL = localStorage.getItem("serverURL");

    var defaultURL = "http://localhost:9283";

    if (!serverURL) {
        serverURL = window.prompt("Please enter the server URL:", defaultURL);
        // If url not start with http:// or https://, add it
        if (!serverURL.startsWith("http://") && !serverURL.startsWith("https://")) {
            serverURL = "http://" + serverURL;
        }
        // If url end with /, remove it
        if (serverURL.endsWith("/")) {
            serverURL = serverURL.slice(0, -1);
        }
        // If closed without entering anything, use the default URL
        if (!serverURL) {
            serverURL = defaultURL;
        }
        localStorage.setItem("serverURL", serverURL);
    }

    return serverURL;
}
