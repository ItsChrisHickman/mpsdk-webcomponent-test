import "@matterport/webcomponent";

const viewer = document.getElementById("mp");
viewer.addEventListener('mpSdkPlaying', evt => {
  const mpSdk = evt.detail.mpSdk;
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
    mpSdk.disconnect();
    console.log("Swap Model ID");
    document.getElementById("mp").setAttribute("m", "pZxkv5eVgWG");
  });
});
