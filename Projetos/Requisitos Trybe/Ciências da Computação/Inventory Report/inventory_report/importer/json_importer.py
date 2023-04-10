from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if not path.split(".")[-1] == "json":
            raise ValueError("Arquivo inválido")
        with open(path) as file:  # não é necessário utilizar o close
            file_json = json.load(file)
            return file_json
