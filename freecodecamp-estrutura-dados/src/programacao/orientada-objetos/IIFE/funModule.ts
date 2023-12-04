// IIFE - Expressão de função invocada imediatamente
let funModule = (function () {
  return {
    voarMixin: function (obj: any) {
      obj.voar = function () {
        return "Voando";
      };
    },
    isVoarMixin: function (obj: any) {
      obj.isVoar = function () {
        return true;
      };
    }
  }
})();

let obj: any = new Object;

funModule.voarMixin(obj);
funModule.isVoarMixin(obj);

console.log(`Este Objeto voa? ${obj.isVoar()}. Objeto está ${obj.voar()}`);