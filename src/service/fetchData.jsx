export async function fetchData() {
  try {
    const response = await fetch("/data/data.json");
    if (!response.ok) {
      throw new Error(`Erreur HTML : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erreur lors de l'appel du fatch data :", error);
  }
}
