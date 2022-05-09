(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class Attributes {
    constructor(
      public value: string,
      public placeholder: string,
    ) { }
  }

  class Events {
    constructor() { }

    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }

  interface InputElementProps {
    id: string;
    value: string;
    placeholder: string;
  };

  class InputElement {
    public element: HtmlElement;
    public attributtes: Attributes;
    public events: Events;

    constructor(value: string, placeholder: string, id: string) {

      this.element = new HtmlElement(id, 'input');
      this.attributtes = new Attributes(value, placeholder);
      this.events = new Events();

    }
  }
  //? Idea para la nueva clase InputElement

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})()