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
        .list-vehicle{
            list-style: none;
            display: block;
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
            <?php $total = 0; ?>
            @foreach ($ordens as $key => $order)
            <h3 class="card-title">{{1+ $key}} - {{$order['bombas']}}</h3>
            <table>
                <table class="table-content">
                    <thead>
                        <tr>
                            <td>data</td>
                            <th>Ordem</th>
                            <th>Estado</th>
                            <th>viatura</th>
                            <th>qtd</th>
                            <th>preco/ltr</th>
                            <th>subtotal</th>
                            <th>rotas e projectos</th>
                            <th>criado por</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($order['ordens'] as $ordem)
                        <tr>
                            <td>{{$ordem->created_at->format('d/m/Y H:i:s')}}</td>
                            <td>{{$ordem->codigo_ordem}}</td>
                            <td>{{$ordem->estado}}</td>
                            <td>
                                <ul class="list-vehicle">
                                    @foreach ($ordem->viatura as $viatura)
                                        <li>
                                            {{$viatura->matricula}}
                                        </li>
                                    @endforeach
                                </ul>
                            </td>
                            <td>
                                <ul class="list-vehicle">
                                    @foreach ($ordem->ordem_viatura as $qtd)
                                        <li>
                                            {{$qtd->qtd_abastecida}}
                                        </li>
                                    @endforeach
                                </ul>
                            </td>
                            <td>
                                <ul class="list-vehicle">
                                    @foreach ($ordem->ordem_viatura as $price)
                                        <li>
                                            {{ number_format($price->preco_cunsumo / $price->qtd_abastecida, 2, ',', '.') }}
                                        </li>
                                    @endforeach
                                </ul>
                            </td>
                            <td>
                                <ul class="list-vehicle">
                                    @foreach ($ordem->ordem_viatura as $subttl)
                                        <li>
                                            {{ number_format($subttl->preco_cunsumo, 2, ',', '.') }} MT
                                        </li>
                                    @endforeach
                                </ul>
                            </td>
                            <td>
                                <ul class="list-vehicle">
                                    @foreach ($ordem->ordem_viatura as $rotas)
                                        <li>
                                            @foreach ($rotas->rota as $rt)
                                            {{$rt->nome_rota}},
                                            @endforeach
                                        </li>
                                    @endforeach
                                </ul>
                            </td>
                            <td>
                                <?php $user = App\Models\User::where('id', $ordem->createdBy)->first(); ?>
                                {{ $user->name }}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
            </table>
            @endforeach

        </div>
    </div>
</body>
</html>
