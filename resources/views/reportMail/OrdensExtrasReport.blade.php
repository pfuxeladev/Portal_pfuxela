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
                Relatorio Geral de Abastecimentos Extras
            </h3>
        </div>
        <div class="content">
            <div class="logotipo">
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                    width="180px">
            </div>
        </div>
        <div class="row-data">
            <?php
            $total = 0;
            ?>
            <table class="table-content" style="font-size: 6pt">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Codigo</th>
                        <th>
                            Estado
                        </th>
                        <th>matricula</th>
                        <th>cap/tanque</th>
                        <th>ltr/km</th>
                        <th>qtd_anterior</th>
                        <th>qtd</th>
                        <th>combustivel</th>
                        <th>preco/ltr</th>
                        <th>destino</th>
                        <th>justificacao</th>
                        <th>criado_por</th>
                        <th>actualizador por</th>
                        <th>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($MailsOrder as $key => $order)
                        <tr>
                            <td>{{ $order->data_criacao }}</td>
                            <td>{{ $order->codigo_ordem }}</td>
                            <td>{{ $order->estado }}</td>
                            <td>
                                @foreach ($order->viatura as $viatura)
                                    {{ $viatura->matricula }}
                                @endforeach
                            </td>
                            <td>
                                @foreach ($order->viatura as $viatura)
                                    {{ $viatura->capacidade_tanque }}
                                @endforeach
                            </td>
                            <td>
                                @foreach ($order->viatura as $viatura)
                                    {{ $viatura->capacidade_media }}
                                @endforeach
                            </td>
                            <td>
                                {{ $order->qtd_ant }}
                            </td>
                            <td>
                                {{ $order->qtd }}
                            </td>
                            <td>
                                @foreach ($order->viatura as $viatura)
                                    {{ $viatura->tipo_combustivel }}
                                @endforeach
                            </td>
                            <td>
                                <?php
                                $preco_unit = $order->ordem_viatura['0']->preco_cunsumo / $order->qtd;
                                ?>
                                {{ $preco_unit }}
                            </td>
                            <td>{{ $order->destino }}</td>
                            <td>{{ $order->descricao }}</td>
                            <td>
                                <?php
                                $user = App\Models\User::where('id', $order->createdBy)->first();

                                ?>
                                {{ $user->name }}
                            </td>
                            <td>
                                <?php
                            $user = App\Models\User::where('id', $order->approvedBy)->first();
                            if(!empty($user)){
                                ?>
                                {{ $user->name }}
                                <?php
                        }else{
                            ?>
                                -
                                <?php
                        }
                        ?>
                            </td>
                            <td>
                                {{ $order->ordem_viatura['0']->preco_cunsumo }}
                            </td>
                        </tr>
                        <?php
                        $total += $order->ordem_viatura['0']->preco_cunsumo;
                        ?>
                    @endforeach

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="14" style="text-align:right">
                            total
                        </td>
                        <td>{{$total}}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</body>

</html>
