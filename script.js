const leaders = [
  { name: "R.Anil kumar", work: "Money Maintaining" },
  { name: "R.Venugopi", work: "Team Maintaining" },
  { name: "D.Narasaraju", work: "Lighting and Decoration arrangements" },
  { name: "M.Ajay kumar", work: "Sound system and mic setup" },
  { name: "Y.Rohit", work: "Cultural programs coordination" },
  { name: "Y.Srikanth", work: "Transport" },
  { name: "R.Teja", work: "Prasadam and water distribution" },
  { name: "R.punnayya", work: "Photography and video coverage" }
];

// Show leaders
const container = document.getElementById("leaderContainer");
leaders.forEach(leader => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="leader-name">${leader.name}</div>
    <div class="leader-work">${leader.work}</div>
    <div class="leader-payment">💰 Payment: ₹2000 Confirmed</div>
  `;
  container.appendChild(card);
});

// Rangoli Prize Distribution
const rangoliForm = document.getElementById("rangoliForm");
const rangoliList = document.getElementById("rangoliList");

rangoliForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("participantName").value.trim();
  const position = document.getElementById("position").value;

  let prize = "";

  if (position === "winner") prize = "🎁 Rice Cooker";
  else if (position === "runner") prize = "🎁 Iron Box";
  else prize = "🎁 Lunch Box";

  const li = document.createElement("li");
  li.textContent = `${name} - ${prize}`;
  rangoliList.appendChild(li);

  rangoliForm.reset();
});


// Registration logic

 const registrationForm = document.getElementById("registrationForm");
const participantList = document.getElementById("participantList");

// Load existing data
let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

// Display stored participants
registrations.forEach(displayParticipant);

// On form submit
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const village = document.getElementById("village").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (name && village && phone && interest && amount) {
    const registration = {
      Name: name,
      Village: village,
      Phone: phone,
      Interest: interest,
      Amount: amount,
    };

    registrations.push(registration);
    localStorage.setItem("registrations", JSON.stringify(registrations));
    displayParticipant(registration);
    registrationForm.reset();
  }
});

function displayParticipant(reg) {
  const li = document.createElement("li");
  li.textContent = `${reg.Name} (${reg.Village}) - ${reg.Phone} | Interest: ${reg.Interest} | Paid: ₹${reg.Amount}`;
  participantList.appendChild(li);
}

// ✅ Excel Download
function downloadExcel() {
  if (registrations.length === 0) {
    alert("No registrations to download!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(registrations);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

  XLSX.writeFile(workbook, "Ganapathi_Registrations.xlsx");
}



function downloadCSV() {
  let csvContent = "data:text/csv;charset=utf-8,Name,Village,Phone,Interest,Amount Paid\n";
  registrations.forEach(r => {
    csvContent += `${r.name},${r.village},${r.phone},${r.interest},${r.amount}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Ganapathi_Registrations.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


