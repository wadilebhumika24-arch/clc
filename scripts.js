function showMessage() {
alert(
"Welcome to CloudSphere! Your cloud computing journey starts here."
);
}

function serviceInfo(service) {
let message = "";

switch (service) {
    case "Cloud Storage":
        message =
            "Cloud Storage allows you to securely store, backup, and access files from anywhere.";
        break;

    case "Virtual Machines":
        message =
            "Virtual Machines provide scalable computing environments for running applications.";
        break;

    case "Cloud Database":
        message =
            "Cloud Databases provide reliable and scalable data storage for applications.";
        break;

    case "Cloud Security":
        message =
            "Cloud Security protects your applications, infrastructure, and data from threats.";
        break;

    default:
        message = "Cloud service information.";
}

alert(message);


}

// Display a welcome message when the page loads
window.addEventListener("load", function () {
console.log("CloudSphere application loaded successfully.");
});