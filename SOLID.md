## Sección 1

### 1 - `Deuda técnica`

-   `Imprudente`, no hay tiempo, copia y pega es de nuevo.
-   `Imprudente e inadvertida`, JUNIORS, falsos SENIORS lo hacen (Qué son patrones de diseños?)
-   `Prudente`, tenemos que entregar rápido, ya refactorizaremos.
-   `Prudente e inadvertida`, nos damos cuenta cuando madura el proyecto, y ahora savemos como deberíamos haber hecho.

Caer en la deuda técnica es normal y a menudo inevitable.
Diferencia programador normal y uno que sabe lo que está haciendo, este último se preocupa por pagar esa deuda técnica.

La deuda técnica se paga con la **REFACTORIZACIÓN**.

### 2 - `Refactorización`

La refactorización es el proceso de mejorar el código `sin alterar su comportamiento` para que sea más **entendible** y **tolerante a cambios**.
**Es imprescindible contar con pruebas automáticas**.

"Si funciona, no lo toques" - producto de no tener un código fuerte y tolerante a cambios.

### 3 - `Código limpio`

-   "es aquel que se ha escrito con la intención de que otra persona (o tú en el futuro) lo entienda".
-   "Simple y directo, debería leerse con la misma facilidad que un text bien escrito".
-   "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga".

### 4 - `Nombres`

#### 4.1 - Arrays

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

#### 4.2 Booleans

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

#### 4.3 Números

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

#### 4.4 Funciones

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

#### 4.5 Clases

-   Nombres formados con un sustantivo o frases de un sustantivo.
-   Evitar nombres genéricos (las clases acaban haciendo demasiado).
-   El nombre es lo más importante de la clase.
-   UpperCamelCase.

### 5 - `DRY`

**Don't repeat yourself**.

-   Evitar duplicidad de código.
-   Simplificar tests.
-   Ayuda a centralizar procesos.
-   Aplicar el principio DRY usualmente lleva a refactorizar.
-   Tratar de que las funciones sean fáciles de leer y cumplan con lo establecido.
