from typing import Union, List, Dict
from src.insights.jobs import read


def get_max_salary(path: str) -> int:
    """Get the maximum salary of all jobs"""
    path_reader = read(path)
    max_salary = [
        int(salary["max_salary"])  # converte para inteiro
        for salary in path_reader
        if salary["max_salary"].isnumeric()  # adiciona somente números
    ]
    return max(max_salary)  # retorna o maior valor da lista


def get_min_salary(path: str) -> int:
    """Get the minimum salary of all jobs"""
    path_reader = read(path)
    min_salary = [
        int(salary["min_salary"])  # converte para inteiro
        for salary in path_reader
        if salary["min_salary"].isnumeric()  # adiciona somente números
    ]
    return min(min_salary)  # retorna o menor valor da lista


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    """Checks if a given salary is in the salary range of a given job
    ValueError
        If `job["min_salary"]` or `job["max_salary"]` doesn't exists
        If `job["min_salary"]` or `job["max_salary"]` aren't valid integers
        If `job["min_salary"]` is greather than `job["max_salary"]`
        If `salary` isn't a valid integer
    """
    try:
        min_salary = int(job["min_salary"])  # convertendo string em inteiro
        max_salary = int(job["max_salary"])  # convertendo string em inteiro
        int_salary = int(salary)
    except TypeError:  # caso tente converter uma string em inteiro
        raise ValueError
    except KeyError:  # caso acesse uma chave que não existe no dicionario
        raise ValueError
    if min_salary > max_salary:
        raise ValueError
    return min_salary <= int_salary <= max_salary


def filter_by_salary_range(
    jobs: List[dict], salary: Union[str, int]
) -> List[Dict]:
    """Filters a list of jobs by salary range"""
    list_jobs = []
    for jobs_param in jobs:
        try:
            # verifica se satifaz os criterios da função
            if matches_salary_range(jobs_param, salary):
                list_jobs.append(jobs_param)
        # o except vai pegar o erro caso ocorra na chamada da função
        except Exception:
            # o pass é apenas para não deixar o codigo em branco.
            # deve ser usada sempre que o programa requisitar sintaticamente
            # que se preencha uma lacuna(é passar, ou seja, deixa passar)
            pass
    return list_jobs
