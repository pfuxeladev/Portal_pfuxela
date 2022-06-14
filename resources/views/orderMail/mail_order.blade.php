<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ordem de abastecimento</title>
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <style type="text/css">
        * {
            box-sizing: border-box;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            border: 1px solid #ddd;
         }
         th, td {
            text-align: left;
         }
        .row::after {
            content: "";
            clear: both;
            display: table;
        }
        td {
            border-collapse: collapse;
            padding: 2px;
        }
        tbody tr:nth-child(odd) {
            background-color: #b1b1b1;
            color: rgb(55, 54, 54);
         }

    </style>
</head>

<body style="font-size:10pt; font-family:Times New Roman;">
    <div class="row d-flex justify-content-center">
        <div class='offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div class='card'>
                <img src="{{asset('images/pfuxelalogo.png')}}" style="width:150px; margin-bottom:20px; margin-left:40px" alt="">
                <div class='card-header p-4'>

                    <div style="margin-left: 20px">
                        <h3 class='mb-0 card-title'>ORDEM DE ABASTECIMENTO #
                            <b style='color:#eb691e;'>{{ $ordem->codigo_ordem; }}</b></h3>
                                <hr>
                        <div>Data de Emissão: <b>{{ $ordem->updated_at->format('d/m/Y') }}</b></div>
                        <div>Hora da Emissão: <b>{{ $ordem->updated_at->format('h:i:s') }}</b></div>



                    </div>
                </div>
                <div class='card-body' style="margin-left: 20px;">
                    <div class='row ml-4 mb-3'>
                        <div class='col-sm-6'>

                            <h5 class='mb-1'>Da: <strong>Pfuxela Exhibitions Gallery<strong/></h5>
                            <div>Av. Paulo Samuel Kankomba</div>
                            <div>Maputo, Mozambique 1114</div>
                            <div>Email: info@pfuxela.co.mz</div>
                            <div>Phone: +258 84 1000 170</div>
                        </div>

                    </div>
                    <div class='row ml-4 mb-3'>
                        <div class='col-sm-6'>

                            <h3 class='mb-1'>Para:  {{ $ordem->bombas->nome_bombas }}</h3>
                        </div>

                    </div><br>

                    <?php $total = 0; ?>
                    <table class="table table-striped text-left">
                        <thead>
                            <tr>
                                <th>
                                    <p>Matricula</p>
                                </th>
                                <th>
                                    <p>Combustivel</p>
                                </th>
                                <th>
                                    <p>Qtd</p>
                                </th>
                                <th>
                                    <p>Pre&ccedil;o Unit</p>
                                </th>
                                <th>
                                    <p>Subtotal</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($ordem->ordem_viatura as $ordViatura)
                                <tr>
                                    <td>{{ $ordViatura->viatura->matricula }}</td>
                                    <td>{{ $ordViatura->viatura->tipo_combustivel }}</td>
                                    <td>{{ $ordViatura->qtd_abastecida }}</td>
                                    <td>{{ $ordViatura->preco_cunsumo / $ordViatura->qtd_abastecida }}</td>
                                    <td>{{ $ordViatura->preco_cunsumo }}</td>

                                </tr>
                                <?php $total += $ordViatura->preco_cunsumo; ?>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <th>Subtotal</th>
                                <td>{{ $total }}</td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <th>Total</th>
                                <td>{{ $total }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="card-footer" style="margin-left: 20px; margin-top:40px;">
                    <div style="width:100%; display: block; float:left; position: relative;">
                        <p style="font-size: 14px; margin-top: 6px; margin-bottom: 20px;">
                            Gestor da Pfuxela
                            <br>
                            <hr style="float: left;" width="300">
                        </p>
                        <br>
                        <p style="font-size: 14px; margin-top: 6px; margin-bottom: 20px;">
                            Assinatura(Gestor da bomba)
                            <br>
                            <hr style="float: left;" width="300">
                        </p>
                        <br>
                        <p
                            style="font-size: 14px; margin-top: 6px; margin-bottom: 20px; float: left;">
                            <strong>Nota</strong>: A Pfuxela Exhibitions Gallery se
                            responsabiliza só e somente por abastecimentos enviados
                            automaticamente pelo sistema e mediante a
                            apresentação da cópia física devidamente assinada pelo gestor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
