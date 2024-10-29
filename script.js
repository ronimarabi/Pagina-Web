window.addEventListener('load', function() {
    document.querySelector('header').classList.add('mostrar');
});

document.getElementById('form-calculadora').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const edad = parseFloat(document.getElementById('edad').value);
    const sexo = parseFloat(document.getElementById('sexo').value);
    const actividad = parseFloat(document.getElementById('actividad').value);
    const clima = parseFloat(document.getElementById('clima').value);
    const dieta = parseFloat(document.getElementById('dieta').value);

    if (isNaN(peso) || isNaN(edad) || peso <= 0 || edad <= 0) {
        alert("Por favor, introduce valores válidos para peso y edad.");
        return;
    }

    
    const aguaTotal = calcularAgua(peso, edad, sexo, actividad, clima, dieta);

    mostrarResultado(aguaTotal);
    mostrarRecomendacion(clima);
    actualizarGrafico(aguaTotal);
    mostrarTipDiario();
    desplazamientoAutomático();
});

function calcularAgua(peso, edad, sexo, actividad, clima, dieta) {
    const aguaBase = peso * 0.035;
    const factorEdad = edad < 30 ? 1 : edad < 55 ? 0.95 : 0.9;
    return aguaBase * actividad * clima * sexo * dieta * factorEdad;
}

function mostrarResultado(aguaTotal) {
    document.getElementById('resultado').textContent = `Necesitas ${aguaTotal.toFixed(2)} litros de agua al día.`;
}

function desplazamientoAutomático() {
    setTimeout(() => {
        document.getElementById("resultado").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
}

function mostrarRecomendacion(clima) {
    const recomendacion = document.getElementById('recomendacion');
    if (clima == 1.2) {
        recomendacion.textContent = "El clima es caluroso, asegúrate de mantenerte hidratado durante todo el día.";
    } else if (clima == 1) {
        recomendacion.textContent = "Clima moderado, mantén un consumo constante de agua.";
    } else {
        recomendacion.textContent = "Clima frío, no olvides beber agua incluso si no tienes sed.";
    }
}

let grafico = null; 

function actualizarGrafico(aguaTotal) {
    const ctx = document.getElementById('graficoAgua').getContext('2d');
    
    if (grafico) {
        grafico.destroy(); 
    }

    grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Recomendado', 'Consumido'],
            datasets: [{
                label: 'Litros de Agua',
                data: [aguaTotal, 0], 
                backgroundColor: ['#1e90ff', '#ffa500'],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function mostrarTipDiario() {
    const tips = [
        "Bebe un vaso de agua al despertar.",
        "Mantén siempre una botella de agua contigo.",
        "Bebe agua antes, durante y después de hacer ejercicio.",
        "Recuerda que algunas frutas tienen alto contenido de agua.",
        "Establece metas diarias de consumo de agua."
    ];
    const tipIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('tip').textContent = tips[tipIndex];
}
