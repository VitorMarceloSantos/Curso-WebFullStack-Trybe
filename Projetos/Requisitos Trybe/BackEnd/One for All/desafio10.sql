SELECT 
    mus.nome_musica AS nome,
	COUNT(his.id_usuario_historico) AS reproducoes
FROM
    SpotifyClone.musicas AS mus
        INNER JOIN
    SpotifyClone.historico AS his ON mus.id_musica = his.id_musica_historico
		INNER JOIN
	SpotifyClone.users AS us ON us.id_usuario = his.id_usuario_historico
		WHERE us.id_plano_user in (1,4)
GROUP BY mus.nome_musica
ORDER BY nome ASC;