<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ocorrencia</title>

    <style type="text/css">
        div.container {
            width: 80%;
            background-color: white;
            margin: 4em;
            padding: 1em;
            position: relative;
            /*float: left;*/
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            z-index: 1;
            height: 100vh;
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

        div.container>div.content>.side-company {
            width: 100%;
            max-width: 300px;
            display: block;
            position: relative;
            float: left;
            margin-top: 23px;
        }

        div.container>div.content>.logotipo {
            margin-top: 25px;
            float: right;
            width: 200px;
            position: relative;
        }

        div.container>div.content>.side-company>ul.list-unstyled {
            list-style: none;
            display: block;
        }

        div.container>div.content>.side-company>ul.list-unstyled>li {
            margin-bottom: 5px;
            display: block;
        }

        div.container>div.content {
            width: 100%;
            display: inline;
            margin-top: 5px;
            position: relative;
            float: left;
        }

        table.table-content {
            width: 100%;
            border: 0.1px;
            text-align: justify;
        }

        .row-data {
            width: 100%;
            margin-left: 15px;
            margin-right: 15px;
            position: relative;
        }
    </style>
</head>

<body style="font-family: sans-serif;">
    <div class="container">
        <div class="content-header">
            <h3 class="centered-title"
                style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
                Ordem de Serviço por meio da ocorrencia
            </h3>
        </div>
        <div class="content">
            <div class="side-company">
                <ul class="list-unstyled">
                    <li class="dado">Imprimido por: </li>
                    <li class="dado">Data de Emissao</li>
                    <li class="dado">Hora da Orcorrencia</li>

                </ul>
            </div>
            <div class="logotipo">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}" width="150px">
            </div>
        </div>
        <div class="row-data">
            <h4 class="head-title" style="margin-left:5px; text-align:center; width: 100%;">Relatorio dos Abastecimentos</h4>
            <table class="table-content">
                <thead>
                    <tr>
                        <th>Ordem</th>
                        <th>Data</th>
                        <th>Viaturas</th>
                        <th>Turno</th>
                        <th>Tipo de Combustivel</th>
                        <th>Qtd abastecida</th>
                        <th>Preco Unitario</th>
                        <th>Total</th>
                        <th>Autor</th>
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
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">
                            TOTAL
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <hr>

        </div>

    </div>
</body>

</html>
