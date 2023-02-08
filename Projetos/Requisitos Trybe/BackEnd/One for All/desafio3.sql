SELECT 
    users.nome AS usuario,
    COUNT(hist.id_musica_historico) AS qt_de_musicas_ouvidas,
    ROUND(SUM(mus.duracao) / 60, 2) AS total_minutos
FROM
    SpotifyClone.users AS users
        INNER JOIN
    SpotifyClone.historico AS hist ON users.id_usuario = hist.id_usuario_historico
        INNER JOIN
    SpotifyClone.musicas AS mus ON mus.id_musica = hist.id_musica_historico
GROUP BY usuario
ORDER BY usuario;