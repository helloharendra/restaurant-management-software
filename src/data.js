// Sample data for the UI demo. The complete project uses live APIs + database.
export const tables = [
  { id: 'T1', seats: 2, status: 'Occupied', guests: 2, since: 42, bill: 1840, waiter: 'Ravi', items: ['Paneer Tikka', 'Dal Makhani', 'Butter Naan ×2', 'Mojito ×2'] },
  { id: 'T2', seats: 4, status: 'Free' },
  { id: 'T3', seats: 4, status: 'Ordering', guests: 3, since: 6, bill: 0, waiter: 'Anita', items: [] },
  { id: 'T4', seats: 6, status: 'Occupied', guests: 6, since: 28, bill: 4620, waiter: 'Ravi', items: ['Chicken Biryani ×2', 'Mutton Rogan Josh', 'Garlic Naan ×4', 'Lassi ×6'] },
  { id: 'T5', seats: 2, status: 'Bill requested', guests: 2, since: 64, bill: 1290, waiter: 'Sameer', items: ['Masala Dosa ×2', 'Filter Coffee ×2'] },
  { id: 'T6', seats: 4, status: 'Reserved', time: '8:30 PM', name: 'Mr. Kapoor' },
  { id: 'T7', seats: 8, status: 'Occupied', guests: 7, since: 15, bill: 2380, waiter: 'Anita', items: ['Veg Platter', 'Soup ×7'] },
  { id: 'T8', seats: 2, status: 'Free' },
  { id: 'T9', seats: 4, status: 'Free' },
  { id: 'T10', seats: 4, status: 'Reserved', time: '9:00 PM', name: 'Ms. Fernandes' },
  { id: 'T11', seats: 6, status: 'Occupied', guests: 5, since: 51, bill: 3960, waiter: 'Sameer', items: ['Tandoori Platter', 'Kadai Paneer', 'Jeera Rice', 'Roti ×6'] },
  { id: 'T12', seats: 2, status: 'Free' },
]

export const tickets = [
  { id: 'KOT-218', table: 'T7', type: 'Dine-in', mins: 3, items: [{ n: 'Tomato Soup', q: 4 }, { n: 'Sweet Corn Soup', q: 3 }, { n: 'Veg Platter', q: 1, note: 'less spicy' }] },
  { id: 'KOT-217', table: 'Swiggy #4821', type: 'Delivery', mins: 7, items: [{ n: 'Chicken Biryani', q: 2 }, { n: 'Raita', q: 2 }] },
  { id: 'KOT-216', table: 'T4', type: 'Dine-in', mins: 12, items: [{ n: 'Mutton Rogan Josh', q: 1 }, { n: 'Garlic Naan', q: 4 }] },
  { id: 'KOT-215', table: 'Takeaway', type: 'Takeaway', mins: 16, items: [{ n: 'Paneer Butter Masala', q: 1 }, { n: 'Butter Naan', q: 3 }, { n: 'Gulab Jamun', q: 2 }] },
  { id: 'KOT-214', table: 'T11', type: 'Dine-in', mins: 21, items: [{ n: 'Kadai Paneer', q: 1 }, { n: 'Jeera Rice', q: 1, note: 'no ghee' }] },
]

export const hourly = [
  { label: '12pm', dine: 18, delivery: 12 }, { label: '1pm', dine: 34, delivery: 22 }, { label: '2pm', dine: 26, delivery: 17 },
  { label: '3pm', dine: 9, delivery: 8 }, { label: '4pm', dine: 6, delivery: 7 }, { label: '5pm', dine: 8, delivery: 11 },
  { label: '6pm', dine: 15, delivery: 19 }, { label: '7pm', dine: 31, delivery: 28 }, { label: '8pm', dine: 42, delivery: 36 },
]

export const channels = [
  { name: 'Dine-in', value: 52 }, { name: 'Swiggy', value: 21 }, { name: 'Zomato', value: 17 }, { name: 'Takeaway', value: 10 },
]

export const topDishes = [
  { name: 'Chicken Biryani', orders: 86, emoji: '🍛' }, { name: 'Paneer Tikka', orders: 64, emoji: '🧆' },
  { name: 'Butter Naan', orders: 212, emoji: '🫓' }, { name: 'Dal Makhani', orders: 58, emoji: '🥘' },
]
