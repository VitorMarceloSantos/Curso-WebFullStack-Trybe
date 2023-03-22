PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    """Calculate area of square."""
    # docstrings do Python são strings usadas logo após a definição
    # de uma função, método, classe ou módulo. Eles são usados para
    # documentar nosso código. Podemos acessar essas docstrings usando
    # o atributo __doc__.
    return side * side


def rectangle(length, width):
    """Calculate area of rectangle."""
    # docstrings do Python são strings usadas logo após a definição
    # de uma função, método, classe ou módulo. Eles são usados para
    # documentar nosso código. Podemos acessar essas docstrings usando
    # o atributo __doc__.
    return length * width


def circle(radius):
    """Calculate area of circle."""
    # docstrings do Python são strings usadas logo após a definição
    # de uma função, método, classe ou módulo. Eles são usados para
    # documentar nosso código. Podemos acessar essas docstrings usando
    # o atributo __doc__.
    return PI * radius * radius


if (
    __name__ == "__main__"
):  # A variável __name__ é utilizada pelo interpretador Python para
    # identificar o arquivo que esta sendo executado e seu valor será
    # "__main__" quando invocamos um módulo como script.
    print("Área do quadrado:", square(10))
    print(square.__doc__)  # acessando docstring
    print("Área do retângulo:", rectangle(2, 2))
    print(rectangle.__doc__)  # acessando docstring
    print("Área do círculo:", circle(3))
    print(circle.__doc__)  # acessando docstring
