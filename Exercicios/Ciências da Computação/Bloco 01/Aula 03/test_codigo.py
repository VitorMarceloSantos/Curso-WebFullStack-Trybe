# python3 -m pip install pytest  (instalando a biblioteca de testes)

# python3 -m pytest  (rodando os testes)

# O comando assert funciona da seguinte maneira: caso a expressão recebida seja verdadeira (avaliada como True), nada acontece. Porém, caso seja falsa (avaliada como False), uma exceção do tipo AssertionError é lançada. A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.

import pytest
from codigo import is_odd, divide


def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2) is False

def test_divide_when_other_number_is_zero_raises_an_exception():
  with pytest.raises(ZeroDivisionError, match="division by zero"):
      divide(2, 0)

# Utilizamos a função raises da pytest para verificar se a exceção ocorreu. Caso contrário, ela lança um AssertionError, indicando que o teste não passou. Podemos verificar também se o texto retornado na exceção é o esperado através do parâmetro match, que pode receber uma expressão regular. No exemplo, temos uma divisão por zero, que lança a exceção esperada e o teste passa com sucesso.