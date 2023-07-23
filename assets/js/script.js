const construirSite = () => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    agregarBarra(mainContainer);
    agregarFuenteGoogle();
    document.querySelector('#main-container').style.fontFamily = "'Roboto'";

    mainContainer.append(galeria());

    const navbar = document.getElementsByClassName('navbar');
    navbar[0].parentNode.removeChild(navbar[0]);
}

const style = (node, styles) => Object.keys(styles).forEach(key => node.style[key] = styles[key])

const agregarFuenteGoogle = () => {
    const links = [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap'
        },
    ];

    const head = document.getElementsByTagName('head');

    for (let i of links){
        const link = document.createElement('link');
        link.rel = i.rel;
        link.href = i.href;
        head[0].appendChild(link);
    }
    
}


const menuAplicacion = () => {
    const menuAplicacion = document.createElement('ul');
    const opciones = ['Home','Servicios','Contacto'];

    opciones.forEach((o) => {
        const opcion = document.createElement('li');
        opcion.style.listStyle = 'none';
        opcion.innerHTML = o;
        menuAplicacion.append(opcion);    
    });
    
    menuAplicacion.style.display = 'flex';
    menuAplicacion.style.backgroundColor = '#000000';
    menuAplicacion.style.color = '#ffffff';
    menuAplicacion.style.height = '30px';
    menuAplicacion.style.alignItems = 'center';

    const opc = menuAplicacion.getElementsByTagName('li');
    for(i = 0; i < opc.length; i++) {
        opc[i].style.padding = '0 1em';
    }    

    return menuAplicacion;
}

const agregarBarra = (mainContainer) => {
    const barraNav = document.createElement("nav");
    barraNav.setAttribute('id','barra-nav');

    barraNav.append(menuAplicacion());
    // Agregamos al container principal
    mainContainer.append(barraNav);
}

const tarjeta = (img, titulo, descripcion) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('div');
    const cardTitulo = document.createElement('div');
    const cardDescripcion = document.createElement('div');

    style(cardTitulo, {
        fontSize: '2em',
        backgroundColor: '#efefef'
    });
    cardTitulo.textContent = titulo;
    card.append(cardTitulo);

    const imgCard = document.createElement('img');
    imgCard.src = img;
    style(imgCard,  {
        width: '100%',
        height: '30vh',
        objectFit : 'cover'
    });

    cardImage.append(imgCard);

    card.prepend(cardImage);

    style(card, {
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        height: '40vh',
    });

    cardDescripcion.textContent = descripcion;

    return card;
}


const galeria = () => {
    const galeriaContainer = document.createElement('div',{id:'galeria-container'});


    style(galeriaContainer, {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    });
    
    galeriaContainer.append(tarjeta('assets/images/sirius1.jpeg','Sirius 1','Disfrutando la cama'));
    galeriaContainer.append(tarjeta('assets/images/sirius2.jpeg','Sirius 2','Disfrutando la cama'));
    galeriaContainer.append(tarjeta('assets/images/sirius3.jpeg','Sirius 3','Disfrutando la cama'));
    galeriaContainer.append(tarjeta('assets/images/sirius4.jpeg','Sirius 4','Disfrutando la cama'));

    const tarjetaKiplin1 = tarjeta('assets/images/kiplin1.jpeg','Kiplin 1','Disfrutando la cama');
    galeriaContainer.insertBefore(tarjetaKiplin1,galeriaContainer.childNodes[1]);

    const tarjetaKiplin2 = tarjeta('assets/images/kiplin2.jpeg','Kiplin 2','Disfrutando la cama');
    galeriaContainer.insertBefore(tarjetaKiplin2,galeriaContainer.childNodes[4]);



    return galeriaContainer;
}