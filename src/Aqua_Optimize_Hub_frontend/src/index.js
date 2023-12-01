import { Aqua_Optimize_Hub_backend } from "../../declarations/Aqua_Optimize_Hub_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await Aqua_Optimize_Hub_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
async function registerUser() {
  const userId = document.getElementById('userId').value;
  const name = document.getElementById('name').value;
  const residence = document.getElementById('residence').value;

  // Call Motoko function to register user
  await WaterMonitoringApp.registerUser(userId, name, residence);
  alert('User registered successfully!');
}

async function recordWaterUsage() {
  const userId = document.getElementById('usageUserId').value;
  const consumption = document.getElementById('consumption').value;

  // Call Motoko function to record water usage
  await WaterMonitoringApp.recordWaterUsage(userId, parseInt(consumption, 10));
  alert('Water usage recorded successfully!');
}

async function getRealTimeWaterUsage() {
  const userId = document.getElementById('realTimeUserId').value;

  // Call Motoko function to get real-time water usage
  const realTimeUsage = await WaterMonitoringApp.getRealTimeWaterUsage(userId);

  // Display real-time usage in the HTML
  const realTimeUsageList = document.getElementById('realTimeUsageList');
  realTimeUsageList.innerHTML = realTimeUsage.map(usage => `<li>${usage.consumption} units at ${new Date(usage.timestamp * 1000)}</li>`).join('');
}

async function analyzeWaterConsumption() {
  const userId = document.getElementById('analysisUserId').value;

  // Call Motoko function to analyze water consumption
  const totalConsumption = await WaterMonitoringApp.analyzeWaterConsumption(userId);

  // Display analysis result in the HTML
  const analysisResult = document.getElementById('analysisResult');
  analysisResult.innerText = `Total water consumption: ${totalConsumption} units`;
}
