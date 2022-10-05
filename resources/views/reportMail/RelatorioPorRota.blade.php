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
            @foreach ($rotas as $rota)
                <h3>Rota: {{ $rota->nome_rota }} - Projecto: ({{ $rota->projecto->name }}), {{ $rota->distancia_km }} km
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
                            <th>ltr/km</th>
                            <th>qtd</th>
                            <th>submetido por</th>
                            <th>subtotal (MT)</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($rota->ordem_viatura as $key => $ordem)
                            @if (!empty(
        App\Models\Ordem::where('id', $ordem->ordem->id)->where('created_at', '>=', \Carbon\Carbon::today()->subDays(7))->first()
    ))
                            <tr <?php if ($ordem->ordem->estado == 'Cancelada') {
                                echo "style='background:rgb(255, 192, 199);'";
                            } ?>>
                                <?php
                                $ordens[$key] = $ordem->id;
                                ?>
                                <td>{{ $ordem->ordem->codigo_ordem }}</td>
                                <td>{{ $ordem->ordem->created_at }}</td>
                                <td>{{ $ordem->ordem->estado }}</td>
                                <td>{{ $ordem->ordem->tipo_ordem }}</td>
                                <td>{{ $ordem->ordem->bombas->nome_bombas }}</td>
                                <td>{{ $ordem->viatura->matricula }}</td>
                                <td>{{ $ordem->viatura->capacidade_media }}</td>
                                <?php $qtd = $ordem->viatura->capacidade_media * $rota->distancia_km; ?>
                                <td>{{ $qtd }}</td>
                                <?php $qtd_total += $qtd; ?>
                                <?php $user = App\Models\User::where('id', $ordem->ordem->createdBy)->first(); ?>
                                <?php $preco = $ordem->preco_cunsumo / $ordem->qtd_abastecida; ?>
                                <td>{{ $user->name }}</td>
                                <?php $preco_consumo = $preco * $qtd; ?>
                                <td>{{ number_format($preco_consumo, 2, ',', '.') }}</td>
                                <?php $total += $preco_consumo; ?>

                            </tr>
                            @endif
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th style="text-align: right" colspan="7">qtd total</th>
                            <td>{{ $qtd_total }}</td>
                            <th style="text-align: right">Total</th>
                            <td>{{ number_format($total, 2, ',', '.') }}</td>
                        </tr>
                        <?php
                        $ordens_canceladas = App\Models\Ordem::join('ordem_viaturas', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                            ->where('ordems.estado', '=', 'Cancelada')
                            ->whereIn('ordem_viaturas.id', $ordens)
                            ->sum('ordem_viaturas.preco_cunsumo');

                        $total_canceladas += $ordens_canceladas;

                        $total_geral += $total;
                        ?>

                    </tfoot>
                </table>
            @endforeach
            <br>
            <table class="table table-bordered">
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
            </table>
        </div>
    </div>
</body>

</html>
