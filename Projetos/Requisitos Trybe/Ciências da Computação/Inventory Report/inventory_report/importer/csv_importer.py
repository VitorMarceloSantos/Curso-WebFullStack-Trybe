from inventory_report.importer.importer import Importer
import csv


class CsvImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if not path.split(".")[-1] == 'csv':
            raise ValueError("Arquivo inválido")
        with open(path) as file:  # não é necessário utilizar o close
            read = csv.DictReader(file)
            file_csv = [row for row in read]
            return file_csv
