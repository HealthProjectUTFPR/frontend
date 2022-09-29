---
name: Issue Front-end
about: Template padrão de Issues do Front-end
title: Issue Front-end
labels: ''
assignees: ''

---

### Descrição
Uma breve descrição da tarefa a ser feita.

### Requisitos
- [ ] Criar tela de listagem de sei lá oq
- [ ] Atualizar rota blablabla da navbar
- [ ] Esses são só exemplos, beleza?

### Rota para receber
`GET` `/alunos/:alunoId`

### Formato de Resposta
```javascript
{
    "alunos": [
        {
            "id": 13,
            "nome": "Lula",
            "idade": 76
        },
        {
            "id": 22,
            "nome": "Bolsonaro",
            "idade": 67
        },
        {
            "id": 27,
            "nome": "Naruto",
            "idade": 18
        }
    ]
}
```

### Rota para enviar
`POST` `/alunos/:alunoId`

### Formato para Request
```javascript
{ 
    "id": 39,
    "nome": "Monkey D. Luffy",
    "idade": 25
}
```
