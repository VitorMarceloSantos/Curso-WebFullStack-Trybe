from tech_news.database import find_news
from collections import Counter


# Requisito 10
def top_5_categories():
    list_result = find_news()
    quantify_category = {}
    for result in list_result:
        if result["category"] not in quantify_category:
            quantify_category[result["category"]] = 0
        quantify_category[result["category"]] += 1

    #  Ordenando pela quantidade
    dict_sorted_value = dict(
        sorted(
            quantify_category.items(), key=lambda item: item[1], reverse=True
        )
    )

    top_five_values = (Counter(dict_sorted_value)).most_common(5)
    top_five = dict(
        sorted(
            top_five_values, key=lambda category: (-category[1], category[0])
        )
    )
    return [category for category in top_five]


# print(top_5_categories())
