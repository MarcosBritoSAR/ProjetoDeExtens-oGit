O git rebase é uma ferramenta para integrar mudanças de um branch em outro.

Merge (Revisão):
Cria um commit de merge que preserva o histórico exato do desenvolvimento, mas pode criar um gráfico de commits "bagunçado" (muitos galhos se unindo).

Rebase:
Move os commits do seu branch para o topo da linha do branch de destino (ex: main).
Resultado: Um histórico de commits linear e limpo, parecendo que o desenvolvimento ocorreu em sequência.

Regra de Ouro: NUNCA faça rebase em branches que já foram enviados (push) para um repositório remoto e são compartilhados com outras pessoas. Isso confunde o histórico de todos.s