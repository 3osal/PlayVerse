import axios from 'axios';

export async function fetchGiveaway(id) {
  try {
    const res = await axios.get(`/api/giveaway/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching giveaway data:", error);
    throw error;
  }
}

export async function fetchGiveaways() {
  try {
    const res = await axios.get('/api/giveaways');
    return res.data;
  } catch (error) {
    console.error("Error fetching giveaways data:", error);
    throw error;
  }
}
