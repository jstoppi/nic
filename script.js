document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const frequency = parseFloat(document.getElementById('frequency').value);
    const volume = parseFloat(document.getElementById('volume').value);
    let concentration = document.getElementById('concentration').value;

    if (concentration.includes('%')) {
        concentration = parseFloat(concentration.replace('%', '')) * 10;
    } else {
        concentration = parseFloat(concentration);
    }

    const juicePerDayMl = volume / frequency;
    const cigPerDayMgAvg = Math.round(juicePerDayMl * concentration * 0.45 / 1.5);
    const cigPerDayMgHigh = Math.round(juicePerDayMl * concentration * 0.7 / 1.5);
    const cigPerDayMgLow = Math.round(juicePerDayMl * concentration * 0.2 / 1.5);

    document.getElementById('result').innerText = `Your daily nicotine intake is equivalent to smoking between ${cigPerDayMgLow} and ${cigPerDayMgHigh} and most likely around ${cigPerDayMgAvg} cigarettes per day.`;
});
