from abc import ABC, abstractmethod
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
# from ..simple_report import SimpleReport
# from ..complete_report import CompleteReport
import csv
import json
import xmltodict


class Abstract_Report(ABC):
    @abstractmethod
    def report_method(
        cls, report
    ):  # obrigatoria a implementação nas outras classes
        pass


class Abstract_Read(ABC):
    @abstractmethod
    def report_file(
        cls, read
    ):  # obrigatoria a implementação nas outras classes
        pass


class simples(Abstract_Report):
    @classmethod
    def report_method(cls, report):
        return SimpleReport.generate(report)


class completo(Abstract_Report):
    @classmethod
    def report_method(cls, report):
        return CompleteReport.generate(report)


class Reader_csv(Abstract_Read):
    @classmethod
    def report_file(cls, path):
        with open(path) as file:  # não é necessário utilizar o close
            read = csv.DictReader(file)
            file_csv = [row for row in read]
            return file_csv


class Reader_json(Abstract_Read):
    @classmethod
    def report_file(cls, path):
        with open(path) as file:  # não é necessário utilizar o close
            file_json = json.load(file)
            return file_json


class Reader_xml(Abstract_Read):
    @classmethod
    def report_file(cls, path):
        with open(path) as file:  # não é necessário utilizar o close
            read = file.read()
            file_xml = xmltodict.parse(read)
            return file_xml["dataset"]["record"]


class Inventory:
    @classmethod
    def select_extension(cls, path):  # path: nomeArquivo.csv/json/
        extension = path.split(".")[-1]  # [-1] pegar a última posição
        return eval("Reader_" + extension).report_file(path)

    @classmethod
    def import_data(cls, path, type):  # type-> simples - completo
        file = Inventory.select_extension(path)
        return eval(type).report_method(
            file
        )  # eval -> a string é considerada com parte do metodo


teste = Inventory()
print(teste.import_data("inventory_report/data/inventory.csv", "simples"))
