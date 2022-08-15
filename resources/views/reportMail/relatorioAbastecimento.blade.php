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
            height: 100vh;
            border-collapse: collapse;
        }
        table.table-content td, table.table-content th {
            border: 0.1px solid rgb(120, 119, 119);
            padding: 2px;
        }
        table.table-content tr:nth-child(even){background-color: #f2f2f2;}

        .row-data {
            width: 100%;
            margin-top: 180px;
            margin-right: 10px;
            position: relative;
            font-size: 9pt;
            height: auto;

        }
    </style>
</head>

<body style="font-family: sans-serif;">
    <div class="container">
        <div class="content-header">
            <h3 class="centered-title"
                style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
                Relatorio Geral de Abastecimento
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
                    width="150px">
            </div>
        </div>
        <div class="row-data">
            {{-- <h4 class="head-title" style="margin-left:5px; text-align:center; width: 100%;">Relatorio dos Abastecimentos</h4> --}}
            <?php $total = 0; ?>
            <table class="table-content">
                <thead>
                    <tr>
                        <th>Ordem</th>
                        <th>Data</th>
                        <th>Bombas</th>
                        <th>Viaturas</th>
                        <th>Tipo de Combustivel</th>

                        <th>Qtd abastecida</th>
                        <th>Preco Unitario</th>
                        <th>Rotas</th>
                        <th>Total</th>
                        {{--  <th>Autor</th>  --}}
                    </tr>
                </thead>
                <tbody>
                    @foreach ($ordem_viatura as $ordens)
                        <tr>
                            <td>{{ $ordens->ordem->codigo_ordem }}</td>
                            <td>{{ $ordens->ordem->created_at }}</td>
                            <td>{{ $ordens->ordem->bombas->nome_bombas }}</td>
                            <td>{{ $ordens->viatura->matricula }}</td>
                            <td>{{ $ordens->viatura->tipo_combustivel }}</td>
                            <td>
                                {{ $ordens->qtd_abastecida }}
                            </td>
                            <td>
                                {{ number_format($ordens->preco_cunsumo / $ordens->qtd_abastecida, 2, ',', '.') }}
                            </td>
                            <td>
                                @foreach ($ordens->ordemViaturaRota as $rt)
                                    {{ $rt->rota->nome_rota }},
                                @endforeach
                            </td>
                            <td>{{ number_format($ordens->preco_cunsumo, 2, ',', '.') }} MT</td>
                            {{--  <td>
                                @if ($ordens->ordem->approved_by !== null)
                                    {{ $ordens->ordem->approved_by->name}}
                                @endif
                            </td>  --}}
                            <?php $total += $ordens->preco_cunsumo; ?>
                        </tr>
                    @endforeach

                </tbody>
                <tfoot>
                    <tr style="border: 1px;">
                        <td colspan="7" style="text-align: right">
                            TOTAL
                        </td>
                        <td>{{ $total }} MT</td>
                    </tr>
                </tfoot>
            </table>

        </div>

    </div>
</body>

</html>
