window.addEventListener('load', function() {
    document.querySelector('header').classList.add('mostrar');
    mostrarTipDiario();
});

const detallesContenido = {
    salud: {
        titulo: "Agua y Salud",
        descripcion: "El agua es fundamental para el cuerpo humano. Desempeña un papel vital en la regulación de la temperatura, eliminación de desechos y absorción de nutrientes.",
        imagen: "salud.jpg",
        subtemas: [
            { titulo: "Hidratación", descripcion: "Mantenerse hidratado es crucial para el funcionamiento óptimo del cuerpo." },
            { titulo: "Digestión", descripcion: "El agua ayuda a descomponer los alimentos y facilita la digestión." }
        ]
    },
    ambiental: {
        titulo: "Agua y Medioambiente",
        descripcion: "El agua sostiene la biodiversidad y es esencial para el funcionamiento de los ecosistemas.",
        imagen: "medioambiente.jpg",
        subtemas: [
            { titulo: "Ecosistemas Acuáticos", descripcion: "Ríos y océanos albergan una gran variedad de especies." },
            { titulo: "Cambio Climático", descripcion: "La disponibilidad de agua está afectada por el cambio climático." }
        ]
    },
    hidratacion: {
        titulo: "Importancia de la Hidratación",
        descripcion: "Mantenerse hidratado es crucial para la salud y el bienestar.",
        imagen: "hidratacion.jpg",
        subtemas: [
            { titulo: "Hidratación", descripcion: "Beber suficiente agua es esencial para el buen funcionamiento del organismo." }
        ]
    },
    // Agrega más temas según sea necesario
};

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function mostrarInfo(tipo) {
    let infoTexto = '';
    let infoImagen = '';

    switch(tipo) {
        case 'salud':
            infoTexto = '<p>El agua es esencial para mantener una buena salud. Ayuda en la digestión, la circulación y la regulación de la temperatura corporal.</p>';
            infoImagen = '<img src="https://www.fundacionaquae.org/wp-content/uploads/2019/06/beneficios-del-agua-e1639564332320-1024x648.jpg" alt="Beneficios para la Salud">';
            break;
        case 'ambiental':
            infoTexto = '<p>El agua es crucial para el medio ambiente, ya que sustenta la vida de muchas especies y regula los ecosistemas.</p>';
            infoImagen = '<img src="https://www.hidrolab.com/wp-content/uploads/2021/08/shutterstock_1017020353-1280x914.jpg" alt="Impacto Ambiental">';
            break;
        case 'hidratacion':
            infoTexto = '<p>La hidratación adecuada es vital para el funcionamiento óptimo del cuerpo humano y el bienestar general.</p>';
            infoImagen = '<img src="https://www.clinicasanmiguel.es/wp-content/uploads/2022/07/deportista_bebe_agua.jpg" alt="Importancia de la Hidratación">';
            break;
        case 'cultura':
            infoTexto = '<p>El agua tiene un papel fundamental en muchas culturas, siendo un símbolo de vida y purificación.</p>';
            infoImagen = '<img src="https://cnpm.mx/wp-content/uploads/2017/06/huellahidrica.jpg" alt="Importancia Cultural">';
            break;
        case 'economica':
            infoTexto = '<p>El agua es un recurso vital para la economía, influyendo en la agricultura, la industria y el comercio.</p>';
            infoImagen = '<img src="https://serlial.es/wp-content/uploads/2017/05/agua-economia.jpg" alt="Importancia Económica">';
            break;
        case 'saludMental':
            infoTexto = '<p>La hidratación puede afectar el estado de ánimo y la salud mental, ayudando a mejorar la concentración y reducir el estrés.</p>';
            infoImagen = '<img src="https://blog.aguasplendor.com.ec/wp-content/uploads/2023/10/Portada-blog-2.jpg" alt="Salud Mental">';
            break;
        case 'estiloVida':
            infoTexto = '<p>Adoptar un estilo de vida sostenible incluye el uso responsable del agua para preservar este recurso vital.</p>';
            infoImagen = '<img src="https://canalsalud.imq.es/hubfs/Imported_Blog_Media/beneficios-beber-agua-salud-1.jpg" alt="Estilo de Vida Sostenible">';
            break;
        case 'nutricion':
            infoTexto = '<p>El agua es un componente esencial de una dieta saludable, ya que ayuda a la digestión y la absorción de nutrientes.</p>';
            infoImagen = '<img src="https://numsgt.com/wp-content/uploads/2023/04/verduras-frutas-cayendo-al-agua-sobre-fondo-color.jpeg" alt="Nutrición y Agua">';
            break;
        case 'deporte':
            infoTexto = '<p>La hidratación adecuada es fundamental para el rendimiento deportivo, ya que afecta la resistencia y la recuperación.</p>';
            infoImagen = '<img src="https://static.saludenvidiable.com/wp-content/uploads/2016/08/Sin-t%C3%ADtulo-1.jpg" alt="Agua en el Deporte">';
            break;
    }

    document.getElementById('info-descripcion').innerHTML = infoTexto;
    document.getElementById('info-imagen').innerHTML = infoImagen;

    scrollToElement('info-texto');
}

