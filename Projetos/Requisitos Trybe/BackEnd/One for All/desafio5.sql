SELECT 
    mus.nome_musica AS cancao,
    COUNT(hist.id_musica_historico) AS reproducoes
FROM
    SpotifyClone.historico AS hist
        INNER JOIN
    SpotifyClone.musicas AS mus ON mus.id_musica = hist.id_musica_historico
GROUP BY cancao
ORDER BY reproducoes DESC , cancao
LIMIT 2;