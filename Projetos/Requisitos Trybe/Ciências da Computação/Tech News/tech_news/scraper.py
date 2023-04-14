import requests
import time
from parsel import Selector
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        response = requests.get(
            url, headers={"user-agent": "Fake user-agent"}, timeout=3
        )
        # response.raise_for_status() pode ser utilizado para capturar qualquer
        # status que seja diferente de 200
        if response.status_code == 200:
            return response.text
        return None
    except requests.ReadTimeout:
        return None
    finally:
        time.sleep(1)


# Requisito 2
def scrape_updates(html_content):
    selector = Selector(html_content)
    links = selector.css(".entry-title a::attr(href)").getall()
    if not len(links) == 0:
        return links
    return []


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    next_page = selector.css(".next::attr(href)").get()
    if next_page is not None:
        return next_page
    return None


# Requisito 4
def scrape_news(html_content):
    def remove_space(text):
        new_text = text.strip(" ").strip(
            "\xa0"
        )  # remove espaços no inicio e no fim da string
        # /xa0 é o caracter &nbsp(espaço em HTML)
        return new_text

    # recebe 11 minutos de leitura e
    # retorna um inteiro 11
    def format_reading_time(time):
        return int(time.split(" ")[0])

    selector = Selector(html_content)
    url = selector.css("link[rel='canonical']::attr(href)").get()
    title = remove_space(selector.css(".entry-title::text").get())
    timestamp = selector.css(".meta-date::text").get()
    writer = selector.css(".author a::text").get()
    reading_time = format_reading_time(
        selector.css(".meta-reading-time::text").get()
    )
    summary = remove_space(
        "".join(
            selector.css(
                "div.entry-content:first-of-type > p:nth-of-type(1) *::text"
            ).getall()
        )
    )
    # Esse é um caso onde a tag p é uma ancestral e as tags a e em são as
    # descendentes. Assim, podemos usar o seletor * para fazer refrência à
    # todas essas tags simultaneamente.
    category = selector.css("span.label::text").get()
    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "reading_time": reading_time,
        "summary": summary,
        "category": category,
    }


# Requisito 5
def get_tech_news(amount):
    url_page = "https://blog.betrybe.com"
    list_news = []

    while url_page:  # paginação
        list_url = scrape_updates(fetch(url_page))
        for url in list_url:
            list_news.append(
                scrape_news(fetch(url))
            )  # salva o objeto contendo as informações de cada noticia
            if len(list_news) == amount:
                url_page = None  # sair While
                create_news(list_news)  # salvando no banco de dados
                return list_news
        # para chamar a proxima página, caso seja não entre no if
        url_page = scrape_next_page_link(fetch(url_page))


# print(scrape_next_page_link(fetch("https://blog.betrybe.com")))
# print(scrape_news(fetch("https://blog.betrybe.com/carreira/empowerment-lideranca-o-que-e/")))
# print(get_tech_news(20))
