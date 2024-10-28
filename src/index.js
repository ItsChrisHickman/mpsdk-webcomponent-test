import "@matterport/webcomponent";

let viewer = document.getElementById("mp");
let mpSdk;
viewer.addEventListener('mpSdkPlaying', evt => {
  mpSdk = evt.detail.mpSdk;
  console.log(mpSdk);

  const changeSpaceButton = document.createElement("button");
  const newContent = document.createTextNode("Change Space");
  changeSpaceButton.style.position = "absolute";
  changeSpaceButton.style.top = "50px";
  changeSpaceButton.style.left = "20px";
  changeSpaceButton.style.zIndex = "9";
  changeSpaceButton.appendChild(newContent);

  const theIframe = document.getElementById("mp");
  document.body.insertBefore(changeSpaceButton, theIframe);

  changeSpaceButton.addEventListener("click", async function () {
    console.log("Disconnect");
    await mpSdk.disconnect();
    viewer.remove();
    console.log("Create new element");
    viewer = document.createElement("matterport-viewer")
    console.log("Swap Model ID");
    viewer.setAttribute("m", "pZxkv5eVgWG");
  });
});
