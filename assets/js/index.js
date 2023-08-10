const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const propiedadSection = document.querySelector(".propiedades");
const totalPro = document.getElementById("totalPro");
const cuartos = document.getElementById("cuartos");
const desde = document.getElementById("desde");
const hasta = document.getElementById("hasta");
const boton = document.getElementById("boton");

function llenaPropiedad(arrayProp = propiedadesJSON) {
  let propiedad = "";

  for (let anuncio of arrayProp) {
    propiedad += `
    <div class="propiedad">
    <div class="img" style="background-image: url('${anuncio.src}')"></div>
    <section>
    <h5>${anuncio.name}</h5>
    <div class="d-flex justify-content-between">
    <p>Cuartos: ${anuncio.rooms}</p>
    <p>Metros: ${anuncio.m}</p>
    </div>
    <p class="my-3">${anuncio.description}</p>
    <button class="btn btn-info ">Ver más</button>
    </section>
    </div>
    `;
  }
  propiedadSection.innerHTML = propiedad;
  totalPro.textContent = arrayProp.length;
}

function isNumber(evento) {
  let numeros = "0123456789";

  // Obtiene la tecla pulsada (codigo ASCII)
  let codigoCaracter = evento.charCode || evento.keyCode;
  // Obtiene la tecla pulsada
  let caracter = String.fromCharCode(codigoCaracter);

  // Se Comprueba si la variable "caracter" es un numero
  if (numeros.indexOf(caracter) != -1) {
    return numeros;
  } else {
    alert("Debes ingresar solo Numeros");
    return false;
  }
}

llenaPropiedad();
cuartos.addEventListener("keypress", (event) => isNumber(event));
desde.addEventListener("keypress", (event) => isNumber(event));
hasta.addEventListener("keypress", (event) => isNumber(event));

boton.addEventListener("click", () => {
  let filtroProp = [];
  let numCuarto = Number(document.querySelector("#cuartos").value);
  let numDesde = Number(document.querySelector("#desde").value);
  let numHasta = Number(document.querySelector("#hasta").value);

  if (numDesde > numHasta) {
    alert(
      `El valor desde: ${numDesde} no puede ser Mayor que el valor hasta: ${numHasta}`
    );
  } else {
    for (let anuncio of propiedadesJSON) {
      if (
        anuncio.rooms >= numCuarto &&
        anuncio.m >= numDesde &&
        anuncio.m <= numHasta
      ) {
        filtroProp.push(anuncio);
      }
      llenaPropiedad(filtroProp);
    }
  }
});

todos.addEventListener("click", () => llenaPropiedad());
