# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def than_number(a: int, b: int) -> int:
    if a > b:
        return a
    else:
        return b


a, b = 5, 3
print(f'O maior valor entre {a} e {b} é: {than_number(a,b)}')

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

notes = [4.5, 6, 3, 9, 8.3]


def calculation_notes(list_notes: list) -> float:
    return sum(list_notes)/len(list_notes)


print(f'A media das notas é: {calculation_notes(notes)}')


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:

def print_quant(n: int):
    if n > 1:
        count = n
        while count >= 1:
            print(f'{n * "*"}')
            count -= 1


print_quant(5)

#  Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
#  com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def length_name(list_name: list) -> str:
    length = ''
    for name in list_name:
        if len(name) > len(length):
            length = name
    return length


print(f'Nome com mais caracteres: {length_name(names)}')
