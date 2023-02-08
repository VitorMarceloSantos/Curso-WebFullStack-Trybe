SELECT 
    users.nome AS usuario,
    IF(
		YEAR(MAX(hist.data_reproducao)) >= 2021, -- Utiliza o ano, e pega o maior(MAX) valor do ano, pois alguns usuarios possuem mais de uma musica no historico(utiliza o GROUP BY para agrupar os usuarios)
        'Usuário ativo',
        'Usuário inativo') AS status_usuario
FROM
    SpotifyClone.users AS users
        INNER JOIN
    SpotifyClone.historico AS hist ON users.id_usuario = hist.id_usuario_historico
GROUP BY usuario
ORDER BY usuario;