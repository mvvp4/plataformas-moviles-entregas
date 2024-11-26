for (let i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Elementos HTML
            let btnContainer = document.getElementById("PokeList");
            let li = document.createElement('li');
            let logo = document.createElement('img');
            let img = document.createElement('img');
            let btncontent = document.createElement('a');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');

            // Modificamos el atributo src de la etiqueta img
            logo.id = 'iconball';
            logo.src = "game_16025506.png";
            img.src = `${data.sprites.front_default}`;
            img.width = 600;

            // Características de los textos dentro del botón
            span1.id = 'order';
            span2.id = 'name';
            span1.textContent = data.order;
            let name = data.name.toUpperCase();
            span2.textContent = name;

            // Características del botón
            btncontent.classList.add('btn', 'btn-light');
            btncontent.href = data.download_url;

            // Agregar la imagen al documento
            btnContainer.appendChild(li);
            li.appendChild(logo);
            li.appendChild(btncontent);
            btncontent.appendChild(span1);
            btncontent.appendChild(span2);
        })
        .catch(error => {
            console.error(`Error fetching Pokémon ${i}:`, error.message);
        });
}
