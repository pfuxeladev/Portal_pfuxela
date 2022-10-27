<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Relatorio de bombas</title>
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
            /* height: 100vh;*/
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
            font-size: 8pt;
            height: auto;

        }

        .list-vehicle {
            list-style: none;
            display: block;
        }

        #combustivel-list {
            display: block;
            list-style: none;
        }
    </style>
</head>

<body style="font-family: sans-serif; font-size:10pt">
    <div class="container">
        <div class="content-header">
            <h3 class="centered-title"
                style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
                Relatorio de Abastecimento das bombas
            </h3>
        </div>
        <div class="content">
            <div class="side-company">
                <ul class="list-unstyled">
                    {{--  <li class="dado">Imprimido por: {{ auth()->user()->name }}</li>  --}}
                    <li class="dado">Data de Emissao: <?php echo date('Y-m-d H:i:s'); ?></li>
                </ul>
            </div>
            <div class="logotipo">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                    width="180px">
            </div>
        </div>
        <div class="row-data">

            <?php $total = 0;
            $preco_unit = 0; ?>
            @foreach ($relatorios as $key => $order)
                <hr>
                <h3 class="card-title">{{ 1 + $key }} - {{ $order['bombas'] }}</h3>

                <ul id="combustivel-list">
                    @foreach ($order['combustivel'] as $comb)
                        <li>{{ $comb->tipo_combustivel }}</li>
                    @endforeach
                </ul>
                <table>
                    <table class="table-content" style="font-size: 8pt;">
                        <thead>
                            <tr>
                                <td>data</td>
                                <th>Ordem</th>
                                <th>Estado</th>
                                <th>viatura</th>
                                <th>capacidade</th>
                                <th>ltr/km</th>
                                <th>combustivel</th>
                                <th>qtd</th>
                                <th>preco/ltr</th>
                                <th>justificar</th>
                                <th>rotas</th>
                                <th>criado por</th>
                                <th>subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($order['ordens'] as $lista)
                                <tr>
                                    <td>{{ $lista->data_emissao }}</td>
                                    <td>{{ $lista->codigo_ordem }}</td>
                                    <td>{{ $lista->estado }}</td>
                                    <td>{{ $lista->matricula }}</td>
                                    <td>{{ $lista->capacidade_tanque }}</td>
                                    <td>{{ $lista->ltr_km }}</td>
                                    <td>{{ $lista->tipo_combustivel }}</td>
                                    <td>{{ $lista->qtd_abastecida }}</td>
                                    <?php
                                    $preco_unit = $lista->preco_consumo / $lista->qtd_abastecida;
                                    ?>
                                    <td>{{ $preco_unit }}</td>

                                    <td>
                                        @foreach ($lista->ordem_viatura as $ordvi)
                                            {{ $ordvi->justificacao }}
                                        @endforeach
                                    </td>
                                    <td>
                                        @foreach ($lista->ordem_viatura as $rota)
                                            @if (!empty($rota->rota))
                                                @foreach ($rota->rota as $rt)
                                                {{$rt->nome_rota}}
                                                @endforeach
                                            @else
                                                <?php echo 'Abastecimento extraordinario'; ?>
                                            @endif
                                        @endforeach
                                        </td>
                                    <td>{{ $lista->usuario }}</td>
                                    <td>{{ $lista->preco_consumo }}</td>
                                    <?php
                                        $total += $lista->preco_consumo;
                                    ?>
                                </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="11"></td>
                                <td>Total</td>
                                <td>{{$order['soma_total']}}</td>
                            </tr>
                        </tfoot>
                    </table>
            @endforeach

        </div>
    </div>
</body>

</html>
