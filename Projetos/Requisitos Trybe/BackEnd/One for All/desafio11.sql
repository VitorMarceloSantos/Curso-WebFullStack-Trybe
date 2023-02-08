SELECT 
    mus.nome_musica AS nome_musica,
    CASE mus.nome_musica
        WHEN 'The Bard’s Song' THEN REPLACE(mus.nome_musica, 'Bard', 'QA')
        WHEN 'O Medo de Amar é o Medo de Ser Livre' THEN REPLACE(mus.nome_musica, 'Amar', 'Code Review')
        WHEN 'Como Nossos Pais' THEN REPLACE(mus.nome_musica, 'Pais', 'Pull Requests')
        WHEN 'BREAK MY SOUL' THEN REPLACE(mus.nome_musica, 'SOUL', 'CODE')
        WHEN 'ALIEN SUPERSTAR' THEN REPLACE(mus.nome_musica, 'SUPERSTAR', 'SUPERDEV')
    END AS novo_nome
FROM
    SpotifyClone.musicas AS mus
GROUP BY mus.nome_musica HAVING novo_nome <> nome_musica
ORDER BY nome_musica DESC;