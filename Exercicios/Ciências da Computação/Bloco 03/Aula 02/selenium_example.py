# Sempre rodar pelo terminal: python3 selenium_example.py

# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys # Importa teclas comuns
from selenium.webdriver.common.by import By # utilizar para especificar elemento css

# Instalar o webDriver Manager
# pip install webdriver-manager

# Utilizando o WebDriver-manager -> vai atualizar a versão do navegador automaticamente (https://www.youtube.com/watch?v=8AMNaVt0z_M&ab_channel=HashtagPrograma%C3%A7%C3%A3o)
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

servico = Service(ChromeDriverManager().install())  # buscando e atualizando o navegador

# criação de uma instância de navegador utilizando o Firefox
chrome = webdriver.Chrome(service=servico) # passando a versão do navegador

# requisições para essa instância criada utilizando o método `get`
response = chrome.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = chrome.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)

sleep(10) # aguardar 10 segundos