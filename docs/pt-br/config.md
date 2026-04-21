# Documentação da Configuração (Game Config)

A definição da configuração é um padrão de arquitetura de alguns jogos online, então por isso a decisão de refazer este jogo se baseando nisso.

## Módulos

### 1. Reino

O reino é a parte principal do jogo, onde ele pode criar itens, recrutar e posicionar soldados, posicionar suas construções e melhorar tanto as unidades quanto as construções.

#### 1.1 Principal

- [Recursos](./resources.md)
- [Unidades](./units.md)
- [Construções](./buildings.md)
- [Melhorias de unidades](./unit-upgrades.md)
- [Melhorias de construções](./building-upgrades.md)
- [Pedaços de terra](./land-chunks.md)

#### 1.2 Combate 

- [Heróis](./heroes.md)
- [Melhorias de Heróis](./hero-upgrades.md)
- [Runas](./runes.md)
- [Feitiços](./spells.md)

### 2. Campanha e eventos

A campanha éo modo história do jogo, onde o jogador deve completar missões para avançar na história. Os eventos são eventos baseados em desbloqueio após um nível específico, eventos frequentes e eventos que acontecerão em um período específico. Eles são baseados em nós, cada nó tem uma ou mais missões. Uma missão pode ser uma batalha, um requerimento de coleta de um item ou a cobrança de um recurso para completá-la.

- [Nós Campanha](./campaign-nodes.md)
- [Missões](./quests.md)
- [Tarefas de Missão](./quest-tasks.md)
- [Personagens](./characters.md)
- [Citações de Campanha](./campaign-quotes.md)
- ~~[Eventos](./events.md)~~ 
- ~~[Citações de Eventos](./event-quotes.md)~~

--- 

**Disclaimer**: Este projeto não tem afiliação com a Playkot ou é apoiado pela mesma, os direitos autorais pertencem aos seus respectivos autores. o código e as definições por texto foram criadas do zero, mas foram inspiradas no jogo original.