const charval = document.getElementById("textarea");


charval.addEventListener("keyup", () => updateCounter());
const copyText = () => {
    charval.select();
    charval.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charval.value);
    alert("text copied!!")
  };