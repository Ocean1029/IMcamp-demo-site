document.getElementById("dog-btn").addEventListener("click", async () => {
  const container = document.getElementById("dog-container");
  container.textContent = "Loading...";
  container.style.color = "#ccc";

  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    container.textContent = "";
    container.style.color = "";

    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "Random dog";
    container.appendChild(img);
  } catch {
    container.textContent = "Failed to fetch dog image";
    container.style.color = "#f66";
  }
});
