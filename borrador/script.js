function idRandom(limite) {
    return Math.floor(Math.random() * limite);
}

// Guardamos un numero aleatorio dentro de una variable
let id = idRandom(100)

fetch(`https://picsum.photos/id/${id}/info`)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        // Elementos html
        let imgContainer = document.getElementById("imagenContainer")
        let btnContainer = document.getElementById("btnContainer")
        let img = document.createElement('img')
        let btncontent = document.createElement('a')

        // Modificamos el atributo src de la etiqueta img para
        // que sea el de la imagen obtenida
        img.src = `${data.download_url}`
        img.width = 600

        // Características del boton
        btncontent.textContent = "Mostrar Original"
        btncontent.href = data.download_url
        
        btncontent.classList.add('btn', 'btn-primary')

        // Agregamos la imagen al documento
        imgContainer.appendChild(img)
        btnContainer.appendChild(btncontent)
    })
