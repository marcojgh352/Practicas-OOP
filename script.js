// Prácticas OOP Ejercicio 1
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.
/* Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona. */

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(`Nombre:${this.nombre}\nEdad:${this.edad}\nGénero:${this.genero}`);
  }
}

let marco = new Persona("Marco", 21, "Masculino");
marco.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(
      `Estudiante ${this.nombre} registrado en el curso ${this.curso} en el grupo ${this.grupo}`,
    );
  }
}

let mario = new Estudiante("Mario", 21, "Masculino", "FSWD", "12B");
mario.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `Nombre:${this.nombre}\nEdad:${this.edad}\nGénero:${this.genero}\nAsignatura:${this.asignatura}\nNivel:${this.nivel}`,
    );
  }
}

let antonio = new Profesor("Antonio", 24, "Masculino", "FullStack", 2);
antonio.asignar();


