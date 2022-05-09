(() => {

  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  };

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: String;
    public role: string;

    constructor({
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserProps) {
      super({ name, gender, birthdate });

      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    };
  }

  interface UserSettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  };

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  };

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/var',
    email: 'pepe@pepe.es',
    role: 'admin',
    name: 'Pepote',
    gender: 'M',
    birthdate: new Date('1975-10-2')
  });

  console.log(userSettings)
})();