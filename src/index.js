import "@matterport/webcomponent";

const container = document.getElementById("container");
let viewer = document.getElementById("mp");
let mpSdk;

const startApp = () => {
  viewer.addEventListener("mpSdkPlaying", handleLoadSDK);
};

const handleLoadSDK = (evt) => {
  mpSdk = evt.detail.mpSdk;
  console.log("SDK Loaded", mpSdk);

  const changeSpaceButton = document.createElement("button");
  const newContent = document.createTextNode("Change Space");
  changeSpaceButton.style.position = "absolute";
  changeSpaceButton.style.top = "50px";
  changeSpaceButton.style.left = "20px";
  changeSpaceButton.style.zIndex = "9";
  changeSpaceButton.appendChild(newContent);
  container.appendChild(changeSpaceButton);

  changeSpaceButton.addEventListener("click", async function () {
    console.log("Disconnect");
    mpSdk.disconnect();
    viewer.remove();

    console.log("Create new element");
    viewer = document.createElement("matterport-viewer");
    container.appendChild(viewer);

    viewer.setAttribute("application-key", "xtet8rr5t5i42rwanintd7rzb");
    console.log("Swap Model ID");
    viewer.setAttribute("m", "pZxkv5eVgWG");

    console.log("Remove Space Button");
    changeSpaceButton.remove();

    console.log("Recursive Function");
    viewer.removeEventListener("mpSdkPlaying", handleLoadSDK);
    startApp();
  });
};

startApp();
