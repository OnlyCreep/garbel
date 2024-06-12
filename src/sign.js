function input_valid(elem) {
  const input = document.querySelectorAll(".sign_panel-user_form-input")[elem];
  const label = document.querySelectorAll(".sign_panel-user_form-label")[elem];
  if (input.value != "")
    label.style = `    transform: translateY(10px);
    font-size: 1rem;
    z-index: 1;`;
  else label.style = `;`;
}

function swipe(panel) {
  const elem = document.querySelectorAll(".sign_panel_follow");
  if (panel == "sign") {
    elem[0].style.transform = "translateY(-100%)";
    elem[1].style.transform = "translateY(-100%)";
  } else {
    elem[0].style.transform = "translateY(0)";
    elem[1].style.transform = "translateY(0)";
  }
}
