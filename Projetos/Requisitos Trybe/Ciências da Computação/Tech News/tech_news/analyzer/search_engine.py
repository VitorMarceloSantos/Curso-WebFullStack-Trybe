from tech_news.database import search_news
from datetime import datetime


# Requisito 7
def search_by_title(title):
    # https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    list_result = search_news({"title": {"$regex": title, "$options": "i"}})
    # regex como parâmetro para o mongoDB
    new_list = []
    if not len(list_result) == 0:
        for result in list_result:
            new_list.append((result["title"], result["url"]))
    return new_list  # retorna lista vazia


# Requisito 8
def search_by_date(date):
    try:
        date_iso = datetime.fromisoformat(date)
    except ValueError:
        raise ValueError("Data inválida")
    else:
        date_correct = date_iso.strftime("%d/%m/%Y")
        list_result = search_news({"timestamp": date_correct})
        new_list = []
        if not len(list_result) == 0:
            for result in list_result:
                new_list.append((result["title"], result["url"]))
        return new_list  # retorna lista vazia


# Requisito 9
def search_by_category(category):
    # https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    list_result = search_news(
        {"category": {"$regex": category, "$options": "i"}}
    )
    # regex como parâmetro para o mongoDB
    new_list = []
    if not len(list_result) == 0:
        for result in list_result:
            new_list.append((result["title"], result["url"]))
    return new_list  # retorna lista vazia


# print(search_by_title("hardware"))
# print(search_by_date("2023-01-26"))
