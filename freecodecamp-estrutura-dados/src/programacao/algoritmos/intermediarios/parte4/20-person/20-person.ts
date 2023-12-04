const Person = function (this: any, firstAndLast: string) {
  let fullName = firstAndLast;

  this.getFirstName = function (): string {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name: string) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name: string) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name: string) {
    fullName = name;
  };
};