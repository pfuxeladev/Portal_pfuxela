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
                @foreach ($check_viatura as $chek_datas)
                <tbody>

                    <tr>
                    @foreach ($chek_datas as $key => $viatura)
                    <td><?php echo json_encode($viatura); ?></td>
                    @endforeach
                </tr>
                {{--  @foreach ($chek_datas as $key => $item)
                <tr>
                    <th>{{$key}}</th>
                    <td colspan="8">
                        @if (empty($item['dados_checklist']))
                         Nenhuma ocorrencia
                        @else
                        @foreach ($item['dados_checklist'] as $chk)
                        {{$chk->checklist_name}},
                        @endforeach
                        @endif
                    </td>
                </tr>
                @endforeach  --}}


                </tbody>
                @endforeach
            </table>
           </div>
        </div>
    </div>
</body>
