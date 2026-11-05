const form = document.querySelector("#eventTicketForm");
const personType = document.querySelector("#personType");
const iNumberContainer = document.querySelector("#i-number");
const iNumberInput = document.querySelector("#iNumber");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

function handlePersonTypeChange() {
  const selectedType = personType.value;

  if (selectedType === "student") {
    iNumberContainer.removeAttribute("hidden");
    iNumberInput.setAttribute("required", "true");

    notesContainer.setAttribute("hidden", "");
  } else if (selectedType === "guest") {
    notesContainer.removeAttribute("hidden");

    iNumberContainer.setAttribute("hidden", "");
    iNumberInput.removeAttribute("required");
  } else {
    iNumberContainer.setAttribute("hidden", "");
    iNumberInput.removeAttribute("required");

    notesContainer.setAttribute("hidden", "");
  }
}

personType.addEventListener("change", handlePersonTypeChange);

handlePersonTypeChange();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const availableDate = form.availableDate ? form.availableDate.value : null;
  const numberLength = iNumberInput.value.trim().length;
  const eventCode = notes.value.trim();
  if(numberLength<9 && personType.value === "student"){
    output.textContent = "Please enter a Number at least 9 digits.";
    return;
  }
  if(eventCode != "EVENT131"&&personType.value === "guest"){
    output.textContent = "Please enter the correct event code.";
    return;
  }
  if (availableDate && isPastDate(availableDate)) {
    output.textContent = "Please choose a date after today.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  `;

  form.reset();
  
  // Reset field visibility back to default state after form reset
  handlePersonTypeChange();
});