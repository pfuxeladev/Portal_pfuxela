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
                Relatorio Geral de Abastecimento por rota
            </h3>
        </div>
        <div class="content">
            <div class="logotipo">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                    width="180px">
            </div>
        </div>
        <div class="row-data">
            <?php $total = 0;
            $qtd = 0;
            $subtotal = 0;
            $preco_ltr = 0;
            $distancia_total = 0;
            $km = array();
            $preco_consumo = 0;
            ?>
            <table class="table-content" style="font-size: 6pt">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Codigo</th>
                        <th>
                            Estado
                        </th>
                        <th>Projecto</th>
                        <th>Rota</th>
                        <th>Distancia</th>
                        <th>Viaturas</th>
                        <th>Combustivel</th>
                        <th>ltr/km</th>
                        <th>Qtd</th>
                        <th>Preco Unitario</th>
                        <th>Bombas</th>
                        <th>Autor</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($ordems as $item)
                    <tr
                    <?php if ($item['estado'] == 'Cancelada') {
                        echo "style='background:rgb(252, 189, 196);'";
                    } ?>
                    >
                        <td>{{$item['data_emissao']}}</td>
                        <td>{{$item['codigo']}}</td>
                        <td>{{$item['estado']}}</td>
                        <td>{{$item['projecto']}}</td>
                        <td>{{$item['rota_nome']}}</td>
                        <td>{{$item['distancia']}}</td>
                        <td>{{$item['matricula']}}</td>
                        <td>{{$item['combustivel']}}</td>
                        <td>{{$item['ltr_km']}}</td>
                        <td>
                            <?php
                                $km = (($item['distancia']*$item['qtd_abastecida'])/$item['dist_per_order']);

                            echo number_format($km, 2, ',', '.');
                            ?>

                        </td>
                        <?php $preco = $item['preco_total']/ $item['qtd_abastecida']; ?>
                        <td>
                            {{number_format($preco, 2, ',', '.')}}
                        </td>
                        <td>{{$item['bombas']}}</td>
                        <td>{{$item['criado_por']->name}}</td>
                        <?php $preco_consumo = $preco * $km; ?>
                        <td>{{number_format($preco_consumo, 2, ',', '.')}}</td>
                        <?php
                        $total += $preco_consumo;
                        ?>
                    </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="12"></td>
                        <td>Total</td>
                        <td>{{number_format($total, 2, ',', '.')}} MT</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

</body>
</html>
