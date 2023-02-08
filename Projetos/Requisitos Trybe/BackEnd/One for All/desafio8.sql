SELECT 
    art.nome_artista AS artista,
    alb.nome_album AS album
FROM
    SpotifyClone.artistas AS art
        INNER JOIN
    SpotifyClone.albuns AS alb ON art.id_artista = alb.id_artista_album
WHERE (art.nome_artista = 'Elis Regina')
GROUP BY artista, album
ORDER BY artista;