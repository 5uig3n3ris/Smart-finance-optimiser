// Mock Data
const businesses = [
  {
    name: "Sunny Café",
    revenue: 500000,
    expenses: 350000,
    profit: 150000,
    category: "Food & Beverage"
  },
  {
    name: "Urban Threads",
    revenue: 700000,
    expenses: 400000,
    profit: 300000,
    category: "Retail"
  },
  {
    name: "Book Haven",
    revenue: 300000,
    expenses: 200000,
    profit: 100000,
    category: "Bookstore"
  },
  {
    name: "Fresh Bites",
    revenue: 450000,
    expenses: 300000,
    profit: 150000,
    category: "Food Delivery"
  }
];

// DOM Elements
const businessCards = document.getElementById('businessCards');
const insightCards = document.getElementById('insightCards');

// Generate Business Cards
businesses.forEach(biz => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${biz.name}</h3>
    <p><strong>Category:</strong> ${biz.category}</p>
    <p><strong>Revenue:</strong> ₹${biz.revenue.toLocaleString()}</p>
    <p><strong>Expenses:</strong> ₹${biz.expenses.toLocaleString()}</p>
    <p><strong>Profit:</strong> ₹${biz.profit.toLocaleString()}</p>
  `;
  businessCards.appendChild(card);
});

// Generate Insights
const insights = [
  "Cafés show strong profits but face seasonal dips.",
  "Retail margins improve with better supplier deals.",
  "Bookstores rely heavily on repeat customers and loyalty programs.",
  "Food Delivery thrives on cost control and fast delivery networks."
];

insights.forEach(text => {
  const insight = document.createElement('div');
  insight.className = 'insight-card';
  insight.innerText = text;
  insightCards.appendChild(insight);
});

// Chart Data
const labels = businesses.map(b => b.name);
const revenueData = businesses.map(b => b.revenue);
const expenseData = businesses.map(b => b.expenses);
const profitData = businesses.map(b => b.profit);

// Revenue Line Chart
new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Revenue',
      data: revenueData,
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderColor: 'rgba(76, 175, 80, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Revenue Overview'
      }
    }
  }
});

// Expenses Bar Chart
new Chart(document.getElementById('expenseChart'), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Expenses',
      data: expenseData,
      backgroundColor: 'rgba(244, 67, 54, 0.6)',
      borderColor: 'rgba(244, 67, 54, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Comparison'
      }
    }
  }
});

// Profit Radar Chart
new Chart(document.getElementById('profitRadarChart'), {
  type: 'radar',
  data: {
    labels,
    datasets: [{
      label: 'Profit',
      data: profitData,
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderColor: 'rgba(33, 150, 243, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Profit Radar'
      }
    }
  }
});
// Mock Data
const businesses = [
  {
    name: "Sunny Café",
    revenue: 500000,
    expenses: 350000,
    profit: 150000,
    category: "Food & Beverage"
  },
  {
    name: "Urban Threads",
    revenue: 700000,
    expenses: 400000,
    profit: 300000,
    category: "Retail"
  },
  {
    name: "Book Haven",
    revenue: 300000,
    expenses: 200000,
    profit: 100000,
    category: "Bookstore"
  },
  {
    name: "Fresh Bites",
    revenue: 450000,
    expenses: 300000,
    profit: 150000,
    category: "Food Delivery"
  }
];

// DOM Elements
const businessCards = document.getElementById('businessCards');
const insightCards = document.getElementById('insightCards');

// Generate Business Cards
businesses.forEach(biz => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${biz.name}</h3>
    <p><strong>Category:</strong> ${biz.category}</p>
    <p><strong>Revenue:</strong> ₹${biz.revenue.toLocaleString()}</p>
    <p><strong>Expenses:</strong> ₹${biz.expenses.toLocaleString()}</p>
    <p><strong>Profit:</strong> ₹${biz.profit.toLocaleString()}</p>
  `;
  businessCards.appendChild(card);
});

// Generate Insights
const insights = [
  "Cafés show strong profits but face seasonal dips.",
  "Retail margins improve with better supplier deals.",
  "Bookstores rely heavily on repeat customers and loyalty programs.",
  "Food Delivery thrives on cost control and fast delivery networks."
];

insights.forEach(text => {
  const insight = document.createElement('div');
  insight.className = 'insight-card';
  insight.innerText = text;
  insightCards.appendChild(insight);
});

// Chart Data
const labels = businesses.map(b => b.name);
const revenueData = businesses.map(b => b.revenue);
const expenseData = businesses.map(b => b.expenses);
const profitData = businesses.map(b => b.profit);

// Revenue Line Chart
new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Revenue',
      data: revenueData,
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderColor: 'rgba(76, 175, 80, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Revenue Overview'
      }
    }
  }
});

// Expenses Bar Chart
new Chart(document.getElementById('expenseChart'), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Expenses',
      data: expenseData,
      backgroundColor: 'rgba(244, 67, 54, 0.6)',
      borderColor: 'rgba(244, 67, 54, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Comparison'
      }
    }
  }
});

// Profit Radar Chart
new Chart(document.getElementById('profitRadarChart'), {
  type: 'radar',
  data: {
    labels,
    datasets: [{
      label: 'Profit',
      data: profitData,
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderColor: 'rgba(33, 150, 243, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Profit Radar'
      }
    }
  }
});
