<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Relatorio por rota</title>
    <style type="text/css">
        body {
            font-family: "Montserrat", Helvetica, Arial, serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.45;
        }

        div.relatorio_header {
            top: 0;
            width: 100%;
            z-index: 12;
            border-radius: 0.25rem;
            text-align: center;
            align-content: center;
            color: whitesmoke;
            background-color: grey;
            padding: 0.5em;
            margin-bottom: 0.5em;
            height: 55px;
            font-size: 18pt;
        }

        div.relatorio_header>h3 {
            margin-bottom: 15px;
        }

        .container {
            /*padding: calc(2rem + 4.45rem + 1.3rem) 2rem 0;*/
            display: block;
            width: 100%;
            height: auto;
        }

        .table {
            border-bottom-left-radius: 0.357rem;
            border-bottom-right-radius: 0.357rem;
            width: 100%;
            color: #6e6b7b;
            border-collapse: collapse;
        }

        table {
            border: 0.1px solid rgb(120, 119, 119);
        }

        table.table-bordered {
            border-spacing: 2px;
            border-color: grey;
        }

        .relatorio_content {
            width: 100%;
            margin-top: 120px;
            margin-right: 10px;
            position: relative;
            font-size: 9pt;
            height: auto;
        }

        table.table-bordered td,
        table.table-bordered th {
            border: 0.1px solid rgb(120, 119, 119);
            padding: 2px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="relatorio_header">
            <h3 class="relatorio_title">Relatorio de abastecimento por rota</h3>
        </div>
        <div class="relatorio_subheader">
            <div class="header">

            </div>
            <div class="logo_side">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                    width="150px">
            </div>
        </div>
        <div class="relatorio_content">
            <?php
            $preco = 0;
            $subtotal = 0;
            $total = 0;
            $qtd_total = 0;
            $ordens_canceladas = 0;
            $ordens = [];
            $total_canceladas = 0;
            $total_geral = 0;
            $total_liquido = 0;
            ?>
            @foreach ($dados as $rota)
                <h3>Rota: {{ $rota['rota'] }} - Projecto: ({{ $rota['projecto'] }}), {{ $rota['distancia_rota'] }} km
                </h3>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>codigo</th>
                            <th>data da criacao</th>
                            <th>estado</th>
                            <th>tipo</th>
                            <th>Bombas</th>
                            <th>viatura</th>
                            <th>Combustivel</th>
                            <th>ltr/km</th>
                            <th>Distancia(km)</th>
                            <th>qtd</th>
                            <th>preco</th>
                            <th>submetido por</th>
                            <th>subtotal (MT)</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($rota['ordem_rota'] as $key => $ordem)
                          
                            <tr <?php if ($ordem->situacao == 'Cancelada') {
                                echo "style='background:rgb(255, 192, 199);'";
                            } ?>>
                                
                                <td>{{ $ordem->codigo_ordem }}</td>
                                <td>{{ $ordem->created_at }}</td>
                                <td>{{ $ordem->situacao }}</td>
                                <td>{{ $ordem->tipo_ordem }}</td>
                                <td>{{ $ordem->nome_bombas }}</td>
                                <td>{{ $ordem->matricula }}</td>
                                <td>{{$ordem->tipo_combustivel}}</td>
                                <td>{{ $ordem->capacidade_media }}</td>
                                <td>{{$ordem->distancia}}</td>
                                <?php $qtd = $ordem->qtd; ?>
                                <td>{{ $qtd }}</td>
                                <?php $qtd_total+= $qtd; ?>
                                <?php $user = App\Models\User::where('id', $ordem->createdBy)->first(); ?>
                                <?php $preco = $ordem->preco_total / $ordem->qtd; ?>
                                <td>{{number_format($preco, 2, ',', '.')}}</td>
                                <td>{{ $user->name }}</td>
                                <?php $preco_consumo = $preco * $qtd; ?>
                                <td>{{ number_format($ordem->preco_total, 2, ',', '.') }}</td>
                                <?php $total += $ordem->preco_total; ?>

                            </tr> 
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="9" style="text-align:right">qtd total por rota</th>
                            <td>{{$rota['qtd_total']}}</td>
                            <th colspan="2" style="text-align:right">Total Gasto</th>
                            <td>{{$rota['preco_total']}}</td>
                        </tr>
                    </tfoot>
                </table>
            @endforeach
            <br>
            {{--  <table class="table table-bordered">
                <thead style="background:#6e6b7b; color:aliceblue">
                    <tr>
                        <th>Valor Total bruto (MZN)</th>
                        <th>Valor Total das ordens canceladas (MZN)</th>
                        <th>Valor liquido (MZN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ number_format($total_geral, 2, ',', '.') }}</td>
                        <td>{{ number_format($total_canceladas, 2, ',', '.') }}</td>
                        <?php $total_liquido = $total_geral - $total_canceladas ?>
                        <td>{{ number_format($total_liquido, 2, ',', '.') }}</td>
                    </tr>
                </tbody>
            </table>  --}}
        </div>
    </div>
</body>

</html>
