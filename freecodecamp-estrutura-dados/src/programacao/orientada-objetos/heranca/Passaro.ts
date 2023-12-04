import Animal from './Animal';

const PassaroHeranca = function (this: any) {
  Animal.call(this);
  // this.peso: number = 0.400; // não funciona!
  this.peso = 0.400;
  this.getPeso = () => { return this.peso; };
  this.setPeso = (n: number) => { this.peso = n; };
} as any as { new(): any }
PassaroHeranca.prototype = Object.create(Animal.prototype);
PassaroHeranca.constructor = PassaroHeranca;

const PassaroSemHeranca = function (this: any) {
  this.peso = 0.500;
  this.getPeso = function () { return this.peso; };
  this.setPeso = function (n: number) { this.peso = n; };
} as any as { new(): any }

export {
  PassaroHeranca,
  PassaroSemHeranca,
}
