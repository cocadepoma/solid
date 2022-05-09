(() => {

  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) { }

  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    };
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  };

  const userSettings = new UserSettings(
    '/usr/home',
    'var',
    'pepe@pepe.es',
    'admin',
    'Pepote',
    'M',
    new Date('1975-10-2')
  );

  console.log(userSettings)
})();