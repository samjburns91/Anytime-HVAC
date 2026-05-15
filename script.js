function calculateCost() {
  const size = document.getElementById('homeSize').value;
  const system = document.getElementById('systemType').value;
  const result = document.getElementById('calcResult');

  if (!size || !system) {
    result.style.display = 'block';
    result.style.color = '#ff6b6b';
    result.textContent = '⚠️ Please select both your home size and system type.';
    return;
  }

  const baseCosts = {
    ac:       { small: [2500, 3500],  medium: [3500, 5000],  large: [5000, 7000],  xlarge: [7000, 10000] },
    furnace:  { small: [2000, 3000],  medium: [3000, 4500],  large: [4500, 6500],  xlarge: [6500, 9000]  },
    heatpump: { small: [3500, 5000],  medium: [5000, 7500],  large: [7500, 11000], xlarge: [11000, 16000]},
    combo:    { small: [6000, 8500],  medium: [8500, 12000], large: [12000, 17000],xlarge: [17000, 24000]}
  };

  const [low, high] = baseCosts[system][size];
  const formatter = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

  result.style.display = 'block';
  result.style.color = '#ffaa55';
  result.innerHTML = `
    Estimated Cost: ${formatter.format(low)} – ${formatter.format(high)}<br/>
    <span style="font-size:0.85rem; color:rgba(255,255,255,0.7); font-weight:400;">
      *Includes equipment & installation. Rebates may reduce your cost significantly.
    </span>
  `;
}