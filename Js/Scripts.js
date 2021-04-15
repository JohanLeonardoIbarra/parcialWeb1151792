function todasLasNoticias() {
    fetch('https://raw.githubusercontent.com/carlosreneas/endpoints/main/noticias.json')
        .then(response => response.json())
        .then(datos => {
            localStorage.setItem('TNoticias', JSON.stringify(datos))
        })
}

function categoriaDeporte(){
    fetch('https://raw.githubusercontent.com/carlosreneas/endpoints/main/categoria_deporte.json')
    .then(response => response.json())
    .then(datos => {
        localStorage.setItem('Deportes', JSON.stringify(datos))
    })
}

function categoriaTecnologia(){
    fetch('https://raw.githubusercontent.com/carlosreneas/endpoints/main/categoria_tecnologia.json')
    .then(response => response.json())
    .then(datos => {
        localStorage.setItem('Tecnologia', JSON.stringify(datos))
    })
}

function inicio(){ 
    todasLasNoticias()
    datos = localStorage.getItem('TNoticias')
    datos = JSON.parse(datos)

    const imagenMarco = document.getElementById('imagen')
    const imagen = document.createElement('img')
    imagen.setAttribute('src', datos[0].img)
    imagenMarco.appendChild(imagen)
    const nUno = document.getElementById('noticiaUno')
    for (let dato of datos){
        if(dato.id == 4){
            return
        }
        const div = document.createElement('div')
        const titulo = document.createElement('h2')
        titulo.textContent = dato.titulo+"-"+dato.categoria+"-"+dato.fecha
        div.appendChild(titulo)
        const descripcion = document.createElement('p')
        descripcion.textContent = dato.descripcion
        const verMas = document.createElement('a')
        verMas.textContent = "Ver Mas"
        verMas.setAttribute("class","noticia-"+dato.id)
        div.appendChild(descripcion)
        div.appendChild(verMas)
        nUno.appendChild(div)
    };
}

function deportes(){
    categoriaDeporte()
    datos = localStorage.getItem('Deportes')
    datos = JSON.parse(datos)

    const deportes = document.getElementById('deportes')
    const titulo = document.createElement("h3")
    titulo.textContent = "Deportes"
    deportes.appendChild(titulo)
    for(let dato of datos){
        const div = document.createElement('div')
        const titulo = document.createElement('label')
        titulo.textContent = dato.titulo
        div.appendChild(titulo)
        const hr = document.createElement('hr')
        div.appendChild(hr)
        deportes.appendChild(div)
    }
}

function tecnologia(){
    categoriaTecnologia()
    datos = localStorage.getItem('Tecnologia')
    datos = JSON.parse(datos)
    const tecnologia = document.getElementById('tecnologia')
    const titulo = document.createElement("h3")
    titulo.textContent = "Tecnologia"
    tecnologia.appendChild(titulo)
    for(let dato of datos){
        const div = document.createElement('div')
        const titulo = document.createElement('label')
        titulo.textContent = dato.titulo
        div.appendChild(titulo)
        const hr = document.createElement('hr')
        div.appendChild(hr)
        tecnologia.appendChild(div)
    }
}

inicio()
deportes()
tecnologia()