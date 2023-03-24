from functools import lru_cache
from typing import List, Dict
import csv


@lru_cache
def read(path: str) -> List[Dict]:
    """Reads a file from a given path and returns its contents"""
    with open(path, "r", encoding="utf-8") as file:
        path_reader = list(csv.DictReader(file))
        # DictReader funciona como um leitor comum, mas mapeia as informações
        # em cada linha para um dicionario.
        # list(cria uma lista de discionario)
        return path_reader


def get_unique_job_types(path: str) -> List[str]:
    """Checks all different job types and returns a list of them"""
    path_reader = read(path)
    set_jobs = set()  # criando um conjunto vazio
    for job in path_reader:
        set_jobs.add(job["job_type"])
    return set_jobs  # retornando um conjunto com os job_type


def filter_by_job_type(jobs: List[Dict], job_type: str) -> List[Dict]:
    """Filters a list of jobs by job_type"""
    list_job_type = [job
                     for job in jobs
                     if job['job_type'] == job_type or job['job_type'] == '']
    return list_job_type
