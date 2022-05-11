- [1 - Clean Code](#1---clean-code)
  - [1.1 - Deuda técnica](#11---deuda-técnica)
  - [1.2 - Refactorización](#12---refactorización)
  - [1.3 - Código limpio](#13---código-limpio)
  - [1.4 - Nombres](#14---nombres)
    - [1.4.1 - Arrays](#141---arrays)
    - [1.4.2 - Booleans](#142---booleans)
    - [1.4.3 - Números](#143---números)
    - [1.4.4 - Funciones](#144---funciones)
    - [1.4.5 - Clases](#145---clases)
      - [1.4.5.1 - Estructura de las clases](#1451---estructura-de-las-clases)
  - [1.5 - DRY (**Don't repeat yourself**)](#15---dry-dont-repeat-yourself)
  - [1.6 - Comentarios](#16---comentarios)
- [2 - STUPID](#2---stupid)
  - [2.1 - Singleton.](#21---singleton)
  - [2.2 - Tight Coupling.](#22---tight-coupling)
    - [2.2.1 Cohesión](#221-cohesión)
    - [2.2.2 Acoplamiento](#222-acoplamiento)
  - [2.3 Código no probable](#23-código-no-probable)
  - [2.4 Optimizaciones prematuras](#24-optimizaciones-prematuras)
  - [2.5 Nombres poco descriptivos](#25-nombres-poco-descriptivos)
  - [2.6 Duplicidad de código](#26-duplicidad-de-código)
    - [2.6.1 Duplicidad Real](#261-duplicidad-real)
    - [2.6.2 Duplicidad Accidental](#262-duplicidad-accidental)
- [3 - Otros olores](#3---otros-olores)
  - [3.1 - Inflación](#31---inflación)
    - [3.1.1 - Métodos](#311---métodos)
    - [3.1.2 - Clases](#312---clases)
    - [3.1.3 - Obesisión primitiva](#313---obesisión-primitiva)
    - [3.1.4 - Lista larga de parámetros](#314---lista-larga-de-parámetros)
  - [3.2 - Acopladores](#32---acopladores)
    - [3.2.1 - Feature Envy](#321---feature-envy)
    - [3.2.2 - Intimidad inapropiada](#322---intimidad-inapropiada)
    - [3.2.3 - Cadena de mensajes](#323---cadena-de-mensajes)
    - [3.2.4 - The Middle Man](#324---the-middle-man)
- [4 - SOLID](#4---solid)

## 1 - Clean Code

### 1.1 - Deuda técnica

-   `Imprudente`, no hay tiempo, copia y pega es de nuevo.
-   `Imprudente e inadvertida`, JUNIORS, falsos SENIORS lo hacen (Qué son patrones de diseños?)
-   `Prudente`, tenemos que entregar rápido, ya refactorizaremos.
-   `Prudente e inadvertida`, nos damos cuenta cuando madura el proyecto, y ahora savemos como deberíamos haber hecho.

Caer en la deuda técnica es normal y a menudo inevitable.
Diferencia programador normal y uno que sabe lo que está haciendo, este último se preocupa por pagar esa deuda técnica.

La deuda técnica se paga con la **REFACTORIZACIÓN**.

### 1.2 - Refactorización

La refactorización es el proceso de mejorar el código `sin alterar su comportamiento` para que sea más **entendible** y **tolerante a cambios**.
**Es imprescindible contar con pruebas automáticas**.

"Si funciona, no lo toques" - producto de no tener un código fuerte y tolerante a cambios.

### 1.3 - Código limpio

-   "es aquel que se ha escrito con la intención de que otra persona (o tú en el futuro) lo entienda".
-   "Simple y directo, debería leerse con la misma facilidad que un text bien escrito".
-   "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga".

### 1.4 - Nombres

#### 1.4.1 - Arrays

```js
// mal
const fruit = ["manzana", "plátano", "fresa"];
// regular
const fruitList = ["manzana", "plátano", "fresa"];
// bueno
const fruits = ["manzana", "plátano", "fresa"];
// ok
const fruitNames = ["manzana", "plátano", "fresa"];
```

#### 1.4.2 - Booleans

**is, has, can** dan valor semántico.

Intentar siempre que su `significado sea positivo` y evitar las negaciones en el nombre.

```js
// mal
const open = true;
const write = true;
const active = false;
const noValues = true;
const notEmpty = true;

//ok
const isOpen = true;
const canWrite = true;
const isActive = false;
const hasValues = true;
const isEmpty = true;
```

Si dedicamos un más de unos segundos para averiguar que tipo de dato contiene una variable, es un nombre MALO.

#### 1.4.3 - Números

**min, max, total**

```js
// mal
const fruits = 2;
const cars = 5;

//ok
const maxFruits = 5;
const totalFruits = 3;
const totalOfFruit = 6;
```

#### 1.4.4 - Funciones

El nombre de la función deben de representar acciones, con el verbo con representa la acción junto con un sustantivo. Debe de expresar lo que hace especifíficamente.

```js
// mal
createUserIfNotExists();
updateUserIfNotEmpty();
senEmailIfFieldsAreValid();

// ok
createUSer();
updateUser();
sendEmail();
```

-   Limitar a 3 parámetos posicionales.
-   Ordenar de manera alfabética.
-   Simplicidad es fundamental.
-   Tamaño reducido.
-   Funciones de una sola línea.
-   Menos de 20 líneas.
-   Evitar el uso del else.
-   Priorizar el uso de condicionales ternarios.

#### 1.4.5 - Clases

-   Nombres formados con un sustantivo o frases de un sustantivo.
-   Evitar nombres genéricos (las clases acaban haciendo demasiado).
-   El nombre es lo más importante de la clase.
-   UpperCamelCase.

##### 1.4.5.1 - Estructura de las clases

-   Comenzar con lista de propiedades.

    1. Propiedades estáticas.
    2. Propiedades públicas.

-   Métodos.
    1. Constructores estáticos.
    2. Constructor.
    3. Métodos estáticos.
    4. Métodos privados.
    5. Resto métodos ordenados de mayor a menor importancia.
    6. Getter y Setters al final.

### 1.5 - DRY (**Don't repeat yourself**)

-   Evitar duplicidad de código.
-   Simplificar tests.
-   Ayuda a centralizar procesos.
-   Aplicar el principio DRY usualmente lleva a refactorizar.
-   Tratar de que las funciones sean fáciles de leer y cumplan con lo establecido.

### 1.6 - Comentarios

-   Cuando comentamos código es porque nuestro código no es lo suficientemente explicativo.
-   Los comentarios deberían de ser la excepción, no la regla.
-   Al usar librerías de terceros, APIS, etc.. a veces es inevitable escribir comentarios, pero los - mismos sólo deben de explicar lo que estamos intentando hacer.
-   No comentes el código mal escrito, hay que reescribirlo.

Al escribir comentarios debemos resolver **¿el por qué?** en lugar de **¿qué?** o **¿cómo?**.

## 2 - STUPID

Acrónimos STUPID

6 Code Smells a evitar.

-   `S`ingleton: patrón singleton.
-   `T`ight Couplin: alto acoplamiento.
-   `U`ntestability: código no probable (unit test).
-   `P`remature optimization: optimizaciones prematuras.
-   `I`ndescriptive Naming: nombres poco descriptivos.
-   `D`uplication: duplicidad de códigon, no aplicar el principio `DRY`.

### 2.1 - Singleton.

**Pros**:

-   Garantiza una única instancia de la clase a lo largo de toda la aplicación.

**Cons**:

-   Vive en el contexto global.
-   Puede ser modificado por cualquiera y en cualquier momento.
-   No es rastreable.
-   Difícil de testar debido a su ubicación.

### 2.2 - Tight Coupling.

Lo ideal es tener bajo acoplamiento y buena cohesión.

**Alto acoplamiento**

-   Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos.
-   El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
-   Un módulo en particular puedes ser más fácil de reutilizar y/o probar porque se deben incluir módulos independientes.

Queremos diseñar componentes que sean auto-contenidos, auto-suficientes e independientes. Con un objetivo y un propósito bien definido.

#### 2.2.1 Cohesión

-   La cohesión se refiere a lo que la clase (o módulo) puede hacer.
-   La baja cohesión siginificaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
-   Alta cesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, sólo métodos relacionados con la intención de la clase.

#### 2.2.2 Acoplamiento

Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.

-   En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.
-   En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa de su sistema.

Un buen diseño de software tiene un alta cohesión y bajo acoplamiento.

### 2.3 Código no probable

Código difícilmente testeable.

-   Código con alto acoplamiento.
-   Código con muchas dependencias no inyectadas.
-   Dependencias en el contexto global (Tipo Singleton).

Debemos tener en mente las pruebas desde la creación del código.

### 2.4 Optimizaciones prematuras

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.

No debemos de anticiparlos a los requisítos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

**Complejidad accidental**

Cuando implementamos una solución compleja a la mínima indispensable.

**Complejodas esencial**

La complejidad es inherente al problema

### 2.5 Nombres poco descriptivos

-   NOmbres de variables mal nombradas.
-   Nombres de clases genéricas.
-   Nombres de funciones mal nombradas.
-   Ser muy específico o demasiado genérico.

### 2.6 Duplicidad de código

#### 2.6.1 Duplicidad Real

-   Código idéntico y cumple la misma función.
-   Un cambio implicaría actualizar todo el código idéntico en varios lugares.
-   Aumenta posibilidades de error humano al olvidar una parte para actualizar.
-   Mayor cantidad de pruebas innecesarias.

#### 2.6.2 Duplicidad Accidental

-   Código luce similar pero cumple funciones distintas.
-   Cuando hay un cambio, sólo hay que modificar un sólo lugar
-   Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

## 3 - Otros olores

### 3.1 - Inflación

#### 3.1.1 - Métodos

Usualmente siempre se agrega algo a un método o función pero casi nunca se quita nada. Esto deriva en "bestias de gran tamaño".

Buscaremos cortar ese método en submétodos. Perdemos rendimientos con esto, pero en la mayoría de los casos, el código es tan insignificante que no debemos preocuparnos por ello.

#### 3.1.2 - Clases

Clases que se van hinchando y creciendo y acaba siendo una clase "con muchos sombreros", es decir una clase que hace de todo.

#### 3.1.3 - Obesisión primitiva

Nacen en momentos de debilidad, cuando tenemos una urgencia. Es más fácil de crear un campo nuevo que crear una clase o nuevo módulo.

#### 3.1.4 - Lista larga de parámetros

Una función o método no debería de recibir más de 3 o 4 parámetros.

En lugar de pasar 5 parámetros, pasar un objeto con esos parámetros agrupados.

### 3.2 - Acopladores

Todos los olores de este grupo contribuyen al acoplamiento excesivo entre clases o muestran lo que sucede si el acoplamiento se reemplaza por una delegación excesiva.

#### 3.2.1 - Feature Envy

Un método, módulo o clase accede a los datos de otro objeto, más que sus propios datos.

#### 3.2.2 - Intimidad inapropiada

Cuando una clase usa campos y métodos internos de otra clase. Las clases que pasan demasiado juntas, es señal de que hay un tipo de problema.

#### 3.2.3 - Cadena de mensajes

Tenemos una función A, que llama a B, que B llama a C y C llama a D.

Estas cadenas que el cliente depende de la navegación a lo largo de la estructura de clases o módulos.

#### 3.2.4 - The Middle Man

Clases o métodos que delegan en otras clases o métodos.

## 4 - SOLID
