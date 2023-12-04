export default function Animal(this: any, nome = 'default name') { //propriedade privada.
  this.getNome = () => { //closure - somente o metodo tem acesso ao contexto.
    return nome;
  };
  this.setNome = (n: string) => {
    nome = n;
  }
}

Animal.prototype = {
  constructor: Animal,
  comer: function () { return 'comendo' },
}