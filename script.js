// Leader List
const leaders = [
  { name: "R.Anil Kumar", work: "Money Maintaining" },
  { name: "R.Venugopi", work: "Team Maintaining" },
  { name: "D.Narasaraju", work: "Lighting and Decoration" },
  { name: "M.Ajay Kumar", work: "Sound & Mic Setup" },
  { name: "Y.Rohit", work: "Cultural Programs" },
  { name: "Y.Srikanth", work: "Transport" },
  { name: "R.Teja", work: "Prasadam & Water" },
  { name: "R.Punnayya", work: "Photography & Video" }
];

// Display Leaders
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

// Registration logic
const registrationForm = document.getElementById("registrationForm");
const participantList = document.getElementById("participantList");

let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
registrations.forEach(displayParticipant);

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const village = document.getElementById("village").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (name && village && phone && interest && amount) {
    const reg = {
      Name: name,
      Village: village,
      Phone: phone,
      Interest: interest,
      Amount: amount
    };

    registrations.push(reg);
    localStorage.setItem("registrations", JSON.stringify(registrations));
    displayParticipant(reg);
    registrationForm.reset();
  }
});

function displayParticipant(reg) {
  const li = document.createElement("li");
  li.textContent = `${reg.Name} (${reg.Village}) - ${reg.Phone} | ${reg.Interest} | ₹${reg.Amount}`;
  participantList.appendChild(li);
}

function downloadExcel() {
  if (registrations.length === 0) {
    alert("No registrations found!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(registrations);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Ganapathi_Registrations");
  XLSX.writeFile(workbook, "Ganapathi_Registrations.xlsx");
}
