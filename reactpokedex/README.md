# reactpokedex

## Como a web funciona:
    Inspecionar a tela do browser (F12);
    Network;

## JavaScript básico:
    declaração de variaveis:
        const
        let
        var (menos usado atualmente)

    comparadores:
        "==" -> desconsidera o tipo da variável;
        "===" -> considera o tipo da variável

    array e manipulação:
        .push() -> acrescenta ao fim do array;
        .map() -> mapeia o array
        .forEach()
        .filter()
        .find()
    
    arrow function ( item => item + 5)
    if ternário (? p : " ");

## POO em javaScript:
        - Criando a Classe:
            Class NomeDaClasse{
                construtor(variavel1, variavel2){
                    this.variavel1 = variavel1;
                    this.variavel2 = variavel2;
                }
            
                metodoA() {
                    código
                }
            }
        
        - Instanciando o Objeto:
            const exemplo = new NomeDaClasse;

        - Usando o metodo:
            exemplo.metodoA();
