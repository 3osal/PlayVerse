export async function fetchGiveaway(id) {
  try {
    const res = await fetch(`/api/giveaway/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching giveaway data:", error);
    throw error;
  }
}

export async function fetchGiveaways() {
  try {
    const res = await fetch('/api/giveaways');

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching giveaways data:", error);
    throw error;
  }
}
