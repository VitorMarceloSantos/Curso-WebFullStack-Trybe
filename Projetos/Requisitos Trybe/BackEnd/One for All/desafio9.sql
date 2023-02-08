SELECT 
    COUNT(his.id_usuario_historico) AS quantidade_musicas_no_historico
FROM
    SpotifyClone.historico AS his
        INNER JOIN
    SpotifyClone.users AS users ON his.id_usuario_historico = users.id_usuario
WHERE (users.nome = 'Barbara Liskov');