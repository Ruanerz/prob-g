// Función robusta para formatear cobre a oro/plata/cobre (soporta negativos y redondeo)
function formatGold(value) {
  const rounded = Math.round(value);
  const isNegative = rounded < 0;
  const absValue = Math.abs(rounded);

  const gold = Math.floor(absValue / 10000);
  const silver = Math.floor((absValue % 10000) / 100);
  const copper = absValue % 100;

  let parts = [];
  if (gold > 0) {
    parts.push(`${gold}g`);
    parts.push(`${silver.toString().padStart(2, '0')}s`);
    parts.push(`${copper.toString().padStart(2, '0')}c`);
  } else if (silver > 0) {
    parts.push(`${silver}s`);
    parts.push(`${copper.toString().padStart(2, '0')}c`);
  } else {
    parts.push(`${copper}c`);
  }

  let result = parts.join(' ');
  if (isNegative) result = '-' + result;
  return result.trim();
}

// Devuelve la misma cantidad pero con etiquetas span de colores
function formatGoldColored(value) {
  const rounded = Math.round(value);
  const isNegative = rounded < 0;
  const absValue = Math.abs(rounded);

  const gold = Math.floor(absValue / 10000);
  const silver = Math.floor((absValue % 10000) / 100);
  const copper = absValue % 100;

  let result = '';
  if (gold > 0) {
    result += `<span class="gold">${gold}<img src="img/Gold_coin.png" alt="Gold" width="12"></span>` +
              `<span class="silver">${silver.toString().padStart(2, '0')}<img src="img/Silver_coin.png" alt="Silver" width="12"></span>` +
              `<span class="copper">${copper.toString().padStart(2, '0')}<img src="img/Copper_coin.png" alt="Copper" width="12"></span>`;
  } else if (silver > 0) {
    result += `<span class="silver">${silver}<img src="img/Silver_coin.png" alt="Silver" width="12"></span> ` +
              `<span class="copper">${copper.toString().padStart(2, '0')}<img src="img/Copper_coin.png" alt="Copper" width="12"></span>`;
  } else {
    result += `<span class="copper">${copper.toString().padStart(2, '0')}<img src="img/Copper_coin.png" alt="Copper" width="12"></span>`;
  }

  if (isNegative) result = '-' + result.trim();
  return result.trim();
}

// Hacer disponible globalmente para todos los scripts
window.formatGold = formatGold;
window.formatGoldColored = formatGoldColored;

// Exportar para uso en Node.js si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { formatGold, formatGoldColored };
}
