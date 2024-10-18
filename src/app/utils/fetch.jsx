export async function fetchGiveaway(id) {
  try {
    // استبدال URL بـ Proxy الخاص بـ Next.js
    const res = await fetch(`/api/giveaway/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch giveaway data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching giveaway data:", error.message);
    throw error; // إعادة طرح الخطأ لمزيد من المعالجة
  }
}

export async function fetchGiveaways() {
  try {
    // استخدام Proxy لتجنب CORS
    const res = await fetch('/api/giveaways');

    if (!res.ok) {
      throw new Error(`Failed to fetch giveaways data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching giveaways data:", error.message);
    throw error; // إعادة طرح الخطأ لمزيد من المعالجة
  }
}
