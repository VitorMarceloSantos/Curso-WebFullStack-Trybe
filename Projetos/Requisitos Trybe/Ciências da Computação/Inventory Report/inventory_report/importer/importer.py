from abc import ABC, abstractmethod


class Importer(ABC):
    @abstractmethod
    def import_data(
        cls, path
    ):  # obrigatoria a implementação nas outras classes
        pass
