const Aviao = function (this: any) {
  this.peso = 10.400;
  this.getPeso = () => { return this.peso; };
  this.setPeso = (n: number) => { this.peso = n; };
} as any as { new(): any }

export default Aviao