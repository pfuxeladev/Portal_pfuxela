<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Ocorrencia</title>
    <style type="text/css">
        counter-reset: chapternum figurenum;
        font-family: "Trebuchet MS",
        "Lucida Grande",
        "Lucida Sans Unicode",
        "Lucida Sans",
        Tahoma,
        sans-serif;
        line-height: 1.5;
        font-size: 11pt;

        @page {
            size: A4;
        }

        div.row-data {
            width: 100%;
            height: auto;
        }

        div.row-data>div.col-12 {
            width: 100%;
            height: 60px;
            /*padding: 2px;*/
            background: #726D6D;
            margin-top: 0;
            color: whitesmoke;
            display: block;

        }

        span.title-data {
            font-size: 21pt;
            text-align: center;
            position: relative;
            float: left;
            margin-left: 35%;
            margin-right: 25%;
        }

        div.col-4 {
            width: 100%;
            max-width: 400px;
            line-height: initial;
            float: left;
            position: absolute;
            margin-top: 100px;
            margin-bottom: 20px;
        }

        table.table {
            width: 100%;
            border: 1px solid #cdcdcd;
        }

        div.col-4>table.table tr>th {
            width: 50%;
            border: 1px solid #cdcdcd;
            text-align: left;
        }

        div.col-12-1 {
            width: 99%;
            float: left;
            margin-top: 400px;
            position: absolute;
        }

        div.col-12-1>table.table {
            width: 100%;
            position: relative;
        }

        div.col-12-1>table.table tr>th {
            border: 1px solid #cdcdcd;
            text-align: left;
        }
        .logotipo{
            position: relative;
            width:200px;
            margin-left: 50px;
            float: left;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="row-data" id="page1" data-page-no="1">
        <div class="col-12">
            <span class="title-data">Relatorio da Ocorrencia da viatura</span>
        </div>
        <div class="logotipo">
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                width="180px">
        </div>
        <div class="col-4">
            <h3 class="dados">Dados da viatura</h3>
            <table class="table table-bordless">
                <tbody>
                    <tr>
                        <th>Matricula</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Nr de Chassis</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Nr de Motor</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Tipo de combustivel</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Qtd existente</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>consumo medio (ltr/km)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Capacidade</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Quilometragem</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12-1">
            <table class="table table-bordless">
                <thead>
                    <tr>
                        <th>Nome do Motorista que reportou</th>
                        <th>Nome do HST</th>
                        <th>Data & Hora</th>
                    </tr>
                </thead>
            </table>
            <br>
        </div>
    </div>
</body>

</html>
