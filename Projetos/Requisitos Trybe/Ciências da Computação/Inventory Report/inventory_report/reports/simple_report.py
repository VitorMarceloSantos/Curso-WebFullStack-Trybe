from datetime import datetime


class SimpleReport:
    @classmethod
    def count_company_dict(cls, list_products):
        product_dict = {}
        for product in list_products:
            if product["nome_da_empresa"] in product_dict:
                product_dict[product["nome_da_empresa"]] += 1
            else:
                product_dict[product["nome_da_empresa"]] = 1
        return product_dict

    @classmethod
    def count_company(cls, list_products):
        product_dict = SimpleReport.count_company_dict(list_products)
        max_product = max(product_dict, key=lambda k: product_dict[k])
        return max_product
        # print(f"Maximo:{max_product}")

    @classmethod
    def return_date(cls, e):
        return e["data_de_fabricacao"]

    @classmethod
    def fabrication_date(cls, list_products):
        list_products.sort(key=SimpleReport.return_date)
        return list_products[0]["data_de_fabricacao"]

    @classmethod
    def return_date_validate(cls, e):
        return e["data_de_validade"]

    @classmethod
    def validate_date(cls, list_products):
        date_now = datetime.now().date()  # pegar apenas a data
        list_validate = [  # recebe as datas menores que a data atual
            date
            for date in list_products
            if date_now
            < datetime.strptime(
                date["data_de_validade"], "%Y-%m-%d"
            ).date()  # https://www.programiz.com/python-programming/datetime
        ]
        list_validate.sort(key=SimpleReport.return_date_validate)
        return list_validate[0]["data_de_validade"]

    @classmethod
    def generate(cls, list_products):
        fabrication_date = SimpleReport.fabrication_date(list_products)
        validate_date = SimpleReport.validate_date(list_products)
        count_company = SimpleReport.count_company(list_products)

        return (
            f"Data de fabricação mais antiga: {fabrication_date}\n"
            f"Data de validade mais próxima: {validate_date}\n"
            f"Empresa com mais produtos: {count_company}"
        )


# list_product = [
#     {
#         "id": 1,
#         "nome_do_produto": "CADEIRA",
#         "nome_da_empresa": "Forces of Nature",
#         "data_de_fabricacao": "2022-04-04",
#         "data_de_validade": "2021-02-09",
#         "numero_de_serie": "FR48",
#         "instrucoes_de_armazenamento": "Conservar em local fresco",
#     },
#     {
#         "id": 2,
#         "nome_do_produto": "Mesa",
#         "nome_da_empresa": "Forces of Nature",
#         "data_de_fabricacao": "2021-04-04",
#         "data_de_validade": "2022-02-09",
#         "numero_de_serie": "FR48",
#         "instrucoes_de_armazenamento": "Conservar em local fresco",
#     },
#     {
#         "id": 3,
#         "nome_do_produto": "Computador",
#         "nome_da_empresa": "Nature",
#         "data_de_fabricacao": "2022-06-07",
#         "data_de_validade": "2023-07-07",
#         "numero_de_serie": "FR48",
#         "instrucoes_de_armazenamento": "Conservar em local fresco",
#     },
# ]

# teste = SimpleReport()
# print(teste.count_company(list_product))
