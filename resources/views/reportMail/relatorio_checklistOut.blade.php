<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Relatorio</title>

    <style type="text/css">
        div.container {
            width: 100%;
            background-color: white;
            position: relative;
            /*float: left;*/
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
            text-align: justify;
            /*height: 100vh;*/
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

        .row-data {
            width: 100%;
            margin-top: 180px;
            margin-right: 10px;
            position: relative;
            font-size: 10pt;
            height: auto;

        }

        button.btn {
            border-radius: 8px;
            padding: 0.3em;
            border: 0.2px #ff0d0d solid;
            background: #fee8e8
        }
    </style>
</head>

<body style="font-family: sans-serif;">
    <div class="container">
        <div class="content-header">
            <h3 class="centered-title"
                style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
                Relatorio De saida da viatura
            </h3>
        </div>
        <div class="content">
            <div class="row-data">
                <table class="table table-content">
                    <thead>
                        <tr>
                            <th>viatura</th>
                            <th>hra de partida</th>
                            <th>km inicial</th>
                            <th>hra de chegada</th>
                            <th>km final</th>
                            <th>km percorridos</th>
                            <th>previsao de consumo</th>
                            <th>motorista</th>
                            <th>carta de conducao</th>
                        </tr>
                    </thead>
                    @foreach ($viaturas as $key => $viatura)
                        <tbody>
                            <tr>
                                <td>{{ $viatura['matricula'] }}</td>
                                <td>{{ $viatura['hr_inicial'] }} hras</td>
                                <td>{{ $viatura['km_inicio'] }} km</td>
                                <td>{{ $viatura['hr_chegada'] }} hras</td>
                                <td>{{ $viatura['km_fim'] }} km</td>
                                <td>{{ $viatura['km_percorridos'] }} km</td>
                                <td>{{ $viatura['litros_consumidos'] }} ltr</td>
                                <td>{{ $viatura['motorista'] }}</td>
                                <td>{{ $viatura['carta_conducao'] }}</td>
                            </tr>
                            @foreach ($check_viatura as $key => $chklst)
                            <tr>
                                <td>{{ $key }}</td>
                                            <td colspan="8">
                                                @foreach ($chklst as $item)
                                                @if ($viatura['check_list_out_id'] === $item->check_list_out_id)
                                                <button class="btn btn-outline">{{ $item->checklist_name }}</button>
                                                @endif
                                                @endforeach
                                            </td>
                            </tr>
                            @endforeach
                        </tbody>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
</body>
