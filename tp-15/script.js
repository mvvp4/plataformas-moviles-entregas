for(let i=0;i<=151;i++){
fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        // Elementos html
        let btnContainer = document.getElementById("PokeList")
        let li = document.createElement('li')
        let logo=document.createElement('img')
        let img = document.createElement('img')
        let btncontent = document.createElement('a')
        let span1= document.createElement('span')
        let span2= document.createElement('span')

        // Modificamos el atributo src de la etiqueta img para
        // que sea el de la imagen obtenida
        logo.id= 'iconball'
        logo.src = "game_16025506.png"
        img.src = `${data.sprites.front_default}`
        img.width = 600
        //caracteristicas de los textos dentro del boton
        span1.id= 'order'
        span2.id= 'name'
        span1.textContent = data.order
        let name= data.name.toUpperCase()
        span2.textContent = name
        // Características del boton
        btncontent.classList.add('btn','btn-light')
        btncontent.href = data.download_url
        

        // Agregamos la imagen al documento
        btnContainer.appendChild(li)
        li.appendChild(logo)
        li.appendChild(btncontent)
        btncontent.appendChild(span1)
        btncontent.appendChild(span2)
    })}