function calcularConsumoAgua(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const edad = parseFloat(document.getElementById('edad').value);
    const sexo = parseFloat(document.getElementById('sexo').value);
    const actividad = parseFloat(document.getElementById('actividad').value);
    const clima = parseFloat(document.getElementById('clima').value);
    const dieta = parseFloat(document.getElementById('dieta').value);

    // Validación de peso y edad para evitar números negativos o irreales
    if (isNaN(peso) || peso <= 0 || peso > 300) {
        alert("Por favor, ingresa un peso válido entre 1 y 300 kg.");
        return;
    }

    if (isNaN(edad) || edad <= 0 || edad > 120) {
        alert("Por favor, ingresa una edad válida entre 1 y 120 años.");
        return;
    }

    // Validación de otros campos para evitar valores no numéricos
    if (isNaN(sexo) || isNaN(actividad) || isNaN(clima) || isNaN(dieta)) {
        alert("Por favor, ingresa valores válidos en todos los campos.");
        return;
    }

    const consumoAgua = (peso * 0.03) * sexo * actividad * clima * dieta;
    document.getElementById('resultado').textContent = `Debes consumir aproximadamente ${consumoAgua.toFixed(2)} litros de agua al día.`;

    // Muestra el contenedor del gráfico
    document.getElementById('chartContainer').style.display = 'block';

    // Crea el gráfico con el valor calculado
    const ctx = document.getElementById('graficoAgua').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Consumo Diario'],
            datasets: [{
                label: 'Litros de Agua',
                data: [consumoAgua.toFixed(2)],
                backgroundColor: ['#1e90ff']
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

    scrollToElement('chartContainer');
}

function generarGrafico(consumoAgua) {
    const ctx = document.getElementById('graficoAgua').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Consumo Diario de Agua'],
            datasets: [{
                label: 'Litros',
                data: [consumoAgua],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
        "Beber suficiente agua al día ayuda a mantener tus niveles de energía.",
        "El agua es esencial para la salud de la piel.",
        "Mantente hidratado para favorecer una buena digestión."
    ];
    document.getElementById('tip').innerText = tips[Math.floor(Math.random() * tips.length)];
}

let metas = [];

function agregarMeta(event) {
    event.preventDefault();
    const metaInput = document.getElementById('meta');
    const nuevaMeta = metaInput.value;
    if (nuevaMeta) {
        metas.push(nuevaMeta);
        metaInput.value = '';
        mostrarMetas();
    }
}

function mostrarMetas() {
    const listaMetas = document.getElementById('lista-metas');
    listaMetas.innerHTML = ''; // Limpiar la lista actual

    metas.forEach((meta, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${meta} ml</span>
            <button onclick="editarMeta(${index})">Editar</button>
            <button onclick="eliminarMeta(${index})">Eliminar</button>
        `;
        listaMetas.appendChild(li);
    });
}

function editarMeta(index) {
    const nuevaMeta = prompt("Edita tu meta (ml):", metas[index]);
    if (nuevaMeta) {
        metas[index] = nuevaMeta;
        mostrarMetas();
    }
}

function eliminarMeta(index) {
    metas.splice(index, 1);
    mostrarMetas();
}
