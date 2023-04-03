class Calculadora:
    def soma(self, x, y):
        return x + y
    
class Decorator_calculadora(Calculadora): # recebe o objeto(Calculadora) como parâmetro e deve implementar seus metodos
        def __init__(self, calculadora): # construtor
          self.calculadora = calculadora

        def converterNumero(self, numero):
          if not isinstance(numero, str):
              return numero
        # Neste cenário, em vez de fazermos IF e else... podemos usar o dicionário
        # conseguimos acessar obter o valor a partir da chave
          return {
              "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
              "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
          }.get(numero)
        
        def soma(self, x, y):
          return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )
      
# newSoma = Decorator_calculadora(Calculadora)
# print(f'O resultado é: {newSoma.soma("um", "cinco")}')

if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    calculadora.soma(10, 20)

    calculadoraDecorada = Decorator_calculadora(calculadora)
    print("'oito' + 'dois' =", Decorator_calculadora.soma("oito", "dois"))
