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

// phonepay 

  const qrImage = document.querySelector('.qr-code');
  qrImage.addEventListener('click', () => {
    alert("Open your PhonePe app and scan this QR to pay ₹2000. Thank you!");
  });

// registration process

const form = document.getElementById('registrationForm');
const tableBody = document.querySelector('#registrationTable tbody');
let registrations = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;
  const transactionId = document.getElementById('transactionId').value;
  const upi = document.getElementById('upi').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>₹${amount}</td>
    <td>${transactionId}</td>
    <td>${upi}</td>
  `;
  tableBody.appendChild(row);

  registrations.push({
    Name: name,
    Phone: phone,
    Amount: `₹${amount}`,
    TransactionID: transactionId,
    UPI: upi
  });

  form.reset();
});

function downloadExcel() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(registrations);
  XLSX.utils.book_append_sheet(wb, ws, "Participants");
  XLSX.writeFile(wb, "Ganapathi_Event_Registrations.xlsx");
}