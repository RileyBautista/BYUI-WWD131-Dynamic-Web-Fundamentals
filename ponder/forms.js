
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

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

  console.log(event.target.email.value)

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  if(selectedCampuses.length == 0) {
        output.textContent = "Please select at least one campus.";
        return;
  }

  
  if(travelRange.value === "many" && selectedCampuses.length < 2) {
        output.textContent = "Select atleast 2 campuses."
        return;
  }


  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a date after today.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          