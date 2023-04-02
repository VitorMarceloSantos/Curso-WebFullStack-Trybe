# self -> é o mesmo que this(faz referência ao objeto que foi inistânciado)
# Protect -> um underline _
# Private -> dois underlines __
# Getter -> @property
# Setter -> @atributo.setter

class TV:
    def __init__(self, volume, canal, tamanho=50, ligada=False):
        #tamanho, ligada -> possuem valores default caso não sejam passados por parâmetros
        self.__volume = volume 
        self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = ligada

    # Getter
    @property
    def volume(self):
        return self.__volume
    
    @property
    def canal(self):
        return self.__canal
    
    @property
    def tamanho(self):
        return self.__tamanho
    
    @property
    def ligada(self):
        return self.__ligada

    @volume.setter # Repare que é @atributo.setter
    def volume(self, new_volume):
        self.__volume = new_volume

    @canal.setter
    def canal(self, new_canal):
        self.__canal = new_canal

    @tamanho.setter
    def tamanho(self, new_tamanho):
        self.__tamanho = new_tamanho
    
    @ligada.setter
    def ligada(self, new_ligada):
        self.__ligada = new_ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else: raise ValueError('Valor Incorreto')
    
    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else: raise ValueError('Valor Incorreto')

    def modificar_canal(self, new_canal):
        if 0 < new_canal <= 99:
            self.__canal = new_canal
        else: raise ValueError('Valor Incorreto')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

# Instânciando um novo objeto
samsung = TV(50, 1, 55, True)

#Imprimindo valores
print(f'Volume: {samsung.volume}')
print(f'Canal: {samsung.canal}')
print(f'Tamanho: {samsung.tamanho}')
print(f'Ligada: {samsung.ligada}')

#Alterando valores -> Setters
samsung.volume = 20
samsung.canal = 10
samsung.tamanho = 75
samsung.ligada = False

#Imprimindo novos valores
print('Novos valores\n')
print(f'Volume: {samsung.volume}')
print(f'Canal: {samsung.canal}')
print(f'Tamanho: {samsung.tamanho}')
print(f'Ligada: {samsung.ligada}')

#Metodos
print('Metodos\n')
samsung.aumentar_volume()
print(f'Volume: {samsung.volume}')
samsung.diminuir_volume()
print(f'Volume: {samsung.volume}')
samsung.modificar_canal(45)
print(f'Canal: {samsung.canal}')
samsung.ligar_desligar()
print(f'Ligada: {samsung.ligada}')

