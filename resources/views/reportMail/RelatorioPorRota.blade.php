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
            padding: 0.2em;
            height: 60px;
            font-size: 18pt;
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
        table.table-bordered td, table.table-bordered th {
            border: 0.1px solid rgb(120, 119, 119);
            padding: 2px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="relatorio_header">
            <h3 class="relatorio_title">Relatorio abastecimento por cada rota</h3>
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
            @foreach ($rotas as $rota)
                <h3>Rota: {{$rota->nome_rota}}</h3>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>codigo</th>
                            <th>data da criacao</th>
                            <th>estado</th>
                            <th>tipo</th>
                            <th>viatura</th>
                            <th>qtd</th>
                            <th>submetido por</th>
                            <th>subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $preco = 0;
                              $subtotal = 0;
                              $total = 0;
                            ?>
                        @foreach ($rota->ordem_viatura as $ordem)
                        <tr>
                            <td>{{$ordem->ordem->codigo_ordem}}</td>
                            <td>{{$ordem->ordem->created_at}}</td>
                            <td>{{$ordem->ordem->estado}}</td>
                            <td>{{$ordem->ordem->tipo_ordem}}</td>
                            <td>{{$ordem->viatura->matricula}}</td>
                            <td>{{$ordem->qtd_abastecida}}</td>
                            <?php $user = App\Models\User::where('id', $ordem->ordem->createdBy)->first(); ?>
                            <td>{{$user->name}}</td>
                            <td>{{$ordem->preco_cunsumo}}</td>
                            <?php $total += $ordem->preco_cunsumo ?>
                        </tr>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>

                            <td style="text-align: right" colspan="7">Total</td>
                            <td>{{$total}}</td>
                        </tr>
                    </tfoot>
                </table>
            @endforeach

        </div>
    </div>
</body>

</html>
