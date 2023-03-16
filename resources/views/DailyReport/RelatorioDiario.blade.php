<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Relatorio Diario</title>

    <style>
        div.container {
            width: 100%;
            background-color: white;
            position: relative;
            height: 100vh;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            z-index: 1;
        }

        div.container>.content-header {
            width: 100%;
            display: inline-flex;
            /*text-align: center;*/
            background-color: gray;
            border-radius: 4px;
            z-index: 1;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 2px;
            margin-top: -5px;
        }
        div.container .content-section{
            padding: 0.1rem;
            margin-top: 0.5rem;
            display: flex;
            flex-direction: column;
        }

        .content-section .table {
            width: 100%;
            font-size: 8pt;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: justify;
            border-collapse: collapse;
        }

        table.table-content td,
        table.table-content th {
            border: 0.1px solid rgb(120, 119, 119);
            padding: 2px;
        }

        table.table-content tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="content-header">
        <h3 class="centered-title"
            style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
            Relatorio Geral de Abastecimentos Extras
        </h3>
    </div>
    <div class="content-section">
        <table class="table table-light table-content">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Cod.Ordem</th>
                    <th>Tipo de Ordem</th>
                    <th>Bombas</th>
                    <th>Matricula</th>
                    <th>Combustivel</th>
                    <th>Projecto</th>
                    <th>Rotas</th>
                    <th>Dist&acirc;ncia</th>
                    <th>Ltrs Previstos</th>
                    <th>Ltrs no Tanque</th>
                    <th>Ltrs a abastecido</th>
                    <th>Subtotal</th>
                    <th>Solicitado por</th>
                    <th>Aprovado por</th>
                    <th>Descri&ccedil;&atilde;o</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</body>
</html>
