# Desafío para Software Engineers

Nombre postulante: **Lucas Alejandro Pardieux**
Link a la app en producción: https://kimche-challenge-two.vercel.app

## Pregunta planteada
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

## Respuesta:
Suponiendo ser parte del equipo de desarrollo encargado de reducir el tiempo de procesamiento de dicha informacion, propondria como metodologia comenzar con una reducción en base a la logica del backend. Por ejemplo:
- Revisar la declaración de variables, es conveniente que estas sean locales si cabe la posiblidad ya que las globales pueden inferir en el procesamiento.
- Analizar el nivel de complidad del codigo. Durante mi tiempo de estudio y de desarrollo en proyectos pude aprender que es muy simple caer en niveles de dificultad altos (>n2) cuando se trabaja con bucles de repetición, ya que al anidarlos la complidad escala de forma exponencial y por ende, tambien el tiempo de procesado. De ser este el caso, lo mejor seria repensar la logica de dichos bucles para reducir su complejidad.
- Otra opción (Casi obligatoria) que aprendí durante mi estudio fue que un codigo modularizado o dividido en "trozos" siempre es mejor no solo para la organización sino tambien para que el codigo pueda ir cargandose a trozos que el navegador requiera a medida que el usuario navega por la misma. 
- Podriamos tambien revisar las conexiones con el servidor, siempre es mejorar moderar las veces que nuestro codigo se comunica con la DB ya que esto reduce los tiempos de carga, por lo que se podria reducir el numero de peticiones y agrupar la información mas solicitada para requerirla en conjunto.
- En conexion con el punto anterior, siempre es conveniente implementar cachés que utilizar con nuestra información mas requerida, quizas en una primera carga tengamos un pequeño tiempo de espera que puede ser ilustrativo con un "loading" pero una vez la información mas relevante esté en nuestro caché el resto puede ir cargadose de a trozos sin sentir una excesiva demora de carga.
- Intentar no "comprobar" o procesar mas de 1 vez aquellos datos que no cambian. Es muy comun dejar bucles analizando datos que ya fueron analizados anteriormente, consumiendo asi recursos importantes. Lo mejor siempre es pensar el codigo de forma que no re-comprobemos aquello que no varía.

En una primera instancia analizar estos puntos podria darnos una reducción que varía segun la cantidad de "items" que hayamos solucionado. En caso de no ser asi, deberiamos ya quizas analizar otras cuestiones como la base de datos persé o la forma de analizar, modificar y procesar la información.

# Challenge
## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
