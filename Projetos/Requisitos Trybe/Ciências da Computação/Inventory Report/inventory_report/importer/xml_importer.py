from inventory_report.importer.importer import Importer
import xmltodict


class XmlImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if not path.split(".")[-1] == "xml":
            raise ValueError("Arquivo inválido")
        with open(path) as file:  # não é necessário utilizar o close
            read = file.read()
            file_xml = xmltodict.parse(read)
            return file_xml["dataset"]["record"]
