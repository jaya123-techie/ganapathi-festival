const leaders = [
  { name: "R.Anil kumar", work: "Money Maintaining" },
  { name: "R.Venugopi", work: "Team Maintaining" },
  { name: "D.Narasaraju", work: "Lighting and Decoration arrangements" },
  { name: "M.Ajay kumar", work: "Sound system and mic setup" },
  { name: "Y.Rohit", work: "Cultural programs coordination" },
  { name: "Y.Srikanth", work: "Transport" },
  { name: "R.Teja", work: "Prasadam and water distribution" },
  { name: "R.Naveen", work: "Photography and video coverage" }
];

const container = document.getElementById("leaderContainer");

leaders.forEach(leader => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="leader-name">${leader.name}</div>
    <div class="leader-work">${leader.work}</div>
  `;
  container.appendChild(card);
});

