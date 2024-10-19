// دالة لجلب بيانات مسابقة واحدة
export async function fetchGiveaway(id) {
  try {
    // استبدال URL بـ Proxy الخاص بـ Next.js
    const res = await fetch(`/api/giveaway/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // إضافة التوثيق هنا إذا كان مطلوباً
        // 'Authorization': 'Bearer YOUR_TOKEN'
      }
    });

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

// دالة لجلب جميع المسابقات
export async function fetchGiveaways() {
  try {
    // استخدام Proxy لتجنب CORS
    const res = await fetch('/api/giveaways', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // إضافة التوثيق إذا كان مطلوباً
        // 'Authorization': 'Bearer YOUR_TOKEN'
      }
    });

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
