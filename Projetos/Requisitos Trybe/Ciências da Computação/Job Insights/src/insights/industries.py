from typing import List, Dict
from src.insights.jobs import read


def get_unique_industries(path: str) -> List[str]:
    """Checks all different industries and returns a list of them"""
    path_reader = read(path)
    set_industry = set()  # criando um conjunto vazio
    for industry in path_reader:
        if industry["industry"] != "":  # verifica se há algum campo vazio
            set_industry.add(industry["industry"])
    return set_industry  # retornando um conjunto com os job_industry


def filter_by_industry(jobs: List[Dict], industry: str) -> List[Dict]:
    """Filters a list of jobs by industry"""
    list_industry = [industry_param
                     for industry_param in jobs
                     if industry_param['industry'] == industry]
    return list_industry
